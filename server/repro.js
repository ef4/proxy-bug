var app = require('express')();

app.use('/sample/destination', function(req, res) {
  res.send("Destination");
});

app.use('/sample', function(req, res) {
  if (req.method === 'POST') {
    setTimeout(function(){
      res.redirect("/sample/destination");
    }, 100);
  } else {
    res.send("<form action=\"/sample\" method=\"POST\"><input type=\"text\" name=\"msg\"></form>");
  }
});


app.listen(8286);
