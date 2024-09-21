// Import essential libraries 
const cookieParser = require('cookie-parser');

const express = require('express'); 
const app = express(); 
const path = require('path'); 
const session = require('express-session')
const bodyParser = require('body-parser');
const fs = require('fs');
const mysql = require('mysql2');

app.use(cookieParser());
// need cookieParser middleware before we can do anything with cookies


// Use the body-parser library to parse
// incoming JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*let data = [];
try{
	data = JSON.parse(fs.readFileSync("./data.json"));
	console.log(data)
}catch(e){
	console.log("some problem parsing the JSON");
}*/

const config = JSON.parse(fs.readFileSync(__dirname + '/config.json'));
const connection = mysql.createConnection(config);
const insertQuery = "INSERT INTO sampletable (name, expt, quizzes, correct) VALUES"; //append the specific values
const updateQuery = "UPDATE sampletable SET expt='2024-09-17 11:12:13' WHERE name='Ada';";
const selectAllQuery = "SELECT * FROM sampletable";
var allData = null;

// Create a new endpoint for the POST method that
// accepts data to be added to the database
app.post('/add', (req, res) => {
    const record = req.body;
    /*const obj = {
        user: record.user,
        expires: record.expires,
		count: 0,
		numQuizzes:0 //number of quizzes taken
    }
	console.log(obj);
    data.push(obj);*/

    //var insertQuery = insertQueryStub + "('" + record.user + "', '" + record.expires + "', 0, 0);";

    const connection = mysql.createConnection(config);
    connection.execute(insertQuery, [record.user,record.expires,0,0], function (err, result) {
        if (err) throw err;
        console.log(result);
    })
    connection.end();

    // Write the data array to a file called data.json
    /*fs.writeFile('./data.json', JSON.stringify(data), 
    (err) => {
        if (err) {
            console.error(err);
            return res.status(500)
                .send('Error saving data');
        }
        res.status(200)
            .send(`<h2>Data saved successfully :)</h2>`);
    });*/
});

app.post("/addQuizCount", (req, res) => {
    const record = req.body;
	
    const user = record.user;
    const newCount = record.count;

	const userRecord = data.find(r => r.user === user);
	if (userRecord) {
        // Update the user's quiz count
		console.log(userRecord.count);
        userRecord.count = userRecord.count + newCount;
		userRecord.numQuizzes++;

		
        console.log(`Quiz count updated for ${user}: ${userRecord.count}`);
        // Write the updated data array to data.json
        fs.writeFile('./data.json', JSON.stringify(data), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error saving quiz count');
            }
            res.status(200).send('Quiz count updated successfully.');
        });
    } else {
        res.status(404).send(`User "${user}" not found.`);
    }


});

app.use(function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.cookieName;
  if (cookie === undefined) {
    // no: set a new cookie
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('cookieName',randomNumber, { maxAge: 2147483647, httpOnly: true });
    console.log('New cookie created successfully');
  } else {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  } 
  next(); // <-- important!
});


app.use(express.static(__dirname + '/public'));
// Setting EJS as the view engine
app.set('view engine', 'ejs');
app.set('trust proxy', true);
app.get('/', (req, res) => {
    res.render('homepage');
	console.log(req.ip);
});

app.get('/bkReq', (req, res) => {
    res.sendFile(__dirname +'/data.json');
});

app.get('/views/:name', (req, res) => {
    res.render(req.params.name)
})

connection.execute(selectAllQuery, [], function (err, result) {
    if (err) throw err;
    console.log(result);
    allData = result;
  });
  connection.end();

app.get('/test', (req, res) => {
    const connection = mysql.createConnection(config);
    connection.execute('SELECT * FROM sampletable', [], function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
    connection.end();
});

app.get('/test2', (req, res) => {
    console.log(allData[0]);
    console.log(allData[0]["name"]);
    console.log(allData[0].name);
    console.log(allData[0]["expt"]);
    res.send([allData[0],allData[0]["name"],allData[0].name,allData[0]["expt"]]);
});    

app.use('/images',express.static(__dirname +'/images'));
app.use('/css',express.static(__dirname +'/css'));
app.use('/scripts',express.static(__dirname +'/scripts'));
app.use('/json',express.static(__dirname +'/json'));
//app.use('/views',express.static(__dirname +'/views'));




//Server is listening on port 5000
app.listen(5000, () => {
    console.log(`App listening at port 5000`);
  })