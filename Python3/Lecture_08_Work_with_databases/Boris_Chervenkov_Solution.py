import sqlite3
import csv
import iso8601

DB_FILENAME = 'sales-database.db'
CATALOG_FILENAME = 'catalog.csv'
SALES_FILENAME = 'sales-10K.csv'

COLUMN_ITEM_ID = 0
COLUMN_CATEGORY = 5

COLUMN_ITEM_ID = 0
COLUMN_COUNTRY = 1
COLUMN_CITY = 2
COLUMN_TS = 3
COLUMN_PRICE = 4

KEY_ITEM_ID = 'item_id'
KEY_COUNTRY = 'country'
KEY_CITY = 'city'
KEY_TS = 'ts'
KEY_PRICE = 'price'


def main():
    with sqlite3.connect(DB_FILENAME, isolation_level=None) as connection:
        print("Connection opened")
        create_tables(connection)
        print("Tables created")

        import_catalog_into_db(connection, CATALOG_FILENAME)

        print("Catalog imported")

        import_sales_into_db(connection, SALES_FILENAME)

        print("Sales imported")


def create_tables(connection):
    cursor = connection.cursor()
    cursor.execute("""
        create table if not exists sale (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            item_key varchar(200) NOT NULL,
            country varchar(3),
            city_name varchar(60),
            sale_timestamp TEXT,
            price NUMERIC
        );
    """)

    cursor.execute("""
        create table if not exists catalog (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            item_key varchar(200),
            category varchar(200)
        );
    """)


def load_catalog(filename: str) -> dict:
    """
    Expected columns in catalog file:

    1. Идентификационен номер на артикула;
    2. Наименование на артикула;
    3. Цветове, в които артикулът е наличен;
    4. Група на артикула;
    5. Спорт, за който е предназначен артикулът;
    6. Категория
    7. Подкатегория
    8. Пол, за който е предназначен артикула - мъже, жени, unisex, деца, бебета

    Result:
        {
            # item_id : category name
            "J11328": "SHOES",
            ...
        }

    """
    result = {}
    with open(filename, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            item_id = row[COLUMN_ITEM_ID]
            category = row[COLUMN_CATEGORY]
            result[item_id] = category
    return result


def import_catalog_into_db(connection, catalog_filename):
    catalog = load_catalog(catalog_filename)
    # key - item id  ,  value : catagory name

    cursor = connection.cursor()
    for item_key, category_name in catalog.items():
        cursor.execute(
            'insert into catalog (item_key, category) values (?, ?)',
            [item_key, category_name]
        )


def load_sales(filename: str) -> list:
    """
    Expected columns in catalog file:
        1. Идентификационен номер на артикула;
        2. Държава, в която е била извършена продажбата (ISO code)
        3. Име на град, в която е била извършена продажбата;
        4. Дата/час на продажбата с timezone, във формат ISO8601;
        5. Цена на продажбата (цените на един и същ артикул в различните държави са различни)


    Result:

        [
            {
                "item_id": "561712",
                "country": "ES",
                "city": "Murcia",
                "ts": datetime(2015, 12, 11, 17, 14, 05, tz=+01:00),
                "price": 43.21
            },
            {
                ...
            }
            ..
        ]


    """
    result = []
    with open(filename, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            sale = {}
            sale[KEY_ITEM_ID] = row[COLUMN_ITEM_ID]
            sale[KEY_COUNTRY] = row[COLUMN_COUNTRY]
            sale[KEY_CITY] = row[COLUMN_CITY]
            sale[KEY_TS] = iso8601.parse_date(row[COLUMN_TS])
            sale[KEY_PRICE] = float(row[COLUMN_PRICE])
            result.append(sale)
    return result


def import_sales_into_db(connection, sales_filename):
    sales = load_sales(sales_filename)
    cursor = connection.cursor()
    for sale in sales:
        # sale - dict
        sale_timestamp = sale[KEY_TS]

        cursor.execute(
            'insert into sale (item_key, country, city_name, sale_timestamp, price) values (?, ?, ?, ?, ?)',
            [
                sale[KEY_ITEM_ID],
                sale[KEY_COUNTRY],
                sale[KEY_CITY],
                sale_timestamp.isoformat(),
                sale[KEY_PRICE]
            ]
        )



if __name__ == '__main__':
    main()