"""
Draw an interesting figure
"""

import turtle

i = 10
c = 4
turtle.speed('fastest')
while True:
    for a in range(c):
        turtle.left(185)
        turtle.forward(i % 171)
        if i > 200:
            i += 12  # 18, 20
        else:
            i += 10
