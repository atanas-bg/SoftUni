import csv
import math


TOTAL_COLUMNS_COUNT = 3
ID_COLUMN = 0
X_COORDINATE_COLUMN = 1
Y_COORDINATE_COLUMN = 2


def main():
    try:
        dots_coordinates_filename = input()
        closest_distance = float(input())
        if closest_distance < 0:
            raise ValueError('Wrong distance')
        previous_x = None
        previous_y = None
        if dots_coordinates_filename and closest_distance:
            current_result = load_file(dots_coordinates_filename)
            result = []
            records_counter = 0
            for line_parts in current_result:
                records_counter += 1
                if not line_parts:
                    continue
                if len(line_parts) != TOTAL_COLUMNS_COUNT:
                        raise ValueError('Wrong data in csv file')

                current_x = float(line_parts[X_COORDINATE_COLUMN])
                current_y = float(line_parts[Y_COORDINATE_COLUMN])
                if previous_x is not None and previous_y is not None:
                    # Pythagorean Theorem Distance between two points =√(x2−x1)2+(y2−y1)2
                    current_distance = math.sqrt((current_x - previous_x) ** 2 + (current_y - previous_y) ** 2)
                    dot_id = line_parts[ID_COLUMN]

                    if current_distance < closest_distance:
                        result.append(dot_id)

                previous_x = current_x
                previous_y = current_y

            if result:
                for item in result:
                    print(item)
            else:
                print('NO CLOSE POINTS FOUND; RECORDS COUNT: {}'.format(records_counter))
        else:
            raise ValueError('No input file')
    except Exception:
        print('INVALID INPUT')


def load_file(filename: str):  # връща обект генератор
    """
    Формат на входния CSV файл:

    колона "ID" - идентификатор на точката, цяло число;
    колона "X" - координата на точката по оста X, число с плаваща запетая;
    колона "Y" - координата на точката по оста Y, число с плаваща запетая;

    Полетата в CSV файла са разделени със запетая.
    :param filename:
    :return:
    """
    with open(filename) as f:
        csv_file = csv.reader(f)
        for line_parts in csv_file:
            yield line_parts


if __name__ == '__main__':
    main()
