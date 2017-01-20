# Calculates triangle area

import math

"""
По подадени дължините на трите страни на триъгълник, пресметнете лицето му,
като закръглите резултата до втората цифра след десетичната запетая.

Формулата за пресмятане на лицето на триъгълник с дължини на страните a, b и c е:

S = math.sqrt(p * (p - a) * (p - b) * (p - c)) , където p = (a + b + c) / 2

Ако са подадени невалидни данни, е необходимо да изведете INVALID INPUT
"""


def main():
    side_a_str = input()
    side_b_str = input()
    side_c_str = input()
    # if is_number(side_a_str) and is_number(side_b_str) and is_number(side_c_str):
    try:
        side_a = float(side_a_str)
        side_b = float(side_b_str)
        side_c = float(side_c_str)
        if side_a > 0 and side_b > 0 and side_c > 0:
            if (side_a + side_b) > side_c and (side_b + side_c) > side_a and (side_a + side_c) > side_b:
                p = (side_a + side_b + side_c) / 2
                triangle_area = math.sqrt(p * (p - side_a) * (p - side_b) * (p - side_c))
                print('{:.2f}'.format(triangle_area))
            else:
                print('INVALID INPUT')
        else:
            print('INVALID INPUT')
    # else:
    except ValueError:
        print('INVALID INPUT')


# def is_number(s):
#     try:
#         float(s)
#         return True
#     except ValueError:
#         return False

if __name__ == '__main__':
    main()
