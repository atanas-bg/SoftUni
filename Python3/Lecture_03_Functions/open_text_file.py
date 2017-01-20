#  the script will open text.txt and print every line

f = open("./text.txt")  # "D:\\SoftUni\\Python3\\Lecture_03_Functions\\text.txt"
for line in f:
    line = line.strip()  #  deletes the new row "\n" symbol
    print(line)
if f is not None:
    f.close()

with open("text.txt", "r") as f:
    for line in f:
        print(line, end="")

with open("text.txt", "w") as f:
    f.write("test")  #  deletes everything in text.txt and writes the word "test"

with open("text.txt", "a") as f:
    f.write("1111")
    f.write("4444")
    f.write("\n6666")
    f.write("\n7777")
