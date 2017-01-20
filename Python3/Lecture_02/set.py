numbers1 = {1, 2, 3, 4, 5}  # set {}
numbers2 = set((3, 4, 5, 6, 7, 8))
text = "sdkgfkjsfkjghjghgfkjsgflsgfieuhfkjsfkbsdkhgfleykfbewkhafk"
text_set = set(text)
print(len(text))
print(len(text_set))
print(text_set)

print(numbers1.intersection(numbers2))  # numbers1 & numbers2
print(numbers1.union(numbers2))  # numbers1 | numbers2
print(numbers1.symmetric_difference(numbers2))  # numbers1 * numbers2
print(numbers1.difference(numbers2))  # numbers1 - numbers2


numbers1 = {1, 2, 3, 'chetiri', 5}
numbers2 = set((3, 4, 5, 6, 7))

print('-' * 20)
print(numbers1)
print(numbers2)

print(2 in numbers1)

if 2 in numbers2:
    print('ima go')
else:
    print('niama go')

numbers1.add(77)
print(numbers1)
numbers1.add(2)
print(numbers1)

text = "Множеството (set) е съвкупност от уникални елементи. При него няма дефинирана подредба, а основната операция е принадлежност на елемент към множеството."

unique_chars = set()
for char in text:
    unique_chars.add(char)

print(unique_chars)
print(len(unique_chars))

unique_chars = set(text)
print(unique_chars)
print(len(unique_chars))

# --------------------------------------

numbers1 = {1, 2, 3, 4, 5}
numbers2 = set((3, 4, 5, 6, 7))

print(numbers1 & numbers2)
print(numbers1.intersection(numbers2))

print(numbers1 | numbers2)
print(numbers1.union(numbers2))

print(numbers1 - numbers2)
print(numbers1.difference(numbers2))

print(numbers1.symmetric_difference(numbers2))