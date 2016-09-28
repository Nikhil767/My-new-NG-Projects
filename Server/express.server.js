var exp = require('express');
var fs = require('fs');
var app = exp();

app.get('/', function (req, res) {
  console.log('m inside your get');
  fs.readFile('../Views/View.html', 'utf8', function (err, data) {
    console.log('I have readFile');
    console.log(err);
    console.log(data);
    if(!err)
      res.send(data);
  });
    
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
