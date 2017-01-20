#  create exceptions

names = {
    "Ivan": 23,
    "Petar": 16,
    "Georgi": 67}


# try:
#     name = input("Въведете име: ")
#     if name not in names:
#         raise ValueError("error")
#     elif names[name] < 18:
#         raise Exception
#     else:
#         print(name,": ", names[name])
# except KeyError as ke:
#     print("The name doesn't exist: " + str(ke))
# except ValueError as ke:
#     print("The name doesn't exist: " + str(ke))
# except Exception as ke:
#     print("The person is less then 18 years old: " + str(ke))
# except:
#     print("Unknown error")


def search_name(name: str, names: dict) -> str:
    try:
        return names[name]
    except:
        print('Nqma takova ime')


print(search_name('Ivancho', names))
print(names['Ivancho'])
print(float('oiu'))
