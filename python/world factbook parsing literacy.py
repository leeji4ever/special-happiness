import urllib3
resp = urllib3.request("GET", "https://www.cia.gov/the-world-factbook/field/literacy")
resp.data

from bs4 import BeautifulSoup
soup = BeautifulSoup(resp.data, 'html.parser')


import json
literacy_blocks = soup.find_all(class_="pb30")


i=0

countries = {}
for tag in literacy_blocks:
    #print(type(tag))
    h3 = tag.find("h3")
    if h3 is None:
        continue
    a = h3.find("a")
    
    text = a.contents[0]
    print(text)
    strongs = tag.find_all("strong")
    current_country = {}
    for strong in strongs:
        key = strong.contents[0].replace(':', '')
        value = str(strong.next_sibling)
        print(value)
        year = ''
        if "%" in value:
            index = value.index("%")
            if(index >=0):
                value = value[:index+1]
                year = value[index+1:]
                #print(year)
        print('key:', key, 'value:', value)
        current_country[key] = value
    countries[text] = current_country
    
with open("../json/literacy.json",'w') as f:
    f.write("var literacy = ")
    json.dump(countries,f, indent=2)
