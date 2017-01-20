class Figure:
    def __init__(self, center_x: float, center_y: float, color='black'):
        self.center_x = center_x
        self.center_y = center_y
        self.color = color

    def print_figure(self):
        print('Center: ({0}, {1}), Color: {2}'.format(self.center_x, self.center_y, self.color))

    def __str__(self):
        return 'Center: ({0}, {1}), Color: {2}'.format(self.center_x, self.center_y, self.color)

    def scale(scale_factor):
        # nothing to do here - scaling does not affect center coordinates
        pass

    def __eq__(self, other):
        return (
            self.center_x == other.center_x
            and self.center_y == other.center_y
            and self.color == other.color
        )


figure = Figure(2, 4)
figure.print_figure()
print(figure)

f = Figure(10, 20, 'red')
print(str(f))
print(f)
print("This is a {}".format(f))


class Circle(Figure):
    def __init__(self, center_x: float, center_y: float, radius: float, color='black'):
        super().__init__(center_x, center_y, color)
        self.radius = radius

    def scale(scale_factor):
        super().scale(scale_factor)  # it is a GOOD idea to always call the super() method
        self.radius = self.radius * scale_factor

    def __str__(self):
        return 'Center: ({0}, {1}), Radius: {2}, Color: {3}'.format(self.center_x, self.center_y, self.radius,
                                                                    self.color)


d = Circle(3, 50, 4)
print(d)

f = Figure(10, 20, 'red')
f2 = Figure(10, 20, 'red')

...

print(f == f2)
