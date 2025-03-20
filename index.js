const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/user/:name', (req, res) => {
  let data = { name: req.params.name, hobbies: ['Food', 'Skate', 'Swim'] };
  res.render(`user`, data);
})

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server started:  http://localhost:${PORT}`)
});