"""
Продуктов каталог - файл 'catalog.csv'

Данни за продажби - файлове 'sales-*.csv'


$ python3    analyze.py   catalog.csv   sales-10K.csv

Обобщение # summary
---------
    Общ брой продажби: 10000
    Общо сума продажби: 3191507.82 €
    Средна цена на продажба: 319.15 €
    Начало на период на данните: 2015-12-01T08:00:48+01:00
    Край на период на данните: 2016-01-24T20:49:38+00:00

Сума на продажби по категории (top 5) # sum_of_sales_by_category
-----------------------------
    SHOES: 1519077.15 €
    T-SHIRTS: 207615.78 €
    HEADWEAR: 176304.77 €
    BALLS: 146092.19 €
    JACKETS: 130226.14 €

Сума на продажби по градове (top 5) # sum_of_sales_by_town
-----------------------------
    Manchester: 100620.74 €
    Liverpool: 96607.68 €
    London: 92239.71 €
    Nottingham: 90084.01 €
    Glasgow: 87052.21 €

Сума на продажби по час (top 5) # sum_of_sales_by_hour
-----------------------------
    2015-12-01 12:00:00+01:00: 9209.70 €
    2016-01-17 10:00:00+02:00: 8811.59 €
    2016-01-05 20:00:00+01:00: 8590.52 €
    2015-12-29 20:00:00+02:00: 8270.59 €
    2016-01-05 10:00:00+01:00: 8028.91 €
"""
from datetime import datetime, timezone
import iso8601, csv


def analyze_sales(catalog: str, sales: str):
    result = []
    top_results = 5
    summary = []
    sum_of_sales_by_category = {}
    sum_of_sales_by_town = {}
    sum_of_sales_by_hour = {}
    sales_counter = 0
    sales_sum = 0
    first_datetime_of_sale = str(datetime.max)
    last_datetime_of_sale = str(datetime.min)
    sum_of_sales_by_town_top5 = []
    sum_of_sales_by_hour_top5 = []

    sales_item_id_column = 0
    sales_country_of_sale_column = 1
    sales_town_of_sale_column = 2
    sales_datetime_of_sale_column = 3
    sales_price_of_sale_column = 4

    with open(sales, 'r', encoding='utf-8') as f:
        opened_file = csv.reader(f)
        for line_columns in opened_file:
            sales_item_id = line_columns[sales_item_id_column]
            sales_country_of_sale = line_columns[sales_country_of_sale_column]
            sales_town_of_sale = line_columns[sales_town_of_sale_column]
            sales_datetime_of_sale = line_columns[sales_datetime_of_sale_column]
            sales_price_of_sale = line_columns[sales_price_of_sale_column]

            # total statistic
            sales_counter += 1
            sales_sum += sales_price_of_sale
            if first_datetime_of_sale > sales_datetime_of_sale:
                first_datetime_of_sale = sales_datetime_of_sale
            if last_datetime_of_sale < sales_datetime_of_sale:
                last_datetime_of_sale = sales_datetime_of_sale

            # groups sales by town
            if sales_town_of_sale in sum_of_sales_by_town:
                sum_of_sales_by_town[sales_town_of_sale] += sales_price_of_sale
            else:
                sum_of_sales_by_town[sales_town_of_sale] = 0
                sum_of_sales_by_town[sales_town_of_sale] += sales_price_of_sale

            # groups sales by hour
            dt = iso8601.parse_date(sales_datetime_of_sale)
            dt_in_utc = dt.astimezone(timezone.utc)
            dt_in_utc.replace(minute=0, second=0, microsecond=0)
            sales_hour = dt_in_utc.hour
            flag = False
            if len(sum_of_sales_by_hour) == 0:
                sum_of_sales_by_hour[dt_in_utc] = sales_price_of_sale
            else:
                for sh in sum_of_sales_by_hour:
                    if sales_hour == sh.hour:
                        sum_of_sales_by_hour[sh] += sales_price_of_sale
                        flag = True
                        break
                if flag is False:
                    sum_of_sales_by_hour[dt_in_utc] = sales_price_of_sale

            # if sales_hour in sum_of_sales_by_hour:
            #     # value = '{}: {} u"\u20AC"'.format(dt_in_utc, sales_price_of_sale)
            #     sum_of_sales_by_hour[sales_hour] += sales_price_of_sale
            # else:
            #     sum_of_sales_by_hour[sales_hour] = 0
            #
            #     sum_of_sales_by_hour[sales_hour] += sales_price_of_sale

        # groups sales by town top 5
        if len(sum_of_sales_by_town) > top_results:
            while len(sum_of_sales_by_town_top5) < top_results:
                max_sum = 0
                for town_name, sum_of_sales in sum_of_sales_by_town.items():
                    if max_sum < sum_of_sales:
                        max_sum = sum_of_sales
                        tn = town_name
                sum_of_sales_by_town_top5[tn] = sum_of_sales_by_town[tn]
                sum_of_sales_by_town.pop(tn)
        else:
            sum_of_sales_by_town_top5.extend(sum_of_sales_by_town.items())

        # groups sales by hour top 5
        if len(sum_of_sales_by_hour) > top_results:
            while len(sum_of_sales_by_hour) < top_results:
                max_sum = 0
                for hour, sum_of_sales in sum_of_sales_by_hour.items():
                    if max_sum < sum_of_sales:
                        max_sum = sum_of_sales
                        h = hour
                hour_sales = sum_of_sales_by_town.popitem(h)
                sum_of_sales_by_town_top5.append(hour_sales)


        else:
            sum_of_sales_by_hour_top5.extend(sum_of_sales_by_hour)
