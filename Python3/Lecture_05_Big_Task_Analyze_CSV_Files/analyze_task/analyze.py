# creates sales report

from datetime import datetime
import sys
# import os.path
# sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
# print(sys.path)
# import Lecture_05_Big_Task_Analyze_CSV_Files.analyze_task
from timeit import default_timer
from Lecture_05_Big_Task_Analyze_CSV_Files.analyze_task.catalog import load_catalog
from Lecture_05_Big_Task_Analyze_CSV_Files.analyze_task.sales import load_sales, \
    KEY_ITEM_ID, KEY_CITY, KEY_TIME_STAMP, KEY_PRICE

TOP_RESULT = 5


def main():
    # if len(sys.argv) >= 3:
        # catalog_directory = sys.argv[1]
        # sales_directory = sys.argv[2]
        # catalog = load_catalog(catalog_directory)
        # sales = load_sales(sales_directory)
        catalog = load_catalog('catalog.csv')
        sales = load_sales('sales-10K.csv')

        start_time = default_timer()

        print_total_stats(sales)
        print_top_by_category(sales, catalog)
        print_top_by_city(sales)
        print_top_by_hour(sales)

        end_time = default_timer()
        elapsed_time = end_time - start_time

        print('-' * 20)
        print('Elapsed time: {0:.2f} seconds'.format(elapsed_time))

    # else:
    #     print("Please provide catalog directory as a first parameter and sales directory as a second")


def print_total_stats(sales: list):
    """
    Обобщение
    ---------
    Общ брой продажби: 10000
    Общо сума продажби: 3191507.82 €
    Средна цена на продажба: 319.15 €
    Начало на период на данните: 2015-12-01T08:00:48+01:00
    Край на период на данните: 2016-01-24T20:49:38+00:00

    :param sales:
    :return:
    """
    total_sales_sum = 0
    min_timestamp = None
    max_timestamp = None

    for sale_info in sales:  # see sales.load_sales() for details
        price = sale_info[KEY_PRICE]
        total_sales_sum += price
        datetime_of_sale = sale_info[KEY_TIME_STAMP]
        if min_timestamp is None or min_timestamp > datetime_of_sale:
            min_timestamp = datetime_of_sale
        # min_timestamp = min(sale_info[KEY_TIME_STAMP] for sale_info in sales)
        if max_timestamp is None or max_timestamp < datetime_of_sale:
            max_timestamp = datetime_of_sale

    sales_count = len(sales)
    average_sales_price = total_sales_sum / sales_count if sales_count else None  # тернарен оператор

    result = """
    Обобщение
    ---------
    Общ брой продажби: {sales_count}
    Общо сума продажби: {total_sales:.2f} €
    Средна цена на продажба: {average_sales_price:.2f} €
    Начало на период на данните: {first_datetime_of_sale}
    Край на период на данните: {last_datetime_of_sale}
    """.format(
        sales_count=sales_count,
        total_sales=total_sales_sum,
        average_sales_price=average_sales_price,
        first_datetime_of_sale=min_timestamp,
        last_datetime_of_sale=max_timestamp)

    print(result)


def print_top_by_category(sales: list, catalog: dict):
    """
    Сума на продажби по категории (top 5)
    -----------------------------
    SHOES: 1519077.15 €
    T-SHIRTS: 207615.78 €
    HEADWEAR: 176304.77 €
    BALLS: 146092.19 €
    JACKETS: 130226.14 €

    :param sales:
    :param catalog:
    :return:
    """
    group_by_category = {}
    for sale_info in sales:
        item_id = sale_info[KEY_ITEM_ID]
        price = sale_info[KEY_PRICE]
        category = catalog.get(item_id, None)
        if category in group_by_category:
            group_by_category[category] += price
        else:
            group_by_category[category] = 0
            group_by_category[category] += price

    result = []

    for category, price in group_by_category.items():
        result.append((price, category))

    result.sort(reverse=True)

    print("""
    Сума на продажби по категории (top 5)
    -----------------------------
    """)

    for sales_sum, category in result[:TOP_RESULT]:
        print('    {category}: {sales_sum:.2f} €'.format(category=category, sales_sum=sales_sum))


def print_top_by_city(sales: list):
    """

    Сума на продажби по градове (top 5)
    -----------------------------
    Manchester: 100620.74 €
    Liverpool: 96607.68 €
    London: 92239.71 €
    Nottingham: 90084.01 €
    Glasgow: 87052.21 €

    :param sales:
    :return:
    """

    group_by_city = {}
    for sales_info in sales:
        city = sales_info[KEY_CITY]
        price = sales_info[KEY_PRICE]
        if city in group_by_city:
            group_by_city[city] += price
        else:
            group_by_city[city] = 0
            group_by_city[city] += price

    result = []
    for city, sales_sum in group_by_city.items():
        result.append((sales_sum, city))

    result.sort(reverse=True)

    print("""
    Сума на продажби по градове (top 5)
    -----------------------------
    """)

    for sales_sum, city in result[:TOP_RESULT]:
        print('    {city}: {sales_sum:.2f} €'.format(city=city, sales_sum=sales_sum))


def print_top_by_hour(sales: list):
    """
    Сума на продажби по час (top 5)
    -----------------------------
    2015-12-01 12:00:00+01:00: 9209.70 €
    2016-01-17 10:00:00+02:00: 8811.59 €
    2016-01-05 20:00:00+01:00: 8590.52 €
    2015-12-29 20:00:00+02:00: 8270.59 €
    2016-01-05 10:00:00+01:00: 8028.91 €

    :param sales:
    :return:
    """
    group_sales_by_hour={}
    for sales_info in sales:
        time_stamp = sales_info[KEY_TIME_STAMP]
        time_stamp = time_stamp.replace(minute=0, second=0, microsecond=0)
        price = sales_info[KEY_PRICE]

        if time_stamp in group_sales_by_hour:
            group_sales_by_hour[time_stamp] += price
        else:
            group_sales_by_hour[time_stamp] = 0
            group_sales_by_hour[time_stamp] += price

    result = []
    for time_stamp, sales_sum in group_sales_by_hour.items():
        result.append((sales_sum, time_stamp))

    result.sort(reverse=True)

    print("""
    Сума на продажби по час (top 5)
    -----------------------------
    """)

    for sales_sum, time_stamp in result[:TOP_RESULT]:
        print('    {time_stamp}: {sales_sum:.2f} €'.format(time_stamp = time_stamp, sales_sum = sales_sum))


if __name__ == "__main__":
    main()