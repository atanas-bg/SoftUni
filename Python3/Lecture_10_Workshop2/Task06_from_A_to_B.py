"""
За колко време ще пристигне автомобил от град А до град Б, ако спазва стриктно всички ограничения на скоростта, и се абстрахираме от други фактори?

Като входни данни се подава име на файл, в който на всеки ред се съдържат 3 полета:

    километър от - включително - int
    километър до - включително - int
    ограничение на скоростта в този участък, в километри в час (км/ч)

Резултатът трябва да бъде в десетични часове, т.е. 2.5 (което означава 2 часа 30 минути) , или 2.25 (което означава 2 часа и 15 минути) и т.н. Изведете резултата с точност до 2 знака след десетичния знак.

Ако подадените данни са невалидни, трябва да изведете INVALID INPUT
"""


def main():
    try:
        filename = input()
        travel_time = calc_travel_time(filename)
        print('{:.2f}'.format(travel_time))

    except ValueError:
        print("INVALID INPUT")


def calc_travel_time(filename_path: str) -> float:
    result = 0
    with open(filename_path, 'r', encoding='utf-8') as opened_distances_file:
        for line in opened_distances_file:
            line = line.strip()
            if line:
                line_parts = line.split(',')
                kilometer_from, kilometer_to, speed_kilometers_per_hour = line_parts
                kilometer_from = float(kilometer_from)
                kilometer_to = float(kilometer_to)
                speed_kilometers_per_hour = float(speed_kilometers_per_hour)
                if (kilometer_from >= 0 and kilometer_to >= 0 and kilometer_from <= kilometer_to and
                            speed_kilometers_per_hour > 0):
                    result += (kilometer_to - kilometer_from + 1) / speed_kilometers_per_hour
                else:
                    raise ValueError("INVALID INPUT")
    return result


if __name__ == '__main__':
    main()
