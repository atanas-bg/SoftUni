alpha_dict = \
    {' ': 0, 'a': 2, 'b': 22, 'c': 222, 'd': 3, 'e': 33, 'f': 333, 'g': 4, 'h': 44, 'i': 444, 'j': 5, 'k': 55, 'l': 555,
     'm': 6, 'n': 66, 'o': 666, 'p': 7, 'q': 77, 'r': 777, 's': 7777, 't': 8, 'u': 88, 'v': 888,
     'w': 9, 'x': 99, 'y': 999, 'z': 9999}

user_input = input()
# user_input = 'a b c d e f'
user_input = user_input.strip()
if user_input:
    list_user_input = list(user_input)
    result = []
    for symbol in list_user_input:
        if symbol in alpha_dict:
            result.append(alpha_dict[symbol])
        else:
            print('INVALID INPUT')
            break
    if result:
        result = list(map(str, result))
        print(''.join(result))

else:
    print('INVALID INPUT')


