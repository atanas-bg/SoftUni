"""
Понеже имате умен хладилник, от който можете да извличате информация за температурата в него в удобен вид,
направете програма, която да Ви показва дата/час на всяко отваряне на хладилника.

При отваряне на хладилника температурата рязко се покачва с поне 4 градуса

Входните данни за програмата за име на CSV файл, в който има 2 колони:

    дата/час, в ISO формат с timezone
    температура, измерена в този час, в C
"""

import csv

TEMP_DIFFERENCE = 4

try:
    data_filename = input()

    with open(data_filename, encoding='utf-8') as f:
        reader = csv.reader(f)
        previous_temperature = None
        for row in reader:
            # this will also validate that the CSV file has 2 columns
            current_ts, current_temp = row
            current_temp = float(current_temp)

            if previous_temperature is not None:
                if current_temp - previous_temperature >= TEMP_DIFFERENCE:
                    print(current_ts)

            previous_temperature = current_temp

except Exception as e:
    print("INVALID INPUT")
