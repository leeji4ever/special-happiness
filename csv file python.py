import csv

with open("IDD_06042024052136105.csv") as f:
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
          
          
          rowCount = 0
          yearTemp = 0
          countryTemp = listRows[rowCount][countryIndex]
          yearTemp = int(listRows[rowCount][yearIndex])

          ectotal = {}
          
          for row in listRows:
              current_countries = {}
              measure = row[measureIndex]
              age = row[ageIndex]
              currency = row[currencyIndex]
              rowCount+=1
              if measure == "ECTOTAL" and age == 'TOT':
                  if countryTemp == row[countryIndex]:
                      if int(row[yearIndex]) >= yearTemp:
                          yearTemp = int(row[yearIndex])
                          value = row[valueIndex]
                  else:
                      current_countries['year'] = yearTemp
                      current_countries['ectotal'] = value
                      current_countries['currency'] = currency
                      ectotal[countryTemp] = current_countries
                      countryTemp = row[countryIndex]
              
           
                


5
