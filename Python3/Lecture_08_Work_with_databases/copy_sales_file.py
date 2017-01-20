FILENAMETOREAD = 'sales-10K.csv'
FILENAMETOWRITE = 'sample_sales.csv'

lines_counter = 0
lines_limit = 199
with open(FILENAMETOREAD, 'r', encoding='utf-8') as opened_file_to_read:
    with open(FILENAMETOWRITE, 'w', encoding='utf-8') as opened_file_to_write:
        for line in opened_file_to_read:
            if lines_counter <= lines_limit:
                opened_file_to_write.write(line)
                lines_counter += 1
            else:
                break
