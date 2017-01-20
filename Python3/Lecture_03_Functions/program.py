#  import functions from other python files

from demo_package import calling_functions
from demo_package.demo_functions import div_mod
import pytz

print(calling_functions.convert_fahrenheit_to_celsius(10))
print(div_mod(5, 2))
