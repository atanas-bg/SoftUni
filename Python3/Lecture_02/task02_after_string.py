"""
Split the first sentence by second sentence and print the second part
"""

firstSentence = input("Enter first sentence: ")
secondSentence = input("Enter second sentence: ")
index = firstSentence.find(secondSentence)

# first solution
if (index >= 0):
    index = index + len(secondSentence)
    print(firstSentence[index:])
else:
    print("No match")

# second solution
a = firstSentence.split(secondSentence, 2)
if len(a) > 1:
    print(a[1])
else:
    print("No match")
