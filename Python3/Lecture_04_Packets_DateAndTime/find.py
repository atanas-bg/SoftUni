# files search

import os
import sys
from timeit import default_timer


def find_file(start_directory: str, filename_to_search: str):
    result = []

    file_name, file_type = os.path.splitext(filename_to_search)

    file_name_size = len(file_name)
    if file_name_size >= 1:
        file_has_name = True
    else:
        file_has_name = False

    file_type_size = len(file_type)
    if file_type_size >= 1:
        file_has_type = True
    else:
        file_has_type = False

    if file_name == '*':
        idx = -2
    else:
        idx = file_name.find('*')
        if idx != -1:
            file_name = file_name[0:idx]

    for dirpath, _, filenames in os.walk(start_directory):
        if idx == -1:
            if filename_to_search in filenames:
                append_files_to_result(dirpath, filename_to_search, result)
        else:
            if file_has_name and file_name != '*':
                if file_has_type:
                    for file in filenames:
                        file_n, file_t = os.path.splitext(file)
                        sliced_name = file_n[0:idx]
                        if file_name == sliced_name and file_type == file_t:
                            append_files_to_result(dirpath, file, result)
                else:
                    for file in filenames:
                        file_n, _ = os.path.splitext(file)
                        sliced_name = file_n[0:idx]
                        if file_name == sliced_name:
                            append_files_to_result(dirpath, file, result)
            if file_has_name and file_name == '*':
                if file_has_type:
                    for file in filenames:
                        _, file_t = os.path.splitext(file)
                        if file_type == file_t:
                            append_files_to_result(dirpath, file, result)
                else:
                    for file in filenames:
                        append_files_to_result(dirpath, file, result)

    return result


def append_files_to_result(dirpath, fn, result):
    file_path = os.path.join(dirpath, fn)
    result.append(file_path)

    # return result or None
    #
    # if result:
    #     return result
    # else:
    #     return None


    ##  sys.argv ALWAYS CONTAINS AT LEAST ONE ELEMENT
    #  sys.argv[0] - ALWAYS the name of the python script that was started
    #  sys.argv[1] - the first parameter, if provided
    #  sys.argv[2] - the second parameter, if provided
    #  sys.argv[3] - ...

    # Linux & MacOS
    #
    #    python3 find.py name-to-search-for.txt
    #
    #
    #  Windows:
    #
    #    python find.py name-to-search-for.txt


if len(sys.argv) >= 3:
    directory_to_search_in = sys.argv[1]
    filename_to_search_for = sys.argv[2]
    start_time = default_timer()

    found_filenames = find_file(directory_to_search_in, filename_to_search_for)

    end_time = default_timer()
    elapsed_time = end_time - start_time

    if found_filenames:
        print('*' * 50)
        print("Found files:")
        for fn in found_filenames:
            print(fn)
    else:
        print("File is not found")

    print('-' * 20)
    print('Elapsed time: {0:.2f} seconds'.format(elapsed_time))

else:
    print("Please provide a directory as a first parameter and a filename as a second")
