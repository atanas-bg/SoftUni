"""
ако съществителното завършва на y , то се премахва и се добавя ies ;
ако съществителното завършва на o , ch , s , sh , x или z , се добавя es ;
в останалите случаи към съществителното се добавя s
"""

end_parts_add = {'o': 'es', 'ch': 'es', 's': 'es', 'sh': 'es', 'x': 'es', 'z': 'es'}
end_parts_cut = {'y': 'ies'}
DEFAULT_NOUN_END = 's'
noun = input()
noun = noun.strip()
try:
    if noun and noun.isalpha():
        changed_noun = ""
        flag = True
        noun_is_upper = noun.isupper()
        for part in end_parts_cut:
            noun_end = end_parts_cut[part]
            if noun_is_upper:
                part = part.upper()
                noun_end = noun_end.upper()

            if noun.endswith(part):
                changed_noun = noun[:-1] + noun_end
                flag = False
                break
        if flag:
            for part in end_parts_add:
                noun_end = end_parts_add[part]
                if noun_is_upper:
                    part = part.upper()
                    noun_end = noun_end.upper()

                if noun.endswith(part):
                    changed_noun = noun + noun_end
                    flag = False
                    break

        if flag:
            end = DEFAULT_NOUN_END
            if noun_is_upper:
                end = end.upper()

            changed_noun = noun + end
    else:
        raise Exception('Wrong input')

    print(changed_noun)

except Exception:
    print('INVALID INPUT')