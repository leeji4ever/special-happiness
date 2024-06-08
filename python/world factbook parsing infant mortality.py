import urllib3
import json
resp = urllib3.request("GET", "https://www.cia.gov/the-world-factbook/field/infant-mortality-rate")
resp.data

from bs4 import BeautifulSoup
soup = BeautifulSoup(resp.data, 'html.parser')



mortality_blocks = soup.find_all(class_="pb30")


i=0

countries = {}
for tag in mortality_blocks:
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
        value = float(str(strong.next_sibling).split()[0])/1000
        #print(value)
        year = ''
        #if "%" in value:
         #   index = value.index("%")
          #  if(index >=0):
           #     value = value[:index+1]
            #    year = value[index+1:]
                #print(year)
        print('key:', key, 'value:', value)
        current_country[key] = value
    countries[text] = current_country
    
    
with open("../json/mortality rate.json",'w') as f:
    f.write("var mortalityRate = ")
    json.dump(countries,f, indent=2)
