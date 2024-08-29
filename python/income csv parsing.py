import csv
import json

dollarAmount = {"Australia": 42988, #exchanged currency in USD
                "Austria":33869,
                "Belgium": 36909.9,
                "Brazil": 3376.63,
                "Bulgaria": 8174.58,
                "Canada": 39064.4,
                "Chile": 7367.97,
                "China (People's Republic of)":2245.07,
                "Costa Rica": 6119.54,
                "Croatia": 12138.8,
                "Czechia":13835.3,
                "Denmark": 51027.8,
                "Estonia": 18577,
                "Finland": 33595.5,
                "France": 24558.5,
                "Germany":32964.5,
                "Greece":9999.27,
                "Hungary":10099.8,
                "Iceland": 60129.2,
                "India": 623.322,
                "Ireland":41949.8,
                "Israel": 25058.7,
                "Italy":18914.1,
                "Japan": 22780.2,
                "Korea": 26203.7,
                "Latvia":14567.8,
                "Lithuania":16179.8,
                "Luxembourg":67921.3,
                "Mexico": 3270.62,
                "Netherlands":38468.1,
                "New Zealand":31820.5,
                "Norway":42788,
                "Poland": 11570.9,
                "Portugal": 15875.7,
                "Romania": 9333.29,
                "Russia": 6233.3,
                "Slovak Republic":10819,
                "Slovenia":23173.5,
                "South Africa": 4552.33,
                "Spain":21026,
                "Sweden":40273.6,
                "Switzerland":65192.9,
                "Turkey": 3715.32,
                "United Kingdom": 31452.8,
                "United States": 55506}
                
                
                
                
                
    

with open("../oecd statistics income.csv") as f:
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
          if country =="T?rkiye":
              country = "Turkey"
          measure = row[measureIndex]
          age = row[ageIndex]
          currency = row[currencyIndex]
          year = int(row[yearIndex])
          value = row[valueIndex]
          
          if measure == "ECTOTAL" and age == 'TOT':
              if country not in ectotal:
                  ectotal[country] = []
              ectotal[country].append((value,year,currency, dollarAmount[country]))
                  
      for country in ectotal:
              ectotal[country] = max(ectotal[country], key=lambda x:x[1]) #getting the lastest year
      print(ectotal)
                  


with open("../scripts/ectotal.json",'w') as f:
    f.write("var ectotal = ")
    json.dump(ectotal,f, indent=2)
          
       
