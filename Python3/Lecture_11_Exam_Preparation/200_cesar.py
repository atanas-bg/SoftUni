# Code message with Cesar cypher

# import codecs
# print(codecs.encode('SOFTUNI PRACTICE EXAM 2', 'rot13'))

ORD_A = ord('A')
ORD_Z = ord('Z')
ORD_DIFF = ORD_Z - ORD_A + 1

cypher_key = input()
user_input = input()
user_input = user_input.upper()

if cypher_key.isdigit() and user_input:
    cypher_key = int(cypher_key)
    result = []
    for letter in user_input:
        letter_ord = ord(letter)
        if ORD_A <= letter_ord <= ORD_Z:
            encrypted_ord = letter_ord + cypher_key
            if encrypted_ord > ORD_Z:
                encrypted_ord = encrypted_ord - ORD_DIFF
            result.append(chr(encrypted_ord))
        else:
            result.append(letter)
    print(''.join(result))
else:
    print("INVALID INPUT")
