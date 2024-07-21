const express = require('express');
const app = express();

// Setting EJS as the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('literacy quiz');
});

//Server is listening on port 5000
app.listen(5000, () => {
    console.log(`App listening at port 5000`);
  })