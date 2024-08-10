# special-happiness

About
- a quiz solving website that provides users with quizzes about income, literacy rate, malnutrition, clean water, and mortality rate about countries around the globe
- everytime the user gets a question right, a certain amount of groceries will be donated



CSS Folder
    - this folder contains the main css file for the homepage, the about page, and all of the quizzes

Images Folder
    - contains images such as favicon and the image for the about page

Json Folder
    - holds the data that is crawled from the websites and csv files
    - each json file holds data unique for each quiz
    - for example ectotal.json holds the average income value, the year, and US dollar change rate for each country from the CSV file from OECD Statistics
    - this is the same for literacy.json, malnutrition.json, mortalityrate.json and water.json
    - as for the files titled ab quintiles, they are a dictionary of countries divided into quintiles so that countries with comparable values are quizzed in the simpler AB quizzes
    <NOTE>
    The json files are not actual json files. They are technically js files.

Python Folder
    - mainly used to crawl the necessary data from websites such as The World Factbook by the CIA or CSV files(water and malnutrition)
    - utilized beautiful soup and urllib3

Scripts Folder
    - quiz.js is the main js file that calls the data from the json files, chooses a random country(with the corresponding data value), and sends those values to one of four functions mentioned in the file
    - quiz.js is called in all ejs files
    - the js files for each quiz determines how each unique quiz will process the data values, like how the wrong answers will be generated
    -submit.js is the javascript for the submit button and reset button
    -cookie.js is the javascript for generating cookies

View Folder
    - contains all the ejs files
    - ejs is a templating language taht allows you to generate dynamic HTML pages with data from the server by embedding JS code
    - used EJS as main template engine in Node.js
    
    - homepage.ejs and about.ejs are their own HTML code for the hompage and about page
    - navbar.ejs, submit.ejs, question template.ejs and ab question template.ejs are modular html code that are inserted in every other quiz ejs files
    -finally files under the names of quizzes are ejs files for individual quizzes that contains all the necessary JS files, CSS files, and other ejs files

index.js is the server code