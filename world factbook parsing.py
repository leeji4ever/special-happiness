Python 3.7.4 (tags/v3.7.4:e09359112e, Jul  8 2019, 19:29:22) [MSC v.1916 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> import urllib3
>>> resp = urllib3.request("GET", "https://www.cia.gov/the-world-factbook/countries/afghanistan/")
>>> len(resp)
Traceback (most recent call last):
  File "<pyshell#2>", line 1, in <module>
    len(resp)
TypeError: object of type 'HTTPResponse' has no len()
>>> len(resp.data)
367039
>>> from bs4 import BeautifulSoup
>>> soup = BeautifulSoup(resp, 'html.parser')
>>> soup.find("head")
>>> soup.head
>>> soup = BeautifulSoup(resp.data, 'html.parser')
>>> soup.find("head")

>>> soup.find_all('a')

>>> soup.contents

>>> soup.contents[0]
'html'
>>> soup.contents[1]

>>> soup.contents[2]
Traceback (most recent call last):
  File "<pyshell#14>", line 1, in <module>
    soup.contents[2]
IndexError: list index out of range
>>> 
