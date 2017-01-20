#  reads a catalog and prints the average price by sex and age

FILENAME = "catalog_full.csv"
all_prices_sum = 0
price_position = 6
sex_age_position = 5
sex_age_dict = {}
with open(FILENAME, encoding="utf-8") as opened_file:
    for line in opened_file:
        product_info = line.split(",")
        sex_age = product_info[sex_age_position]
        price = float(product_info[price_position])
        if sex_age not in sex_age_dict:
            sex_age_dict[sex_age] = []

        sex_age_dict[sex_age].append(price)

for current_sex_age, price_list in sex_age_dict.items():
    products_counter = len(price_list)
    average_price = sum(price_list) / products_counter
    print("Average price of products for {}: {:.2f}".format(current_sex_age, average_price))
