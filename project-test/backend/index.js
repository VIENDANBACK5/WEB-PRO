const express = require('express');
const app = express();
var mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Kết nối db
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo-app'
});

con.connect(function(err) {
    if (err) {
        console.log('Error connecting to database:', err);
        return;
    }
    console.log("Connection Successful");
});

// Endpoint /table
app.get('/table', (req, res) => {
    con.query("SELECT * FROM todo", function (err, result, fields) {
        if (err) {
            console.log('Error executing query:', err);
            res.status(500).send('Database query error');
            return;
        }
        console.log(result);
        res.json(result); // Gửi dữ liệu kết quả về client
    });
});

// Endpoint /name
app.get('/name', (req, res) => {
    res.send("ghghvghvhgghyghhjgkgyg");
});

// Endpoint /submit
app.post('/submit', (req, res) => {
    var name = req.body.name;
    res.send(name);
});

// Cấu hình cổng
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on port', port);
});
