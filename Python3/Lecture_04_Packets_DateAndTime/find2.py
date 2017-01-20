# files search

import os
import sys


# def append_files_to_result(dirpath, fn, result):
#     file_path = os.path.join(dirpath, fn)
#     result.append(file_path)


def find_file(start_directory: str, filename_to_search: str):
    result = []
    idx = filename_to_search.find('*')
    if idx != -1:
        filename_to_search = filename_to_search[0:idx]

    for dirpath, _, filenames in os.walk(start_directory):
        if idx == -1:
            if filename_to_search in filenames:
                file_path = os.path.join(dirpath, filename_to_search)
                result.append(file_path)
        else:
            for fn in filenames:
                sliced_name = fn[0:idx]
                if filename_to_search == sliced_name:
                    file_path = os.path.join(dirpath, fn)
                    result.append(file_path)
    return result




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
    found_filenames = find_file(directory_to_search_in, filename_to_search_for)
    if found_filenames:
        print('*' * 50)
        print("Found files:")
        for fn in found_filenames:
            print(fn)
    else:
        print("File is not found")
else:
    print("Please provide a directory as a first parameter and a filename as a second")
