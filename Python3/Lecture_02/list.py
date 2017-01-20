values = [1, 5.6, 'dve']

print(values)
print(values[2])
# print(values[23])  # will raise an error

print(values.index(1))  # shows index of value 1 and raises error if no value is found
print(values.index(5.6))  # shows index of value 5.6
print(values.index("dve"))  # shows index of value dve

if 1 in values:
    print("ima go")
else:
    print("niama go")

values[2] = 'new string value'
values[1] = 'new string value'
print(values)

values.append(34)
values.append(12)
print(values)

values.insert(0, 'something else')  # inserts at index 0 the value 'something else'
values.insert(1, "neshto")
print(values)

values.remove('new string value')
values.remove('new string value')
print(values)

removed_value = values.pop()  # removes the last element
print(removed_value)
print(values)

removed_value = values.pop(0)  # removes the element at index 0
print(removed_value)
print(values)

numbers = list(range(20))
print(numbers)

print(numbers[2:34])
print(numbers[2:])
print(numbers[:5])
print(numbers[2:15:2])
print(numbers[-1])
print(numbers[len(numbers) - 1])
print(numbers[-10::-2])  # in reverse order to the first index
print(numbers[-10:-2])
print(numbers[10::-2])
print(numbers[10:-12])
print(numbers[10:-12: -1])

numbers = list(range(20))
print(numbers)

numbers[4] = 55
print(numbers)

print(numbers[4:6])
numbers[4:6] = [66, 77, 88]  # numbers[4] = 66, numbers[5] = 77, numbers[6] = 88
print(numbers)
numbers[4:6] = []  # replaces 4 and 5 index with no value
print(numbers)

print("*" * 20)
numbers[3] = [98, 99, 100]
print(numbers)

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

print(matrix[1][-1])
print(matrix[0][2])
print(matrix)

numbers1 = list(range(10))
numbers2 = list(range(10, 20))
print(numbers1 + numbers2)
print(len(numbers1))
print(len(numbers2))
numbers1.append(numbers2)
print(numbers1)
print(len(numbers1))
print(len(numbers1 + numbers2))
numbers1 = numbers1 + numbers2  # numbers1.extend(numbers2)
print(numbers1)

for current_index, element in enumerate(numbers1):
    print(current_index, ' -> ', element)

numbers2.sort(reverse=True)
print(numbers2)
