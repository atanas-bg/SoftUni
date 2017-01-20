#  the code prints on the console the most common char in the input string

import collections

user_input = input()
user_input = user_input.strip()
chars_count = {}
if user_input:
    for char in user_input:
        if char not in chars_count:
            chars_count[char] = 0

        chars_count[char] += 1

    list_chars_count = list(chars_count.items())
    list_chars_count.sort(key=lambda el: el[1], reverse=True)
    # result = list_chars_count[0]
    # symbol = result[0]
    # print(symbol)
    print(list_chars_count[0][0])

    # Short solution
    chars_count = collections.Counter(user_input)  # returns Counter with dictionary of tuples
    most_common = chars_count.most_common(1)  # returns array with a tuple
    print(most_common[0][0])  # takes the first key of the first tuple
else:
    print('INVALID INPUT')
