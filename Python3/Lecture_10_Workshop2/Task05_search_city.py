import csv
import os

COLUMN_ITEM_ID = 0
COLUMN_CITY = 2
COLUMN_PRICE = 4
# KEY_ITEM_ID = 'item_id'
# KEY_CITY = 'city'
# KEY_PRICE = 'price'


def main():
    # try:
        item_key = input()
        sales_filename = input()
        sales_filename = os.path.basename(sales_filename)
        sales = load_sales(sales_filename, item_key)
        sales.sort(key=lambda el: el[1])
        city_name = sales[0][0]
        print('РЕЗУЛТАТ:\n{}'.format(city_name))

    # except Exception:
    #     print('INVALID INPUT')


def load_sales(filename: str, item_key: str) -> tuple:
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

    with open(filename, 'r', encoding='utf-8') as f:
        csv_file = csv.reader(f)
        sale = []
        for line in csv_file:
            if line:
                if line[COLUMN_ITEM_ID] == item_key:
                    city = line[COLUMN_CITY]
                    price = float(line[COLUMN_PRICE])
                sale.append((city, price))

        return sale



if __name__ == '__main__':
    main()