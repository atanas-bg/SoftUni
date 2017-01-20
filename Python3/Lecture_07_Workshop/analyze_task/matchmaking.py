people = [
    {
        'name': "Мария",
        'interests': ['пътуване', 'танци', 'плуване', 'кино'],
        'gender': "female",
    },
    {
        'name': "Диана",
        'interests': ['мода', 'спортна стрелба', 'четене', 'скандинавска поезия'],
        'gender': "female",
    },
    {
        'name': "Дарина",
        'interests': ['танци', 'покер', 'история', 'софтуер'],
        'gender': "female",
    },
    {
        'name': "Лилия",
        'interests': ['покер', 'автомобили', 'танци', 'кино'],
        'gender': "female",
    },
    {
        'name': "Галя",
        'interests': ['пътуване', 'автомобили', 'плуване', 'баскетбол'],
        'gender': "female",
    },
    {
        'name': "Валерия",
        'interests': ['плуване', 'покер', 'наука', 'скандинавска поезия'],
        'gender': "female",
    },
    {
        'name': "Ина",
        'interests': ['кино', 'лов със соколи', 'пътуване', 'мода'],
        'gender': "female",
    },
    {
        'name': "Кирил",
        'interests': ['баскетбол', 'автомобили', 'кино', 'наука'],
        'gender': "male",
    },
    {
        'name': "Георги",
        'interests': ['автомобили', 'футбол', 'плуване', 'танци'],
        'gender': "male",
    },
    {
        'name': "Андрей",
        'interests': ['футбол', 'скандинавска поезия', 'история', 'танци'],
        'gender': "male",
    },
    {
        'name': "Емил",
        'interests': ['летене', 'баскетбол', 'софтуер', 'наука'],
        'gender': "male",
    },
    {
        'name': "Димитър",
        'interests': ['футбол', 'лов със соколи', 'автомобили', 'баскетбол'],
        'gender': "male",
    },
    {
        'name': "Петър",
        'interests': ['пътуване', 'покер', 'баскетбол', 'лов със соколи'],
        'gender': "male",
    },
    {
        'name': "Калоян",
        'interests': ['история', 'покер', 'пътуване', 'автомобили'],
        'gender': "male",
    },
]

men_list = []
women_list = []
for human in people:
    if human.get("gender") == "male":
        men_list.append(human)
    elif human.get("gender") == "female":
        women_list.append(human)

for man in men_list:
    for woman in women_list:
        man_interests = set(man["interests"])
        woman_interests = set(woman["interests"])
        common_interests = man_interests.intersection(woman_interests)
        if len(common_interests) > 0:
            common_interests_str = ", ".join(common_interests)
            print("{0} и {1} - общ интерес: {2}".format(man.get("name"), woman.get("name"), common_interests_str))

people.sort(key=lambda person: (person['name'], person['gender']))
print([p['name'] for p in people])

names = ['Андрей', 'Ангел', 'Валерия', 'Галя', 'Георги', 'Дарина', 'Диана', '']
print(all(names)) # False
print(any(names))# True

names_filtered = []
for n in names:
    if n.startswith('А'):
        names_filtered.append(n)
print(names_filtered)

names_filtered = list(filter(lambda name: name.startswith('А'), names)) # връща генератор
print(names_filtered)

# for n in names_filtered:
#     print(n)

