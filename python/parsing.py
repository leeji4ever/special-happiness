Python 3.7.4 (tags/v3.7.4:e09359112e, Jul  8 2019, 19:29:22) [MSC v.1916 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> 
=========== RESTART: C:/Users/samsung/Documents/Project/parsing.py ===========
>>> soup.find("head")
<head><title>The Dormouse's story</title></head>
>>> soup.head
<head><title>The Dormouse's story</title></head>
>>> soup.title
<title>The Dormouse's story</title>
>>> soup.body.b
<b>The Dormouse's story</b>
>>> soup.a
<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>
>>> soup.find_all('a')
[<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>, <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>, <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]
>>> head_tag = soup.head
>>> head_tag
<head><title>The Dormouse's story</title></head>
>>> head_tag.contents
[<title>The Dormouse's story</title>]
>>> title_tag = head_tag.contents[0]
>>> title_tag
<title>The Dormouse's story</title>
>>> title_tag.contents
["The Dormouse's story"]
>>> len(soup.contents)
2
>>> soup.contents[0].name
>>> soup.contents[1].name
'html'
>>> for child in  title_tag.contents[0]:
	print(child)

	
T
h
e
 
D
o
r
m
o
u
s
e
'
s
 
s
t
o
r
y
>>> head_tag.contents
[<title>The Dormouse's story</title>]
>>> head_tag
<head><title>The Dormouse's story</title></head>
>>> head_tag.children
<list_iterator object at 0x0414BF30>
>>> head_tag.contents
[<title>The Dormouse's story</title>]
>>> for child in head_tag.descendents:
	print(child)

	
Traceback (most recent call last):
  File "<pyshell#24>", line 1, in <module>
    for child in head_tag.descendents:
TypeError: 'NoneType' object is not iterable
>>> for child in head_tag.descendants:
    print(child)

    
<title>The Dormouse's story</title>
The Dormouse's story
>>> 
