import sqlite3
import pytz
from Lecture_08_Work_with_databases import catalog
from Lecture_08_Work_with_databases import sales

DB_FILENAME = 'sales-database.db'
CATALOG_FILENAME = 'catalog.csv'
SALES_FILENAME = 'sales-10K.csv'

catalog_csv = catalog.load_catalog(CATALOG_FILENAME)
sales_csv = sales.load_sales(SALES_FILENAME)


def main():
    with sqlite3.connect(DB_FILENAME, isolation_level=None) as connection:
        print('Connection opened')
        create_tables(connection)
        print('Tables created')
        import_catalog_into_db(connection, catalog_csv)
        print("Catalog imported")
        import_sales_into_db(connection, sales_csv)
        print("Sales imported")


def create_tables(connection):
    # Creates tables catalog
    cursor = connection.cursor()
    cursor.execute("""
    create table if not exists catalog (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        item_key varchar(200),
        category varchar(200)
    );
    """)

    # Creates table sales
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


def import_catalog_into_db(connection, catalog_file):
    cursor = connection.cursor()
    for item_key, category in catalog_file.items():
        cursor.execute(
            "insert into catalog(item_key, category) values (?,?)",
            [item_key, category]
        )


def import_sales_into_db(connection, sales_file):
    cursor = connection.cursor()
    for sale_info in sales_file:
        item_key = sale_info[sales.KEY_ITEM_ID]
        country = sale_info[sales.KEY_COUNTRY]
        city_name = sale_info[sales.KEY_CITY]
        sale_timestamp = sale_info[sales.KEY_TIME_STAMP]
        sale_timestamp = sale_timestamp.isoformat()
        price = sale_info[sales.KEY_PRICE]

        cursor.execute(
            "insert into sales(item_key, country, city_name, sale_timestamp, price) values (?,?,?,?,?)",
            [item_key, country, city_name, sale_timestamp, price]
        )


if __name__ == '__main__':
    main()
