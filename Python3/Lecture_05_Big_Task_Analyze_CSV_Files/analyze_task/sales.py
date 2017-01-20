import csv
import iso8601

COLUMN_ITEM_ID = 0
COLUMN_COUNTRY = 1
COLUMN_CITY = 2
COLUMN_TIME_STAMP = 3
COLUMN_PRICE = 4

KEY_ITEM_ID = 'item_id'
KEY_ITEM_ID = 'item_id'
KEY_COUNTRY = 'country'
KEY_CITY = 'city'
KEY_TIME_STAMP = 'time_stamp'
KEY_PRICE = 'price'


def load_sales(filename: str) -> list:
    """
   Файловете с продажби са във формат CSV (UTF-8), и съдържат следните колони:

    1. Идентификационен номер на артикула;
    2. Държава, в която е била извършена продажбата (ISO code)
    3. Име на град, в която е била извършена продажбата;
    4. Дата/час на продажбата с timezone, във формат ISO8601;
    5. Цена на продажбата (цените на един и същ артикул в различните държави са различни)

    :param filename:
    :return[{
            item_id : '676135'
            # country : 'GB'
            city : 'Manchester'
            time_stamp : datetime(2015, 12, 04, 19, 37, 33, tz= +00:00) #ISO8601
            price : 491.40 # float
    },
    ...
    ]
    """
    result = []

    with open(filename, 'r', encoding='utf-8') as f:
        csv_file = csv.reader(f)
        for idx, line in enumerate(csv_file):
            sale = {}
            sale[KEY_ITEM_ID] = line[COLUMN_ITEM_ID]
            sale[KEY_CITY] = line[COLUMN_CITY]

            try:
                sale[KEY_TIME_STAMP] = iso8601.parse_date(line[COLUMN_TIME_STAMP])
            except iso8601.iso8601.ParseError as pe:
                print('Unable to parse data for item with ID: {0} on line {1}'.format(line[COLUMN_ITEM_ID]), idx)

            try:
                sale[KEY_PRICE] = float(line[COLUMN_PRICE])
            except ValueError as ve:
                print('Could not convert the price for item with ID: {0} on line {1}'.format(line[COLUMN_ITEM_ID]), idx)

            result.append(sale)

    return result

    # if __name__ == "__main__":
    #     print('run tests')
    # else:
    #     print(__name__)
