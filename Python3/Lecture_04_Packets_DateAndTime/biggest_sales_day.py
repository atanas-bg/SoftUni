#  reads the sales report sales.csv and prints the day of the week with biggest sales sum if such exists.

import iso8601

FILENAME = 'sales.csv'
date_time_column = 0
price_column = 1
work_days = {}
week_days = {
    0: 'Понеделник',
    1: 'Вторник',
    2: 'Сряда',
    3: 'Четвъртък',
    4: 'Петък',
    5: 'Събота',
    6: 'Неделя'
}

with open(FILENAME, encoding='utf-8') as opened_file:
    for line in opened_file:
        line_columns = line.split(',')
        date_time_str = line_columns[date_time_column]
        date_time = iso8601.parse_date(date_time_str)
        sale_str = line_columns[price_column]
        sale = float(sale_str)

        work_day = date_time.weekday()
        if work_day in work_days:
            work_days[work_day] += sale
        else:
            work_days[work_day] = sale

max_sale = 0
best_sales_day = None
for w_day, sales_sum in work_days.items():
    if max_sale < sales_sum:
        max_sale = sales_sum
        best_sales_day = w_day
    print(week_days[w_day], ' - ', sales_sum)


if best_sales_day is not None:
    print(
        '{0} е денят с най-много продажби, които са в размер на {1:.2f}лв.'.format(week_days[best_sales_day], max_sale))
else:
    print('Липсват продажби за посочените дати.')
