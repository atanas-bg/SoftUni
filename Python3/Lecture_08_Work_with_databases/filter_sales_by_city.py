"""
Продажби в град Sofia:

Артикул #: G326475   дата/час: 2016-01-04T20:34:23   сума: 24.52
Артикул #: 4578469   дата/час: 2016-01-04T21:34:23   сума: 34.34
Артикул #: G326475   дата/час: 2016-01-05T20:34:23   сума: 24.52
"""

# python filter_sales_by_city.py   ./data/sales.db
# Въведете име на град: Sofia

import sqlite3
import sys
import os

COLUMN_ITEM_KEY = 0
COLUMN_SALE_TIMESTAMP = 1
COLUMN_PRICE = 2


# DB_FILENAME = 'sample-sales-database.db'
# CITY = 'Sofia'
# CITY = 'Bristol'


def main():
    if len(sys.argv) >= 2:
        database_directory = sys.argv[1]
        db_filename = os.path.basename(database_directory)
        city = input('Въведете име на град:')
        with sqlite3.connect(db_filename, isolation_level=None) as connection:
            filter_sales(connection, city)
    else:
        print("Please provide a database directory as parameter")


def filter_sales(connection, city):
    cursor = connection.cursor()
    cursor.execute(
        "SELECT item_key,sale_timestamp,price FROM sales WHERE city_name = ? ORDER BY sale_timestamp;",
        [city]
    )

    if len(cursor.fetchall()) != 0:
        print('Продажби в град {city_name}:\t'.format(city_name=city))
        for record in cursor.fetchall():
            print('Артикул #: {item_key}   дата/час: {date_hour}   сума: {price}'.format(
                item_key=record[COLUMN_ITEM_KEY],
                date_hour=record[COLUMN_SALE_TIMESTAMP],
                price=record[COLUMN_PRICE]))
    else:
        print('Няма данни за продажби в град {city_name}'.format(city_name=city))


if __name__ == '__main__':
    main()
