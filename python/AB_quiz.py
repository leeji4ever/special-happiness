import json, os, random
from quintiles import calquintiles #imports the function from the file, so it can be used

def generate_quiz(data, quintile):
    quiz = []
    country = random.choice(list(data.keys()))
    values = data[country]
    literacy_rate = values.get('total population','')
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
    correct_quintile_index = all_quintiles.index(correct_quintile)
    wrong_quintiles = [q for i, q in enumerate(all_quintiles) if abs(i - correct_quintile_index) > 1]
    if not wrong_quintiles:
        return None
    wrong_quintile = random.choice(wrong_quintiles)
    wrong_answer = None
    for other_country in quintile[wrong_quintile]:
        wrong_answer = data[other_country].get('total population', '').strip()
        if wrong_answer:
            break
    if not wrong_answer:
        return None
    question = f"What is the literacy rate of {country}?"
    correct_choice = random.choice(['A', 'B'])
    choices = {
        'A': f"{literacy_rate}%" if correct_choice == 'A' else f"{wrong_answer}",
        'B': f"{wrong_answer}" if correct_choice == 'A' else f"{literacy_rate}%"
    }
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
    question_data = generate_quiz(data, quintiles)

    quiz = generate_quiz(data, quintiles)

    if question_data:
        print(question_data['question'])
        for choice, value in question_data['choices'].items():
            print(f"{choice}. {value}")

        user_choice = input("Enter your answer: ").strip().upper()  # Prompt user for input
        if user_choice in ['A','B']:
            if user_choice == question_data['correct_choice']:
                print("Correct!")
            else:
                print("Incorrect.")
        else:
            print("Invalid choice. Please enter 'A' or 'B'.")
    else:
        print("No valid question could be generated.")
