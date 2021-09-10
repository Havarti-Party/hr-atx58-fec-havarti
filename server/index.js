var express =  require('express');

var PORT = 3030;
var app = express();

app.use(express.static('dist'));

app.listen(PORT, (err, success) => {
  if (err) {
    console.log('Error listening to Server...', err);
  } else {
    console.log('Listening on port:' + PORT);
  }
})