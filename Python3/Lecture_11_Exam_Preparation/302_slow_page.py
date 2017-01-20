"""
Разполагаме с access log от Таковата, и е необходимо да проверим коя страница е имала най-голямо средно време за отговор,
 и какво е средното време на отговор в секунди. При извеждане на резултата, форматирайте секундите до 3 знака
 след десетичната запетая.

ВАЖНО: При изчисленията трябва да не вземате предвид никой URL, който завършва на /ws/

Всеки запис във файла е на отделен ред, и изглежда по следния начин:

dt="2016-02-06T13:38:45+00:00" ip="95.43.31.127" m="GET" p="http" url="/student/lecture/568015bf131b1642faa73799/"
req_b="494" ref="http://python3.softuni.bg/student/course/" ua="Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:44.0)
Gecko/20100101 Firefox/44.0" code="200" resp_t="0.032" resp_b="9300"

Времето за отговор е записано в полето resp_t (в секунди), a адресът на страницата - в полето url.

Имайте предвид, при идентифицирането на "страница", от полето url трябва да се премахнат всички GET параметри.
За целта може да използвате функциите urlparse от модула urllib.parse.
"""

FIELD_START_URL = 'url="'
FIELD_START_URL_LEN = len(FIELD_START_URL)

FIELD_START_RESPONSE_TIME = 'resp_t="'
FIELD_START_RESPONSE_TIME_LEN = len(FIELD_START_RESPONSE_TIME)
FIELD_END = '"'
PARAMS_SEP = '?'
IGNORE_SUFFIX = 'ws/'


def main():
    try:
        data_filename = input()

        sum_times_per_url = {}  # key: url  value - sum of all times
        counts_per_url = {}  # key: url  value - lines count

        with open(data_filename, encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue

                url = extract_field(line, FIELD_START_URL)
                params_pos = url.find(PARAMS_SEP)
                if params_pos >= 0:
                    url = url[:params_pos]

                if url.endswith(IGNORE_SUFFIX):
                    continue

                response_time = extract_field(line, FIELD_START_RESPONSE_TIME)
                response_time = float(response_time)

                # dict.setdefault()

                if url not in sum_times_per_url:
                    sum_times_per_url[url] = 0
                    counts_per_url[url] = 0

                sum_times_per_url[url] += response_time
                counts_per_url[url] += 1

        if sum_times_per_url:
            avg_times = []  # [ ( url, avg_time ) ]
            for url in sum_times_per_url:
                avg_time = sum_times_per_url[url] / counts_per_url[url]
                avg_times.append((avg_time, url))

            max_time = max(avg_times)
            print(max_time[1])
            print("{:.3f}".format(max_time[0]))
        else:
            print("NO DATA")
    except Exception as e:
        print("INVALID INPUT")
        print(e)


def extract_field(line, field_start: str, field_end: str = FIELD_END) -> str:
    field_start_len = len(field_start)

    field_pos = line.find(field_start)
    if field_pos == -1:
        raise ValueError("No URL field found")

    return line[field_pos + field_start_len:line.find(field_end, field_pos + field_start_len)]


if __name__ == '__main__':
    main()
# 1
