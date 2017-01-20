"""
Анаграма е игра на думи, при която когато пренаредим буквите от една дума, можем да съставим друга,
като можем да използваме буквите от оригиналната дума само по веднъж.

По подадено име на файл, който съдържа по една дума на ред, и дума, изведете всички анаграми на подадената дума
сортирани по азбучен ред, без самата нея. Думите във файла не са сортирани.

Ако в подадения файл не могат да бъдат намерени анаграми на подадената дума, трябва да изведете само NO ANAGRAMS
При подадени грешни данни, е необходимо да изведете само INVALID INPUT
"""

try:
    words_filename = input()
    word_to_check = input()
    word_to_check_sorted = sorted(word_to_check)

    anagrams = []
    with open(words_filename, encoding='utf-8') as f:
        for line in f:
            word = line.strip()
            if word != word_to_check and word_to_check_sorted == sorted(word):
                anagrams.append(word)

    if anagrams:
        anagrams.sort()
        for a in anagrams:
            print(a)
    else:
        print("NO ANAGRAMS")

except Exception as e:
    print("INVALID INPUT")
    print(e)
