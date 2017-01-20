"""
Като входни данни са подадени размерите на кашон (правоъгълен паралелепипед) - w, h, d, и име на файл,
в който на всеки ред за записани име на лекарство и 3 числа - размери на опаковки на лекарства,
които също са правоъгълни паралелепипеди.

Празните редове от файла не бива да се обработват. !!!!!!!!!!!!!!!!!!!!

От подадения файл, изведете на отделен ред името на всяко лекарство, което може самостоятелно да се побере в кашона.

Имайте предвид, че при поставяне в кашона можете да завъртате лекарствата на всички посоки.

Ако входните данни не са валидни, трябва да изведете "INVALID INPUT"

Пример:
ВХОД:
1.23
0.80
0.50
packages.txt



РЕЗУЛТАТ:
Аналгин
Лекарство 3
"""


def main():
    try:
        box_w = input()
        box_w = float(box_w)
        box_h = input()
        box_h = float(box_h)
        box_d = input()
        box_d = float(box_d)
        packages_filename = input()
        packages_filename = packages_filename.strip()
        box_sizes = [box_w, box_h, box_d]
        box_sizes.sort()
        result = []

        packages = load_packages(packages_filename)
        for p in packages:
            medicine_name, med_sizes = p
            if all(box_sizes[i] > med_sizes[i] for i in range(len(box_sizes))):
                print(medicine_name)

    except Exception:
        print('INVALID INPUT')


def load_packages(packages_filename: str) -> list:
    """
        Примерно съдържание на файла с данни за опаковките на лекарства
        Аналгин,0.10,0.15,0.25
        Памук,1.25,0.40,0.60
        Лекарство 3,0.30,0.05,0.12
        """
    med_list = []
    with open(packages_filename, 'r', encoding='utf-8') as opened_boxes_file:
        for line in opened_boxes_file:
            line = line.strip()
            if line:
                line_parts = line.split(',')
                medicine_name, med_w, med_h, med_d = line_parts
                med_w = float(med_w)
                med_h = float(med_h)
                med_d = float(med_d)
                med_sizes = [med_w, med_h, med_d]
                med_sizes.sort()
                med_list.append((medicine_name, med_sizes))
    return med_list


if __name__ == '__main__':
    main()
