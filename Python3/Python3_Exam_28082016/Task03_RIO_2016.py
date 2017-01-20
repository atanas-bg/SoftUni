"""
В CSV файл са записани получените медали от състезанията за
всяка държава. Форматът на файла е както следва:

Крайното класиране по държави се определя по следните правила:
за всеки златен медал се получават по 7 точки;
за всеки сребърен медал - по 3 точки;
за всеки бронзов - по 1 точки;
при еднакъв брой точки, държавите се извеждат по азбучен ред на имената, в намаляваща последователност
(Zimbabwe, ..., Albania);
"""

import csv


MEDAL_POINTS = {'gold': 7, 'silver': 3, 'bronze': 1}
MEDAL_TYPE_COLUMN = 2
COUNTRY_COLUMN = 3
TOTAL_COLUMNS_COUNT = 4


def main():
    try:
        olympic_results_filename = input()
        if olympic_results_filename:
            countries_results = load_results(olympic_results_filename)
            current_result = {}
            for line_parts in countries_results:
                if len(line_parts) != TOTAL_COLUMNS_COUNT:
                    raise ValueError('Wrong data in csv file')

                medal = line_parts[MEDAL_TYPE_COLUMN]
                points = calculate_medal_points(medal, MEDAL_POINTS)
                country = line_parts[COUNTRY_COLUMN]
                if country not in current_result:
                    current_result[country] = 0
                current_result[country] += points

            result = []
            for key_country, value_points in current_result.items():
                result.append((value_points, key_country))

            if not result:
                raise ValueError('Empty file')

            result.sort(reverse=True)
            for element in result:
                print(element[1])
        else:
            raise ValueError('No input file')
    except Exception:
        print("INVALID INPUT")


def load_results(results_filename: str):
    """
    Връща ред от csv файл със следните колони:
    1. Дата на получаване на медала - ISO8601 формат;
    2. Спорт;
    3. Тип на медала - точно една от следните стойности: gold , silver , bronze ;
    4. Държава;
    :param results_filename:
    :param total_columns_count:
    :return: списък със стойностите на колоните
    """
    with open(results_filename) as f:
        csv_results = csv.reader(f)
        for line_parts in csv_results:

            yield line_parts


def calculate_medal_points(medal: str, medal_points: dict):
    return medal_points[medal]


if __name__ == '__main__':
    main()