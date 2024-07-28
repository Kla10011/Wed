require('dotenv').config()
var express = require('express')
var cors = require('cors')
const mysql = require('mysql2')

// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

// Check the connection
connection.connect((err) => {
  if (err) {
    console.log('Host = ',process.env.DB_HOST)
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Host = ',process.env.DB_HOST)
  console.log('Connected to the database as id ' + connection.threadId);
});

  
var app = express()
app.use(cors())

app.get('/helloworld', function (req, res, next) {
  res.json({msg: 'hello world'})
})

// Define a route to fetch users
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).json({ error: 'Database query failed' });
      return;
    }
    res.status(200).json(results);
  });
});

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})