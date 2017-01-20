tuple_values = (1, 2.3, "my garden")
print(tuple_values)
print(tuple_values[1])
#tuple_values[1] = 3432  #error

#expansion
number1, number2 = (1, 2)
print(number1)
print(number2)

a, b, *rest = (4, 5, 6, 7, 8)
print(a)
print(b)
print(rest)

tuple_values = (1, 2.3, 'string value')
print(tuple_values)
print(tuple_values[1:])
# tuple_values[1] = 456

# expansion
number1, number2 = [1, 2]
print(number1)
print(number2)

numbers = list(range(10, 20))

for element in numbers:
    print(element)

for current_index, element in enumerate(numbers):
    print(current_index, ' -> ', element)

# --------------

current_index = 0
for element in numbers:
    print(current_index, ' -> ', element)
    current_index += 1

# --------------

print(numbers)
# using "neshto" to test what does "enumerate" return on every iteration
for neshto in enumerate(numbers):
    index = neshto[0]
    value = neshto[1]
    # is equivalent to:
    index, value = neshto  # expansion

    print(neshto)

numbers_collection = (4, 67, 87, 90)
for ind, val in enumerate(numbers_collection):
    print(ind, " - ", val)


array_example = []
set_example = {'ei': 4, 'eh': 5}
poped_value = set_example.pop('eh')
print(poped_value)
array_example.extend(set_example.items())
print(array_example)
