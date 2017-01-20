numbers = list(range(20))
print(numbers)
print(numbers[2:15])
print(numbers[:15])
print(numbers[2:-3])
print(numbers[:-6])
print(numbers[-1])
print(numbers[-10::2])
print(numbers[4:6])
numbers[4:6] = [22, 33, 44, 55, 66]
print(numbers)
numbers.sort(reverse=True)
print(numbers)

for current_index, element in enumerate(numbers):
    print(current_index, " -> ", element)

numbers2 = list(range(30))
numbers.extend(numbers2)
print(numbers)

sen = "Python   enables  programs to  be written compactly and readably."
result = sen.split()
print(result)