var express = require('express')
var app = express();

app.set('port',(process.env.PORT || 5000))
app.use(express.static(__ dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello, world! It is Dactionx')
})

app.listen(app.get('port'), function(){
  console.log("Node app is running at localhost:" + app.get('port'))
})
        
