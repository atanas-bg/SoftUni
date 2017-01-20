"""
Find the average price of all drugs without the cheapest and the most expensive
"""

price_counter = 1
drug_prices_list = []
min_price = 0
max_price = 0
MIN_ENTERED_PRICES = 4
MIN_PRODUCTS_COUNT = 2

while price_counter <= MIN_ENTERED_PRICES:
    print("За да може да работи програмата правилно, трябва да се въведат минимум 4 цени.")
    price_str = input("Въведете цена на лекарството: ")
    while price_str != "stop":
        drug_price = float(price_str)
        drug_prices_list.append(drug_price)

        if price_counter == 1:
            min_price = drug_price
            max_price = drug_price
        elif min_price > drug_price:
            min_price = drug_price
        elif max_price < drug_price:
            max_price = drug_price

        price_counter += 1
        price_str = input("Въведете цена на лекарството: ")

drug_prices_sum = 0
drug_prices_list_copy = []
drug_prices_list_copy.extend(drug_prices_list)

if min_price == max_price:
    for price in drug_prices_list:
        drug_prices_sum += price
    average_price = drug_prices_sum / len(drug_prices_list)
else:
    while min_price in drug_prices_list:
        drug_prices_list.remove(min_price)

    while max_price in drug_prices_list:
        drug_prices_list.remove(max_price)

    if len(drug_prices_list) < MIN_PRODUCTS_COUNT:
        drug_prices_list = drug_prices_list_copy

    for price in drug_prices_list:
        drug_prices_sum += price  # sum(drug_prices_list)
    average_price = drug_prices_sum / len(drug_prices_list)

print("The minimal price is {}".format(min_price))
print("The maximal price is {}".format(max_price))
print("The average price is {}".format(average_price))
