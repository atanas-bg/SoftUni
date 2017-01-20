import csv
import iso8601
import sqlite3

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

DB_FILENAME = 'sample-sales-database.db'
SALES_FILENAME = 'sample-sales.csv'


def main():
    with sqlite3.connect(DB_FILENAME, isolation_level=None) as connection:
        print('Connection opened')
        create_tables(connection)
        print('Tables created')
        import_sales_into_db(connection, SALES_FILENAME)
        print("Sales imported")


def load_sales(filename: str):
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
        for idx, line in enumerate(csv_file):
            sale = {}
            sale[KEY_ITEM_ID] = line[COLUMN_ITEM_ID]
            sale[KEY_COUNTRY] = line[COLUMN_COUNTRY]
            sale[KEY_CITY] = line[COLUMN_CITY]

            try:
                sale[KEY_TIME_STAMP] = iso8601.parse_date(line[COLUMN_TIME_STAMP])
            except iso8601.iso8601.ParseError as pe:
                print('Unable to parse data for item with ID: {0} on line {1}'.format(line[COLUMN_ITEM_ID]), idx)

            try:
                sale[KEY_PRICE] = float(line[COLUMN_PRICE])
            except ValueError as ve:
                print('Could not convert the price for item with ID: {0} on line {1}'.format(line[COLUMN_ITEM_ID]), idx)

            yield sale


def create_tables(connection):
    # # Creates tables catalog
    # cursor = connection.cursor()
    # cursor.execute("""
    # create table if not exists catalog (
    #     id INTEGER PRIMARY KEY AUTOINCREMENT,
    #     item_key varchar(200),
    #     category varchar(200)
    # );
    # """)

    # Creates table sales
    cursor = connection.cursor()
    cursor.execute("""
    create table if not exists sales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        item_key varchar(200) NOT NULL,
        country varchar(3),
        city_name varchar(60),
        sale_timestamp TEXT,
        price NUMERIC
    );
    """)


# def import_catalog_into_db(connection, catalog_file):
#     cursor = connection.cursor()
#     for item_key, category in catalog_file.items():
#         cursor.execute(
#             "insert into catalog(item_key, category) values (?,?)",
#             [item_key, category]
#         )


def import_sales_into_db(connection, sales_file):
    sales = load_sales(sales_file)
    cursor = connection.cursor()
    for sale_info in sales:
        item_key = sale_info[KEY_ITEM_ID]
        country = sale_info[KEY_COUNTRY]
        city_name = sale_info[KEY_CITY]
        sale_timestamp = sale_info[KEY_TIME_STAMP]
        sale_timestamp = sale_timestamp.isoformat()
        price = sale_info[KEY_PRICE]

        cursor.execute(
            "insert into sales(item_key, country, city_name, sale_timestamp, price) values (?,?,?,?,?)",
            [item_key, country, city_name, sale_timestamp, price]
        )


if __name__ == '__main__':
    main()