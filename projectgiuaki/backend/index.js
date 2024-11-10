const express = require('express');
const app = express();
var mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// ket noi db

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo-app'
});

con.connect(function(err, ){
if(err) err;
console.log("C")

})


app.get('/name',(req,res)=>{

    res.send("ghghvghvhgghyghhjgkgyg")
} )


app.post('/submit',(req,res)=>{
    var name = req.body.name;
    res.send(name)
} );


const port = process.env.port || 5000;

app.listen(port, ()=> {

    console.log('Listening on port', port)
});