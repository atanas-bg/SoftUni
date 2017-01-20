name = 'ivan'
surname = 'vankov'
print(len(name))
print(name + ' ' + surname)
fullName = name + ' ' + surname
print(fullName)
for ch in fullName:
    print(ch, end='')
print()
print(name.rfind('n'))
print(name.find('n'))
print(fullName.upper())
lines = '''
saxsx

dfsf
 fsfs
 '''
print(lines)

numbers = ["edno", "dve", "tri"]
sep = " : "
print(sep.join(numbers))

num = [1, 2, 3]
print(sep.join(str(a) for a in num))
print(sep.join(map(str, num)))

input_data = "245"
print(input_data.islower())
print(input_data.isdigit())
print(input_data.isalnum())
print(input_data.isalpha())

info_read_from_a_file = \
    b'\xd0\x90! \xd0\x9a\xd0\xb8\xd1\x80\xd0\xb8\xd0\xbb\xd0\xb8\xd1\x86\xd0\xb0, ' \
    b'\xd0\xba\xd0\xbe\xd0\xb4\xd0\xb8\xd1\x80\xd0\xb0\xd0\xbd\xd0\xb0 \xd0\xb2 UTF-8 :\xd0\xbe)'
print(info_read_from_a_file.decode("utf-8"))

info_to_be_written_out = 'Да видим това дали ще можем да го прочетем после?'.encode('utf-8')
print(info_to_be_written_out)
