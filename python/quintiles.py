"""This program gets the data from ../json/literacy.json as a Python dictionary. Since JSON syntax and Python dictionary syntax are so similar, few changes need to be made.

We ignore the first four characters 'var ' because that is specific to JS. It's important that the JSON file was saved with the standard indentation, because indentation is important in Python!"""

import os, json, numpy as np
#dirname = os.path.dirname(__file__)
#filename = os.path.join(dirname,"../json/literacy.json")
#with open(filename) as f:
    #t = f.readlines()
    #t = "".join(t) #Uses the empty string between subsequent elements of t to combine them into one string.
    #print(t)
    #i = t.index("=")
    #data = json.loads(t[i+1:].strip())
    #print(data)
    #print(type(data))

def calquintiles(data):
    literacy_rates = []
    
    for country in data:
        if 'total population' in data[country]:
            rate = data[country]['total population']
            literacy_rate = float(rate.strip('%'))
            literacy_rates.append(literacy_rate)

    percentiles = np.percentile(literacy_rates, [0, 20, 40, 60, 80, 100])

    quintiles = {
        'Q1': [],
        'Q2': [],
        'Q3': [],
        'Q4': [],
        'Q5': []
    }

    for country in data:
        rate = float(data[country]['total population'].strip('%'))
        if rate <= percentiles[1]:
            quintiles['Q1'].append(country)
        elif rate <= percentiles[2]:
            quintiles['Q2'].append(country)
        elif rate <= percentiles[3]:
            quintiles['Q3'].append(country)
        elif rate <= percentiles[4]:
            quintiles['Q4'].append(country)
        else:
            quintiles['Q5'].append(country)

    return percentiles, quintiles

if __name__ == "__main__":
    dirname = os.path.dirname(__file__)
    filename = os.path.join(dirname, "../json/literacy.json")

    with open(filename) as f:
        t = f.readlines()
        t = "".join(t)
        print(t)
        i = t.index("=")
        data = json.loads(t[i+1:].strip())
    
    percentiles, quintiles = calquintiles(data)

    print("Percentiles:", percentiles)
    for q in quintiles:
        print(f"Quintile {q}: {len(quintiles[q])} countries")
