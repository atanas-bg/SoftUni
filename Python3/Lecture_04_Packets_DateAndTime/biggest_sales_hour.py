#  reads the sales report sales.csv and prints the hour with biggest sales sum if such exists.

import iso8601

FILENAME = 'sales.csv'
date_time_column = 0
price_column = 1
work_hours = {}

with open(FILENAME, encoding='utf-8') as opened_file:
    for line in opened_file:
        line_columns = line.split(',')
        date_time_str = line_columns[date_time_column]
        date_time = iso8601.parse_date(date_time_str)
        sale_str = line_columns[price_column]
        sale = float(sale_str)

        work_hour = date_time.hour
        if work_hour in work_hours:
            work_hours[work_hour] += sale
        else:
            work_hours[work_hour] = sale

max_sale = 0
best_sales_hour = None
for w_hour, sales_sum in work_hours.items():
    if max_sale < sales_sum:
        max_sale = sales_sum
        best_sales_hour = w_hour
    print('{0} - {1:.2f}'.format(w_hour, sales_sum))

if best_sales_hour is not None:
    print('{0} е часът с най-много продажби, които са в размер на {1:.2f}лв.'.format(best_sales_hour, max_sale))
else:
    print('Липсват продажби за посочените дати.')
