import json, os, random
from quintiles import calquintiles #imports the function from the file, so it can be used

def generate_quiz(data, quintile):
    """quintile is a dictionary whose keys are the strings 'Q1' thru 'Q5' and whose values are lists of countries."""
    quiz = []
    country = random.choice(list(data.keys()))
    values = data[country]
    literacy_rate = values.get('total population')
    if not literacy_rate:
        return None
    literacy_rate_strip = literacy_rate.strip('%')
    try:
        literacy_rate = float(literacy_rate_strip)
    except ValueError:
        return None
    correct_quintile = None
    for q, countries in quintile.items():
        if country in countries:
            correct_quintile = q
            break
    if correct_quintile is None:
        return None
    all_quintiles = ['Q1','Q2','Q3','Q4','Q5']
    country_quintile_index = all_quintiles.index(correct_quintile) #0-4
    other_quintiles = [q for i, q in enumerate(all_quintiles) if abs(i - country_quintile_index) > 1]
    #enumerate() is a generator whose iterations are pairs (index,value)
    #i is guaranteed to be at least 2 away from correct_quintile_index for each pair i, q that it includes
    if not other_quintiles:
        return None
    other_quintile = random.choice(other_quintiles)
    other_country = random.choice(quintile[other_quintile])
    other_literacy_rate = data[other_country].get('total population', '').strip()
    #Trying to access the value associated to key using the normal [] syntax
    #raises an error if that key does not exist in that dictionary.
    #Using the .get() method instead returns None instead of raising an error;
    #supplying a second argument to .get() changes the default return value to that instead.
    if not other_literacy_rate:
        return None
    try:
        other_literacy_rate_strip = other_literacy_rate.strip('%')
        other_literacy_rate = float(other_literacy_rate_strip)
    except ValueError:
        return None
    if literacy_rate > other_literacy_rate:
        higher_country, lower_country = country, other_country
    else:
        higher_country, lower_country = other_country, country
    question = "Which country has a higher literacy rate?"
    choice_A = random.choice(['A', 'B'])
    choices = {
        'A': higher_country if choice_A == 'A' else lower_country,
        'B': lower_country if choice_A == 'A' else higher_country
    }
    correct_choice = 'A' if choices['A'] == higher_country else 'B'
    return {
        'question': question,
        'choices': choices,
        'correct_choice': correct_choice
    }

        #quintile = values.get('quintiles',{})
        #print("quintile len, type date:")
        #print(len(quintile))
        #print(type(quintile))
        #print(quintile)
        #all_quintiles = list(range(1,6))
        #correct_quintile = quintile
        #wrong_quintile = [q for q in all_quintiles if q != correct_quintile and abs(q - correct_quintile) > 1]
        #wrong_quintile = random.choice(wrong_quintile)
        #wrong_answer = data[country]['quintiles'][str(wrong_quintile)]['total population']
        #question = f"What is the literacy rate of {country}?"
        #correct_choice = random.choice(['A','B'])
        #choices = {
            #'B' if correct_choice == 'A' else 'A': f"{wrong_answer}",
            #correct_choice: f"{literacy_rate}"
        #}
        #quiz.append({
            #'question': question,
            #'choices': choices,
            #'correct_answer': correct_choice
        #})
    #return quiz

if __name__ == "__main__":
    dirname = os.path.dirname(__file__)
    filename = os.path.join(dirname, "../json/literacy.json")

    if not os.path.exists(filename):
        print(f"File '{filename}' not found.")
        exit()

    try:
        with open(filename) as f:
            t = f.readlines()
            t = "".join(t)
            i = t.index("=")
            data = json.loads(t[i+1:].strip())
    except json.JSONDecodeError as e:
        print(f"Error loading JSON: {e}")
        exit()

    percentiles, quintiles = calquintiles(data)
    score = 0
    numquestions = 10

    for q in range(numquestions):
        question_data = generate_quiz(data,quintiles)

        if question_data:
            print(question_data['question'])
            for choice, value in question_data['choices'].items():
                print(f"{choice}. {value}")

            user_choice = input("Enter your answer: ").strip().upper()
            if user_choice in ['A','B']:
                if user_choice == question_data['correct_choice']:
                    print("Correct!")
                    score += 1
                else:
                    print("Incorrect.")
            else:
                print("Invalid choice. Please enter 'A' or 'B'.")
        else:
            print("No valid question could be generated.")
    print(f"Your final score is: {score}/{numquestions}")