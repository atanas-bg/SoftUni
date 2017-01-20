import random


def display_list(l: list = None):
    for element in l or []:
        print(element)


display_list(None)

squares = []
for n in range(10):
    squares.append(n ** 2)
print(squares)

squares = [n ** 2 for n in range(10)]
print(squares)

symbols = 'super'
new_symbols = [ch.upper() for ch in symbols]
print(new_symbols)

numbers = [(n, n % 6) for n in range(10, 20)]
random.shuffle(numbers)
print(numbers)
numbers_inverted = [(el[1], el[0]) for el in numbers]
print(numbers_inverted)
print(max(numbers_inverted))
print(min(numbers_inverted))


def get_second_value(el):
    return el[1]


# for el in numbers:
#     value = get_second_value(el)
print(min(numbers, key=lambda el: el[1]))
numbers.sort(key=lambda el: el[1])
print(numbers)

with open('file.txt') as f:
    lines_by_line_number = {line_number + 1: l.strip() for line_number, l in enumerate(f)}
    print(lines_by_line_number)

x, y, *other_values = 100, 200, 300, 400
print(other_values)  # other_values е list с всички стойности, които не са били присвоени

x, y, *_ = 100, 200, 300, 400  # Ако няма да използваме останалите стойности,


#  конвенцията е да се използва _ като име на променливата


def range_equivalent(start, end=None, step=None):
    step = step if step is not None else 1
    value = start
    while end is None or value < end:
        yield value
        value += step


# Използване на генератори:

for n in range_equivalent(2, 5):
    print(n)
