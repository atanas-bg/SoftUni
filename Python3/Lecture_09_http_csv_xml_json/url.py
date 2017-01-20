# downloads html code of dir.bg homepage

from urllib.request import urlopen

with urlopen('http://www.dir.bg') as response:
    result = response.read()
    result = result.decode('utf-8')
    print(result)
