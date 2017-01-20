"""
Draw square
"""

import turtle

turtle.speed('slowest')
colors = ['red', 'green', 'blue', 'purple']
length_str = input('Length = ')
length = int(length_str)

for a in range(4):
    turtle.color(colors[a])
    turtle.right(90)
    turtle.forward(length)

turtle.done()
