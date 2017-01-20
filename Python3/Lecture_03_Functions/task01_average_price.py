#  reads a file with products and prices and prints the average price of all products

FILENAME = "catalog_full.csv"
all_prices_sum = 0
products_counter = 0
price_position = 6
with open(FILENAME, encoding="utf-8") as opened_file:
    for line in opened_file:
        product_info = line.split(",")
        all_prices_sum += float(product_info[price_position])
        products_counter += 1

average_price = all_prices_sum / products_counter
print("Average price of all products: {:.2f}".format(average_price))
