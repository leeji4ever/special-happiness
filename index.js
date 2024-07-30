// Import essential libraries 
const cookieParser = require('cookie-parser');

const express = require('express'); 
const app = express(); 
const path = require('path'); 
const session = require('express-session')
app.use(cookieParser());
// need cookieParser middleware before we can do anything with cookies


app.use(function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.cookieName;
  if (cookie === undefined) {
    // no: set a new cookie
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('New cookie created successfully', cookie);
  } else {
    // yes, cookie was already present 
    //console.log('cookie exists', cookie);
  } 
  next(); // <-- important!
});
//const router = express.Router(); 

/*
// Setup essential routes 
router.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname + '/html/income quiz.html')); 
    //__dirname : It will resolve to your project folder. 
}); 
router.get('/about', function(req, res) { 
    res.sendFile(path.join(__dirname + '/README.md')); 
}); 
router.get('/sitemap', function(req, res) { 
    res.sendFile(path.join(__dirname + '/html/literacy quiz.html')); 
}); 
//add the router 
app.use('/', router); 
app.listen(process.env.port || 3000); 
console.log('Running at Port 3000');
*/

app.use(express.static(__dirname + '/public'));
// Setting EJS as the view engine
app.set('view engine', 'ejs');
app.set('trust proxy', true);
app.get('/', (req, res) => {
    res.render('literacy quiz');
});

app.get('/views/:name', (req, res) => {
    res.render(req.params.name);
});

app.use('/images',express.static(__dirname +'/images'));
app.use('/css',express.static(__dirname +'/css'));
app.use('/scripts',express.static(__dirname +'/scripts'));
app.use('/json',express.static(__dirname +'/json'));
app.use('/views',express.static(__dirname +'/views'));




//Server is listening on port 5000
app.listen(5000, () => {
    console.log(`App listening at port 5000`);
  })