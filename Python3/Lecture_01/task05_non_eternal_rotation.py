"""
Draw figures with given number of iterations
"""

import turtle

g = 134
l = 120
number_iterations_str = input("Enter the number of iterations: ")
number_iterations = int(number_iterations_str)
turtle.speed('fast')

for a in range(number_iterations):
    turtle.left(g)
    turtle.forward(l)

turtle.done()
