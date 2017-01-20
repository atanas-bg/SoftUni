# tests with sys

import sys
print("Параметри на програмата:")
print(sys.argv)
for idx, a in enumerate(sys.argv):
    print("Argument #{} - '{}'".format(idx, a))

# python3 arguments.py
# Параметри на програмата:
# ['arguments.py']
# Argument #0 - 'arguments.py'
#
# python3 arguments.py filename.txt
# Параметри на програмата:
# ['arguments.py', 'filename.txt']
# Argument #0 - 'arguments.py'
# Argument #1 - 'filename.txt'
#
# python3 arguments.py filename.txt 46
# Параметри на програмата:
# ['arguments.py', 'filename.txt', '46']
# Argument #0 - 'arguments.py'
# Argument #1 - 'filename.txt'
# Argument #2 - '46'