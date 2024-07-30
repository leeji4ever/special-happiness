// Import essential libraries 
const express = require('express'); 
const app = express(); 
const path = require('path'); 
const session = require('express-session')
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


// Setting EJS as the view engine
app.set('view engine', 'ejs');
app.set('trust proxy', true);
app.get('/', (req, res) => {
    res.render('literacy quiz');
	console.log(req.ip);
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