const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/user/:username', (req, res) => {
  let data = { username: req.params.username, hobbies: ['Food', 'Skate', 'Swim'] };
  res.render(`user`, data);
})

app.post('/check-user', (req, res) => {
  let username = req.body.username;
  let to = `/user/${username}`;
  if (username == "")
    return res.redirect('/');
  else
    return res.redirect(to);
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started:  http://localhost:${PORT}`)
});