# python examples with date and time functions

from datetime import datetime, timedelta, date, time
import pytz
import iso8601
from timeit import default_timer

start_time = default_timer()
d = date.today()
dt = datetime.now()
dt1 = date(2017, 8, 11)
dt2 = datetime(year=2016, month=8, day=25, hour=12, minute=52, second=45)
dt3 = datetime(year=2016, month=8, day=28, hour=12, minute=58, second=12, microsecond=234654)
print(d)
print(dt)
d1 = str(dt)
print(d1)
date_str_iso = dt.isoformat()
print(date_str_iso)

dparsed = iso8601.parse_date(date_str_iso)
print(dparsed)

dt = dt + timedelta(days=30)
d2 = str(dt)
print(d2)
print(dt1)
print(dt2)
print(dt3)
tdelta = dt3 - dt2
print(tdelta)

print(dt.strftime('%d.%m.ehooo%Y)))))'))

dlist = [d2, d1]
print(dlist)
dlist.sort()
print(dlist)

date_string = '2016-07-23T12:53:06.526240+03:00'
datetime_object = iso8601.parse_date(date_string)
print(datetime_object.date())
print(datetime_object.time())
print(datetime_object)

# "отрязваме" с ненужната информация за минути, секунди и микросекунди
dt_group_by = datetime_object.replace(minute=0, second=0, microsecond=0)  # с точност до час
print(dt_group_by)

sales_count_by_hour = {}  # key: datetime, hour resolution
sales_count_by_hour['2016-07-23T12:53:06.526240+03:00'] = 1
print(sales_count_by_hour)
sales_count_by_hour['2016-07-23T12:53:06.526240+03:00'] += 1
print(sales_count_by_hour)

d = datetime.now()
t = timedelta(hours=2)
print(d)
print(d + t)
print(d - t)
print(t)

d = datetime.now()
d_earlier = datetime(2016, 7, 26, 18, 00)
td = d - d_earlier

print(d.hour)
print(u"\u20AC")

print(td)
print(td.days)
print(td.seconds)
print(td.microseconds)
print(td.total_seconds())

z = pytz.timezone('Europe/Sofia')
print(z)
d = datetime.now(tz=z)
print(d)
print(d.isoformat())
print(d.weekday())

# 2016-01-19T20:23:14.608574+02:00

d = iso8601.parse_date('2016-01-19T20:23:14.608574+02:00')
print(d)
print(d.isoformat())

# converting between timezones:

z = pytz.timezone('Europe/Sofia')
d = datetime.now(tz=z)

print('*' * 30)
print(d.astimezone(pytz.timezone('Asia/Tokyo')))

print(d.astimezone(pytz.timezone('UTC')))

# or using the definition of UTC timezone from the standard Python library

from datetime import timezone

print(d.astimezone(timezone.utc))

print(str(datetime.max) > str(datetime.min))

end_time = default_timer()
print(end_time - start_time)

print(iso8601.parse_date('2016,25'))  # raise error
