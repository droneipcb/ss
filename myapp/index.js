var express = require('express')
var app = express()
var os = require('os');
const fs = require('fs');

app.get('/', function (req, res) {
    var conteudo='O conteudo do ficheiro secret.txt parece ser:<br><br>';
    try {
        const data = fs.readFileSync('./secret.txt');
        conteudo+=data;
    }
    catch (err) {
    console.error(err);
    }

    res.send(conteudo);
})

app.listen(3000, function () {
  console.log('Hello world app listening on port 3000!')
})