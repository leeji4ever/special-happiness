import csv
import json

with open("../IDD_06042024052136105.csv") as f:
      reader = csv.reader(f , delimiter = '\t')
      header = next(reader)
      listRows = list(reader)
      
      measureIndex = header.index('MEASURE')
      yearIndex = header.index('Year')
      valueIndex = header.index('Value')
      countryIndex = header.index('Country')
      ageIndex = header.index('AGE')
      currencyIndex = header.index('Unit')
      print("Using Indices", measureIndex, yearIndex, valueIndex)
      
      
      

      ectotal = {}
      
      for row in listRows:
          current_countries = {}
          country = row[countryIndex]
          measure = row[measureIndex]
          age = row[ageIndex]
          currency = row[currencyIndex]
          year = int(row[yearIndex])
          value = row[valueIndex]
          
          if measure == "ECTOTAL" and age == 'TOT':
              if country not in ectotal:
                  ectotal[country] = []
              ectotal[country].append((year,value,currency))
      for country in ectotal:
              ectotal[country] = max(ectotal[country], key=lambda x:x[0])
      print(ectotal)
                  


with open("../scripts/ectotal.json",'w') as f:
    f.write("var ectotal = ")
    json.dump(ectotal,f, indent=2)
          
       
