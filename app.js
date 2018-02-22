const mongoose = require('mongoose');
const server = require('./server');
const port = 8000;

mongoose.connect('mongodb://localhost/food', {}, (err) => {
  if (err) return console.log(err);
  console.log('connected to food DB');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});