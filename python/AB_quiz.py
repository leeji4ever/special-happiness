import json, os, random

def generate_quiz(data):
    quiz = []
    for country, values in data.items():
        literacy_rate = values.get('total population','')
        quintile = values.get('quintiles',{})
        all_quintiles = list(range(1,6))
        correct_quintile = quintile
        wrong_quintile = [q for q in all_quintiles if q != correct_quintile and abs(q - correct_quintile) > 1]
        wrong_quintile = random.choice(wrong_quintile)
        wrong_answer = data[country]['quintiles'][str(wrong_quintile)]['total population']
        question = f"What is the literacy rate of {country}?"
        correct_choice = random.choice(['A','B'])
        choices = {
            'B' if correct_choice == 'A' else 'A': f"{wrong_answer}",
            correct_choice: f"{literacy_rate}"
        }
        quiz.append({
            'question': question,
            'choices': choices,
            'correct_answer': correct_choice
        })
    return quiz

if __name__ == "__main__":
    filename = r"c:\Users\2330c\Git2\special-happiness\json\literacy.json"

    if not os.path.exists(filename):
        print(f"File '{filename}' not found.")
        exit()

    try:
        with open(filename, encoding='utf-8') as f:
            data = json.load(f)
    except json.JSONDecodeError as e:
        print(f"Error loading JSON: {e}")
        exit()

    quiz = generate_quiz(data)

    for index, question in enumerate(quiz,start=1):
        print(f"Question {index}: {question['question']}")
        for choice, value in question['choices'].items():
            print(f"{choice}. {value}")
        print(f"Correct answer: {question['correct_answer']}")
        print()