import pickle

class Product():
    def __init__(self,kind,price = None):
        self.kind = kind
        if price is not None:
            self.price = price
    

#oranges = ["vidalia", "florida", "navel"]
#apples = {"green": 2.00, "macintosh": 3.00 , "red delicious": 3.50}
#fruits = [oranges, apples]

macintosh = Product("apple", 3.00)

with open("apples", 'wb') as f: #a stands for append
    #oranges = json.load(f)
    jstr = pickle.dump(macintosh,f)
