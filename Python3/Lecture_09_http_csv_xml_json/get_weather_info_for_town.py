"""
Трябва да направим програма, с която да извличаме информация за метеорологичните условия в определен град.

Въведете град: Sofia

Информация към: 04.02.2016 18:00
Температура:
Налягане: 1015
Влажност: 90%
Вятър: 7.7 м/с

Web API: http://api.openweathermap.org/data/2.5/weather

GET параметри:

    q - заявка за търсене - име на град
    appid - API ключ; използвайте 965acdac1ae64cf06761bb563ad34d96
"""

import requests
from _datetime import datetime

TARGET_URL = 'http://api.openweathermap.org/data/2.5/weather'
TIMEOUT_SECONDS = 20
APPID = '965acdac1ae64cf06761bb563ad34d96'
STANDART = 'metric'  # Returns temperature degrees in Celsius. The default value is in Kelvins.


def main():
    town_name = input('Въведете град: ')
    if town_name:
        town_data = get_data(town_name)
        print_data(town_data)

    else:
        print('Невалидно име на град')
        return


def get_data(town: str, target_url: str = TARGET_URL,
             timeout_seconds: int = TIMEOUT_SECONDS):
    try:
        response = requests.get(target_url, params={'q': town, 'units': STANDART, 'appid': APPID},
                                timeout=timeout_seconds)
        if response.status_code == 200:
            town_data = response.json()
            return town_data
        else:
            print('Error from server {}'.format(response.status_code))
    except Exception as ex:
        print('Error from server {}'.format(str(ex)))


def print_data(town_info):
    time = datetime.now().strftime('%d-%m-%Y %H:%M:%S')
    main_data = town_info.get('main', 'No data')
    wind_data = town_info.get('wind', 'No data')

    if (main_data is not 'No data' and wind_data is not 'No data'):
        wind_speed = wind_data.get('speed')
        temp = main_data.get('temp')
        pressure = main_data.get('pressure')
        humidity = main_data.get('humidity')
        description = town_info.get('weather')[0].get('description')
    else:
        print('No data for town {}'.format(town_info.get('name')))

    print("""
Информация към: {time}
Температура: {temp}
Налягане: {pressure}
Влажност: {humidity}%
Вятър: {wind_speed} м/с
Описание: {description}
""".format(time=time, temp=temp, pressure=pressure, humidity=humidity, wind_speed=wind_speed, description=description))


if __name__ == '__main__':
    main()
