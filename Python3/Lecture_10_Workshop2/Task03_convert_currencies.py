"""
Реализирайте програма, която да конвертира сума от подадена валута към български лева (BGN). Резултатите трябва да се закръглят до втория знак след десетичната запетая.

Входни данни:

име на файл, съдържащ обменни курсове на различни валути към BGN; Празните редове във файла не бива да се обработват;
име на файл, съдържащ на всеки ред сума и валута, в която е сумата; Празните редове във файла не бива да се обработват;
 Имайте предвид, че в този файл ще има по няколко суми от една и съща валута;
Очакван изход: За всеки ред от файла със сумите, трябва да бъде изведена на отделен ред съответната сума в български лева.

Ако в някой от двата файла има невалидни данни, трябва да изведете като резултат само INVALID INPUT.

Пример:
Ако имаме 2 файла:

exchange.txt, който съдържа:

AUD 0.79676
CAD 0.78761
CHF 0.56759
USD 0.57276
EUR 0.5111
и amounts.txt

623.83 USD
572.53 EUR
12 CHF
1182.08 AUD
24 CHF
Входни данни:

exchange.txt
amounts.txt
"""
INVALID_INPUT_MESSAGE = 'INVALID INPUT'


def main():
    exchange_rates_file = input()
    amounts_file = input()
    try:
        # if exchange_rates_file and amounts_file:
        rates = load_exchange_rates(exchange_rates_file)  # dict
        amounts = load_amounts(amounts_file)  # list of tuples
        result = calculate_converted_amount(amounts, rates)
        for value in result:
            print('{:.2f}'.format(value))

    except Exception:
        return INVALID_INPUT_MESSAGE


def calculate_converted_amount(amounts: list, rates: dict) -> list:
    result = []
    for currency_amount in amounts:
        currency, amount = currency_amount
        currency_to_bgn_rate = rates.get(currency, None)
        converted_to_bgn_amount = 0
        if currency_to_bgn_rate is not None:
            converted_to_bgn_amount = amount / currency_to_bgn_rate
            result.append(converted_to_bgn_amount)
        else:
            raise Exception('Currency not found')

    return result


def load_exchange_rates(rates_file: str) -> dict:
    """
    Example input:
    AUD 0.79676
    CAD 0.78761
    :param rates_file:
    :return:
    """
    dict_exchange_rates = {}
    with open(rates_file, 'r', encoding='utf-8') as opened_rates_file:
        for line in opened_rates_file:
            line = line.strip()
            if line:
                currency_rate = line.split()
                # If the len(curency_rate) != 2, the following will raise an error
                currency, rate = currency_rate
                rate = float(rate)
                if currency.isalpha() and is_number(rate):
                    dict_exchange_rates[currency] = rate
                else:
                    raise Exception('Invalid currency or rate')

        return dict_exchange_rates


def load_amounts(amounts: str) -> list:
    """
    The data must be entered in a list, because the order is important
    Example input:
    623.83 USD
    572.53 EUR
    :param amounts:
    :return:
    """
    list_amounts = []
    with open(amounts, 'r', encoding='utf-8') as opened_amounts_file:
        for line in opened_amounts_file:
            line = line.strip()
            if line:
                amount_currency = line.split()
                # If the len(curency_rate) != 2, the following will raise an error
                amount, currency = amount_currency
                amount = float(amount)
                if currency.isalpha() and is_number(amount):
                    list_amounts.append((currency, amount))
                else:
                    raise Exception

    return list_amounts


def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        return False


if __name__ == '__main__':
    main()
