#  variable scope

number_of_calculations_performed = 0  # глобална променлива


def calculate(parameter1, parameter2):
    ...
    global number_of_calculations_performed
    number_of_calculations_performed = number_of_calculations_performed + 1  # грешка


calculate(4, 5)
calculate(4, 5)
calculate(4, 5)
print(number_of_calculations_performed)

# ......................................................
number_of_calculations_performed = 10  # глобална променлива


def calculate(parameter1, parameter2):
    ...
    number_of_calculations_performed = 23
    print("In the function: ", number_of_calculations_performed)


print("Before: ", number_of_calculations_performed)
calculate(4, 5)
calculate(4, 5)
calculate(4, 5)
print("After: ", number_of_calculations_performed)
