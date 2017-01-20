temperatures = {
    "Sofia": 26,
    "Varna": 32,
    "Novosibirsk": -31,
    (1, 2): 21,
    "Taiti": [20, 34],
    "Monako": {23, 35},
    "Ruse": {
        "temperature": -23,
        "humidity": 90
    },
    "Plovdiv": None,
    "Dobrich": None
}

print(temperatures)
print(temperatures["Sofia"])

temperatures["Plovdiv"] = 32
temperatures["Yambol"] = 12

key = "Yambol"
if key in temperatures:
    print(temperatures[key])
else:
    print("No data for {}".format(key))

key = (1, 2)
if key in temperatures:
    print(temperatures[key])
else:
    print("No data for {}".format(key))

for city_name in temperatures:
    print(city_name, " -> ", temperatures[city_name])

for city_name, degrees in temperatures.items():
    print(city_name, " -> ", degrees)  # expansion

for temp_data in temperatures.values():
    print(temp_data)

for city_name in temperatures.keys():
    print(city_name)


print("-" * 20)
print(temperatures.get("Burgas")) #returns None if no key is found
print(temperatures.get("Burgas", "No data"))
print(temperatures.get("Varna", "No data"))

print("-" * 20)
print(temperatures)
print("-" * 20)
temperatures.clear()
print(temperatures)
temperatures["Sofia"] = 876
print(temperatures)
del temperatures["Sofia"]
print(temperatures)


#ordered_dictionary = OrderedDict()

my_dict = dict()  # създава нов празен речник

my_dict = {}  # идентично с горното. Това е приетият начин в света на Python да се създават нови речници

len(my_dict)  # връща броя на елементите (ключовете) в речника

del my_dict['key']  # премахва ключа и неговата стойност от речника

'my_key' in my_dict  # връща True ако 'my_key' съществува в речника, независимо от стойността, False ако го няма

'my_key' not in my_dict  # връща False ако 'my_key' съществува в речника, независимо от стойността, True ако го няма

my_dict.clear(my_dict)  # премахва всички ключове и стойности от речника

my_dict.get('my_key')  # връща стойността за 'my_key'. Ако 'my_key' не съществува се връща None

my_dict.get('my_key', 'default_value')  # връща стойността за 'my_key'. Ако 'my_key' не съществува се връща стойността подадена като втори параметър, в случая текста 'default_value'

my_dict.keys()  # връща 'списък' с всички ключове в речника. Стойностите не се връщата

my_dict.values()  # връща 'списък' с всички стойности в речника, ключовете не се връщат

my_dict.items()  # връща 'списък' с всички ключове и стойности в речника