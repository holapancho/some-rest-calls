const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const app = express(); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World :)');
});

app.get('/names', (req, res) => {
  let names = ['Benhui', 'Frederik', 'Jan-Erik', 'Stefan', 'Tobias', 'Herland', 'Victor', 'Paola', 'Francisco', 'Carlos', 'Gonzalo', 'Kevin'];
  res.json(names);
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
  