def div_mod(number, divider):
    num = number // divider
    modulus = number % divider
    return num, modulus  # return(num, modulus)


print(div_mod(5, 2))

# по-удобно
r, m = div_mod(13, 3)
print(r)  # отпечатва 4
print(m)  # отпечатва 1


def print_greeting(name="everybody"):
    print("Hello, ", name)


print_greeting("Atanas")
print_greeting()


def function(param1=-1, param2=13):
    print(param1)  # param1 е 10
    print(param2)  # param2 е 87


function(10, param2=87)


def sum_numbers(*args):
    total = sum(args)
    return total


print(sum_numbers(2, 3, 4, 5))


def print_record(**kwargs):
    print(kwargs.pop('name', "Record"), ":")
    for key, value in kwargs.items():
        print("\t", key, "=", value)


print_record(name="ivan", age=23)
print_record(name="Mercury", distance_au=0.387, diameter_km=4878)
print_record(name="Venus", distance_au=0.723, diameter_km=12104)
print_record(name="Earth", distance_au=1, diameter_km=12742, average_temp_c=7.2,
             atmosphere=["nitrogen", "oxygen", "argon"])
print("*" * 20)
print_record()
print("*" * 20)

number_of_calculations_performed = 10  # глобална променлива


def calculate(parameter1, parameter2):
    ...

    # print(number_of_calculations_performed)
    number_of_calculations_performed = 23
    print("In the function: ", number_of_calculations_performed, id(number_of_calculations_performed))


print('Before: ', number_of_calculations_performed)
calculate(4, 5)
print('After: ', number_of_calculations_performed)

calculations_performed = []  # глобална променлива


def calculate(parameter1, parameter2):
    ...
    # global calculations_performed
    # print(number_of_calculations_performed)
    calculations_performed.append(parameter1 * parameter2)
    print("In the function: ", calculations_performed)


print('Before: ', calculations_performed)
calculate(4, 5)
calculate(40, 2)
calculate(50, 3)
calculate(60, 4)
print('After: ', calculations_performed)
