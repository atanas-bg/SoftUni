import tkinter
from tkinter import constants
import requests

TARGET_URL = 'http://api.fixer.io/latest'
TIMEOUT_SECONDS = 20
BASE_CURRENCY = 'BGN'


def main():
    # root = tkinter.Tk()
    tk = tkinter.Tk()
    frame = tkinter.Frame(tk, relief=constants.RIDGE, background='white', highlightthickness=1,
                      highlightbackground='black', highlightcolor='blue', borderwidth=1)
    frame.pack(fill=constants.BOTH, expand=1, ipadx=50, ipady=50)
    label = tkinter.Label(frame, text="Равностойност в лева", font=5, background='white')
    label.pack(anchor='nw', fill=constants.X, expand=1)
    # button = tkinter.Button(frame, text="Exit", command=tk.destroy())
    # button.pack(side=constants.BOTTOM)
    options = ["USD", "GBP", "CHF"]
    var = tkinter.StringVar()
    var.set(options[0])
    drop = tkinter.OptionMenu(frame, var, *options, command=func)
    drop.place(x=10, y=10)
    drop.pack(anchor='center', expand=1)

    tk.mainloop()


def func(value):
    currency= value
    # currency = input('Въведете валута: ')
    # if currency:
    #     currency = currency.upper()
    # else:
    #     print('Невалидна валута')
    #     return

    amount = 1
    # amount_str = input('Въведете сума: ')
    # try:
    #     amount = float(amount_str)
    #     if amount < 0:
    #         print('Сумата трябва да бъде >= 0')
    #         return
    # except Exception:
    #     print('Невалидна сума за преизчисляване!')
    #     return

    base_currency = BASE_CURRENCY
    # base_currency = input('Въведете валута, към която да бъде преизчислена сумата [BGN]: ')
    # base_currency = base_currency.upper()
    # base_currency = base_currency or BASE_CURRENCY

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



