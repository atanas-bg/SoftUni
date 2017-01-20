# tests with os

import os

for dirpath, dirnames, filenames in os.walk('./'):
    print("Директория '{}' съдържа:".format(dirpath))
    print("Под-директории: \n\t{}".format("\n\t".join(dirnames)))
    print("Файлове: \n\t{}".format("\n\t".join(filenames)))
    print("\n-------------\n\n")
    for fl in filenames:
        file_name, file_type = os.path.splitext(fl)
        abs_path = os.path.abspath(dirpath)
        print(os.path.join(abs_path, fl))
        print(file_name, " ", file_type)
        # print(os.path.abspath(fl))
print(os.path.splitext('lis*.ft.ttx'))
print('123'[0:0])  # prints nothing
if os.access('/etc/passwd', os.W_OK):
    print("Не би трябвало да можете да пишете в този файл")
elif os.access('/etc/passwd', os.R_OK):
    print("Можете да прочетете списъка с потребителите.")

# Полезни функции в os.path:
#
# os.path.join - слепя няколко стринг-а така, че да се получи валиден път до файл;
# os.path.exists - проверява дали подаденото име съществува - независимо дали е файл или директория;
# os.path.basename - връща името на файла (с разширението) по подаден пълен път до файл;
# os.path.dirname - връща името на директорията по подаден пълен път до файл;
# os.path.getsize - връща размера на файл в байтове по подадено име;
# os.path.isfile - проверява дали подаденият параметър е име на съществуващ файл;
# os.path.isdir - проверява дали подаденият параметър е име на съществуваща директория;
# os.path.splitext - връща tuple с 2 елемента - (име на файла, разширение на името на файла);
