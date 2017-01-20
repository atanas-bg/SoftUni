import requests
from pprint import pprint


TARGET_URL = 'http://www.dir.bg'
IMAGE_TAG = '<img '

# response = requests.get(TARGET_URL, params={'query':'олимпийски игри'}, timeout=20)
# response_text = response.text
#
# if IMAGE_TAG in response_text:
#     print('Ima kartinki')
#
# counter = 0
# found_index = 0
# while found_index != -1:
#     found_index = response_text.find(IMAGE_TAG, found_index)
#     if found_index != -1:
#         counter += 1
#         found_index += 1
#
# print(counter)



#
# response = requests.get('http://api.fixer.io/latest?symbols=USD,GBP')
# print(response.content.decode())

# response = requests.get('http://api.fixer.io/latest', timeout=2.5)   # timeout е в секунди
# content = response.text
# pprint(content)

response = requests.get('http://api.fixer.io/latest', timeout=20, params={'symbols': 'USD,GBP'})   # timeout е в секунди
print(response.url)
print(response.text)

response = requests.get('http://api.openweathermap.org/data/2.5/weather',    # основен URL
                        params={   # GET параметри - dict
                            'q': 'Sofia',
                            'appid': '965acdac1ae64cf06761bb563ad34d96'
                            },
                        timeout=20,  # seconds
                        )

# От извикването по-горе, библиотеката ще композира пълния URL:
print(response.url)
pprint(response.json())

response = requests.get('http://api.fixer.io/latest', timeout=20)
exchange_rates = response.json()
pprint(exchange_rates)
