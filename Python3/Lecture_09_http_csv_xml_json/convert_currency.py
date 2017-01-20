"""
Usage

Get the latest foreign exchange reference rates in JSON format.
http://api.fixer.io/latest

Get historical rates for any day since 1999.
http://api.fixer.io/2000-01-03

Rates are quoted against the Euro by default.
Quote against a different currency by setting the base parameter in your request.
http://api.fixer.io/latest?base=USD

Request specific exchange rates by setting the symbols parameter.
http://api.fixer.io/latest?symbols=USD,GBP

Make cross-domain JSONP requests.
http://api.fixer.io/latest?callback=?

An HTTPS endpoint is available.
https://api.fixer.io/latest

Въведете валута: GBP
Въведете сума: 15.34
Равностойност в BGN: 39.17
"""

import requests

TARGET_URL = 'http://api.fixer.io/latest'
TIMEOUT_SECONDS = 20
BASE_CURRENCY = 'BGN'


def main():
    currency = input('Въведете валута: ')
    if currency:
        currency = currency.upper()
    else:
        print('Невалидна валута')
        return

    amount_str = input('Въведете сума: ')
    try:
        amount = float(amount_str)
        if amount < 0:
            print('Сумата трябва да бъде >= 0')
            return
    except Exception:
        print('Невалидна сума за преизчисляване!')
        return

    base_currency = input('Въведете валута, към която да бъде преизчислена сумата [BGN]: ')
    base_currency = base_currency.upper()
    base_currency = base_currency or BASE_CURRENCY

    rate = get_rate(currency, base_currency)
    full_amount = calculate_exchange_amount(rate, amount)
    print_rate(base_currency, full_amount)


def calculate_exchange_amount(rate: float, amount: float):
    if rate != 'NO DATA':
        full_amount = amount / rate
        return full_amount
    else:
        print('Липсват данни за тази валута')


def get_rate(currency, base_currency: str, target_url: str = TARGET_URL,
              timeout_seconds: int = TIMEOUT_SECONDS):
    try:
        response = requests.get(target_url, params={'base': base_currency}, timeout=timeout_seconds)
        if response.status_code == 200:
            exchange_rates = response.json()
            print(exchange_rates)
            rates = exchange_rates.get('rates', {})
            rate = rates.get(currency, 'NO DATA')
            return rate
        else:
            print('Error from server {}'.format(response.status_code))
    except Exception as ex:
        print('Error from server {}'.format(str(ex)))


def print_rate(base_currency: float, full_amount: float):
    print('Равностойност в {base_currency} = {full_amount:.2f}'
          .format(base_currency=base_currency, full_amount=full_amount))


if __name__ == '__main__':
    main()
