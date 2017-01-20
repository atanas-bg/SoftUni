import csv

COLUMN_ITEM_ID = 0
COLUMN_ITEM_CATEGORY = 5


def load_catalog(filename: str) -> dict:
    """
    Файловете с продуктовия каталог са във формат CSV (UTF-8), и съдържат следните колони:

    1. Идентификационен номер на артикула;
    2. Наименование на артикула;
    3. Цветове, в които артикулът е наличен;
    4. Група на артикула;
    5. Спорт, за който е предназначен артикулът;
    6. Категория
    7. Подкатегория
    8. Пол, за който е предназначен артикула - мъже, жени, unisex, деца, бебета

    :param filename:
    :return{
            item_id, item_category
            'J11328', 'SHOES'
    }
    """

    result = {}

    with open(filename, 'r', encoding='utf-8') as f:
        csv_file = csv.reader(f)
        for line in csv_file:
            item_id = line[COLUMN_ITEM_ID]
            item_category = line[COLUMN_ITEM_CATEGORY]
            result[item_id] = item_category

    return result
