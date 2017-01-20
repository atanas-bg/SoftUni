from turtle import Turtle, done as turtle_done


def main():
    t = Turtle()
    t.speed("fast")
    figures = create_figures(FIGURES_INPUT_DATA)
    # figures = [
    #     Circle(0, 0, radius=100, color='green'),
    #     SquareEasiest(0, 0, radius=100, color='red')
    # ]
    for figure in figures:
        figure.draw(t)

    turtle_done()


# ========================================================

FIGURES_INPUT_DATA = [
    {"type": "square", "center_x": 0, "center_y": 0, "side": 2, "color": "black"},
    {"type": "square", "center_x": 0, "center_y": 0, "side": 100, "color": "red"},
    {"type": "square", "center_x": 0, "center_y": 0, "side": 200, "color": "blue"},
    {"type": "circle", "center_x": 0, "center_y": 0, "radius": 50, "color": "blue"},
    {"type": "circle", "center_x": 0, "center_y": 0, "radius": 100, "color": "red"},
    {"type": "triangle", "center_x": 0, "center_y": 0, "radius": 50, "color": "green"},
    {"type": "triangle", "center_x": 0, "center_y": 0, "radius": 100, "color": "green"},
    {"type": "triangle", "center_x": 0, "center_y": 0, "radius": 200, "color": "green"},
]


class Figure:
    def __init__(self, center_x: int, center_y: int, color: str):
        super().__init__()
        self.center_x = center_x
        self.center_y = center_y
        self.color = color

    def __str__(self):
        return "Figure : ({}, {})".format(self.center_x, self.center_y)

    def draw(self, turtle):
        turtle.color(self.color)

    def jump_to(self, turtle, x, y):
        turtle.penup()
        turtle.goto(x, y)
        turtle.pendown()


class Circle(Figure):
    steps = None

    def __init__(self, center_x: int = 0, center_y: int = 0, radius: int = 0, color: str = 'black'):
        super().__init__(center_x, center_y, color)
        self.radius = radius

    def draw(self, turtle: Turtle):
        super().draw(turtle)
        self.jump_to(turtle, self.center_x, self.center_y - self.radius)
        turtle.circle(self.radius, steps=self.steps)
        self.jump_to(turtle, 0, 0)


class SquareEasy(Circle):
    def __init__(self, center_x: int = 0, center_y: int = 0, radius: int = 0, color: str = 'black'):
        super().__init__(center_x, center_y, radius, color)
        self.steps = 4


class SquareEasiest(Circle):
    steps = 4


class Square(Figure):
    def __init__(self, center_x: int = 0, center_y: int = 0, side: int = 0, color: str = 'black'):
        super().__init__(center_x, center_y, color)
        self.side = side

    def draw(self, turtle: Turtle):
        super().draw(turtle)
        self.jump_to(turtle,
                     self.center_x - self.side / 2,
                     self.center_y - self.side / 2)

        for _ in range(4):
            turtle.forward(self.side)
            turtle.left(90)

        self.jump_to(turtle, 0, 0)


class Triangle(Circle):
    def __init__(self, center_x: int = 0, center_y: int = 0, radius: int = 0, color: str = 'black'):
        super(Triangle, self).__init__(center_x, center_y, radius, color)
        self.steps = 3


def create_figures(figures_input_data: list) -> list:
    """
    Return a list of Figure instances
    :param figures_input_data:
    :return:
    """
    result = []
    for fdata in figures_input_data:
        type = fdata['type']
        if type == 'square':
            figure = Square(
                center_x=fdata['center_x'],
                center_y=fdata['center_y'],
                side=fdata['side'],
                color=fdata['color'],
            )
        elif type == 'circle':
            figure = Circle(
                center_x=fdata['center_x'],
                center_y=fdata['center_y'],
                radius=fdata['radius'],
                color=fdata['color'],
            )
        elif type == 'triangle':
            figure = Triangle(
                center_x=fdata['center_x'],
                center_y=fdata['center_y'],
                radius=fdata['radius'],
                color=fdata['color']
            )
        else:
            raise Exception("Unsupported figure type: " + type)
        result.append(figure)

    return result


if __name__ == '__main__':
    main()
