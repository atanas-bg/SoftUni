"""
Draw random figures
"""

import turtle

length_str = input("Enter length: ")
length = int(length_str)
degrees_str = input("Enter degrees: ")
degrees = int(degrees_str)

while True:
    turtle.color('green')
    turtle.speed('fast')
    turtle.right(degrees)
    turtle.forward(length)
    turtle.color('red')
    turtle.right(degrees)
    turtle.forward(length)

turtle.done()
