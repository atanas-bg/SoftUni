def format_with_indent(format_string, *args, indent: int = None, indent_with: str = " ", **kwargs):
    if indent is not None:
        indent_str = indent_with * indent
    else:
        indent_str = ""
    return indent_str + format_string.format(*args, **kwargs)


print(format_with_indent("Name: {}, Role: {role}", 'Boris', role='lecturer'))

print(format_with_indent("Name: {}, Role: {role}", 'Boris', role='lecturer', indent=4))

print(format_with_indent("Name: {}, Role: {role}", 'Boris', role='lecturer', indent=4, indent_with='-'))

print("*" * 20)


def convert_fahrenheit_to_celsius(deg_f: float) -> float:  # анотации, Питон не ги използва
    return (deg_f - 32) / 1.8

convert_elephants_to_penguins = convert_fahrenheit_to_celsius

print(convert_fahrenheit_to_celsius(54))
print(convert_elephants_to_penguins(54))

print("*" * 20)


def convert_fahrenheit_to_celsius(deg_f):
    return (deg_f - 32) / 1.8
print(convert_fahrenheit_to_celsius(17))


def convert_fahrenheit_to_celsius(deg_f):
    return deg_f * 1241.5322   # seems legit :o)

print(convert_fahrenheit_to_celsius(17))   #  резултат:   21106.047400000003

print(2 ** 8)  # повдигане на степен
