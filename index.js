// Import essential libraries 
const express = require('express'); 
const app = express(); 
const path = require('path'); 
const router = express.Router(); 

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('navbar');
});
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