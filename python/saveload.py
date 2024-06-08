import json

class Product():
    def __init__(self,kind,price = None):
        self.kind = kind
        if price is not None:
            self.price = price
    

#oranges = ["vidalia", "florida", "navel"]
#apples = {"green": 2.00, "macintosh": 3.00 , "red delicious": 3.50}
#fruits = [oranges, apples]

macintosh = Product("apple", 3.00)

with open("fruits.json", 'w') as f: #a stands for append
    #oranges = json.load(f)
    jstr = json.dumps(macintosh)
    json.dump(jstr,f)
