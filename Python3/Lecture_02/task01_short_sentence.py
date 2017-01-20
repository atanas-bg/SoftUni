"""
Make long sentences shorter
"""

sentence = input("Въведете текст: ")
end = "..."
maxLength = int(input("Въведете дължина на текста: "))
if len(sentence) <= maxLength:
    print(sentence)
else:
    print(sentence[0:maxLength] + end)

# Example sentence -> Python enables  programs to  be written compactly and readably.

