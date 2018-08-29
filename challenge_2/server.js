const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, '/client')));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


app.post('/csv', bodyParser.json(), function(req, res) {
  console.log('POST request has been received!');
  console.log(req.body.input);
  console.log(typeof req.body.input)

  // if (err) {
  //   console.log('Error with post request from post handler');
  // } else {
  // var parsedInput = JSON.parse(req.body.input);
  // console.log('PARSED BODY:', parsedInput)
  res.status(200).send('post success');
  // }
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));