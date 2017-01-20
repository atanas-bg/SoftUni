#  reads a products catalog and creates an updated one with increased prices for a black friday

FILENAMETOREAD = "catalog_sample.csv"
FILENAMETOWRITE = "catalog_sample_updated.csv"
products_group_position = 4
price_position = 6

product_category_dict = {}
with open(FILENAMETOREAD, encoding="utf-8") as opened_file:
    for line in opened_file:
        line_parts = line.split(",")
        product_category = line_parts[products_group_position]

        if product_category not in product_category_dict:
            product_category_dict[product_category] = []

        product_category_dict[product_category].append(line_parts)

with open(FILENAMETOWRITE, "w", encoding="utf-8") as opened_file_update:
    price_correction = 1.45
    for category, products_data in product_category_dict.items():
        for line in products_data:
            old_price = float(line[price_position])
            new_price = price_correction * old_price
            line[price_position] = str("{:.2f}".format(new_price))
            price_correction += 0.10

            new_line = ",".join(line)
            opened_file_update.write(new_line)
            opened_file_update.write("\n")
            print(new_line)

    groups_count = len(product_category_dict)
    print(groups_count)
