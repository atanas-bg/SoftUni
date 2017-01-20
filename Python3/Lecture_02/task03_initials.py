"""
Create initials of entered names
"""

names = input("Въведете имената си: ")
namesList = names.split()
namesListLength = len(namesList)
initials = list()  # []

if namesListLength > 0:
    for a in range(namesListLength):
        name = namesList[a]
        initials.append(name[0])

    print(".".join(initials) + ".")
else:
    print("No names entered")
