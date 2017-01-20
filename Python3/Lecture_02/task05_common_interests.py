"""
Find common interests between Ivan and Maria
"""

ivan = ['пушене', 'пиене', 'тия три неща', 'коли', 'facebook', 'игри', 'разходки по плажа', 'скандинавска поезия']
maria = ['пиене', 'мода', 'facebook', 'игри', 'лов със соколи', 'шопинг', 'кино']

ivan_set = set(ivan)
maria_set = set(maria)
common_interests = ivan_set.intersection(maria_set)
print(common_interests)
