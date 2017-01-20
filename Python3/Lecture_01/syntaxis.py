# print(2 + 2)
# print(2 * 2)
# print(10 / 2)
# print(10 / 3)
# print(10 // 3)
# print(10 % 3)
# print(10 ** 3)
#
# age = 120
#
# if 100 <= age < 150:
#     print('You are very old :)')
# else:
#     print('You are young.')
#
# user_input = input("Please enter your name: ")
#
# # user_input съдържа string, който е въведен от потребителя
#
# print(user_input)   # отпечатва стойността, като слага и нов ред
# print(user_input, "34", 882.45)  # отпечатва всички подадени стойности, разделени с интервал, и слага нов ред
#
# print(user_input, end="iooi")   # отпечатва стойността, като вместо нов ред отпечатва подадената стойност в параметъра  end - в този пример няма да бъде добавен нов ред
# print(user_input)

count = input("Enter number of iterations: ")
max_count = int(count)
counter = 0

while counter < max_count:
    print(counter)
    counter += 1

for a in range(4, counter, 2):  # prints a in range from 4 to counter by step of 2
    print(a)

for a in range(counter, 4, -1):  # prints a in range from counter to 4 by step of -1; counter must be bigger then 4
    print(a)

for a in range(8, 4, -1):
    print(a)