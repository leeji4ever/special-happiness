import json, os, random
from quintiles import calquintiles #imports the function from the file, so it can be used

def generate_abcd_quiz(data, quintile):
    countries = list(data.keys())
    random.shuffle(countries)

    selected_countries = []
    while len(selected_countries) < 4:
        country = countries.pop()
        literacy_rate = data[country].get('total population')
        if not literacy_rate:
            continue
        try:
            literacy_rate = float(literacy_rate.strip('%'))
        except ValueError:
            continue
        selected_countries.append((country, literacy_rate))
    selected_countries.sort(key=lambda x: x[1])

    if random.choice([True, False]):
        question = "Which country has the highest literacy rate?"
        correct_country = selected_countries[-1][0]
    else:
        question = "Which country has the lowest literacy rate?"
        correct_country = selected_countries[0][0]

    random.shuffle(selected_countries)
    choices = {chr(65+i): country for i, (country, _) in enumerate(selected_countries)}
    correct_choice = next(choice for choice, country in choices.items() if country == correct_country)

    return {
        'question': question,
        'choices': choices,
        'correct_choice': correct_choice
    }

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
        question_data = generate_abcd_quiz(data,quintiles)

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
                print("Invalid choice. Please enter 'A', 'B', 'C', or 'D'.")
        else:
            print("No valid question could be generated.")
    print(f"Your final score is: {score}/{numquestions}")