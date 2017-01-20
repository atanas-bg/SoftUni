sentence3 = "За да дефинирате многоредов стринг"

print(sentence3)
print(sentence3.replace('а', 'AA'))
print(sentence3)

print(sentence3[3])

print(sentence3[3:15])
print(sentence3[3:])
print(sentence3[:])
print('---')
print(sentence3[9:156])

# new way of formatting strings
name = 'boris'
print("I am {name} and I'm happy {when}".format(name=name, when='now'))

price = 37.345523
print("Price: {:.2f}".format(price))

# old way for string formatting
print("I am %s and I'm happy " % name)

print(len("За - ! :)"))

print(sentence3[1])

print(len(sentence3))

parts = "I am %s and I'm happy".split()
print("-".join(parts))

print("12345678901234567890"[:10])

t = "12345678901234567890"
d = "67"

print(t[t.index(d) + len(d):])