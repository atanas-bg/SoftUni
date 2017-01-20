"""
Draw a chess board
"""

import turtle

side = 40
turtle.speed('fastest')
turtle.penup()
turtle.goto(0, 0)
turtle.pendown()
for row in range(8):
    for col in range(8):
        if (col + row) % 2 == 0:
            turtle.begin_fill()

        for a in range(4):
            turtle.forward(side)
            turtle.left(90)

        turtle.end_fill()
        turtle.forward(side)

    turtle.penup()
    turtle.goto(0, (row + 1) * side)
    turtle.pendown()

turtle.exitonclick()
