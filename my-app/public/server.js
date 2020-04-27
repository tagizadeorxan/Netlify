const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
let path=require('path');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//type nodemon to run server

// Create connection
const db = mysql.createConnection({
  
    host     : 'localhost',
    user     : 'root',
    password : 'password'
    
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});



// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE tagizadeorxan';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log("result is showing here");
        res.send('Database created...');
    });
});

//Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE tagizadeorxan.post(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log("result is showing here");
        res.send('Posts table created...');
    });
});

// // Insert post 1
app.post('/addpost1', (req, res) => {
   
    let post = {title:req.body.title, body:req.body.body};
    let sql = 'INSERT INTO newmysqldb.post SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
      
    
        console.log("result is showing here");
        res.send('Post 1 added...');
    });
});

// // Insert post 2
// app.get('/addpost2', (req, res) => {
//     let post = {title:'Post Two', body:'This is post number two'};
//     let sql = 'INSERT INTO posts SET ?';
//     let query = db.query(sql, post, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post 2 added...');
//     });
// });

// // Select posts
// app.get('/getposts', (req, res) => {
//     let sql = 'SELECT * FROM posts';
//     let query = db.query(sql, (err, results) => {
//         if(err) throw err;
//         console.log(results);
//         res.send('Posts fetched...');
//     });
// });

// // Select single post
// app.get('/getpost/:id', (req, res) => {
//     let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
//     let query = db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post fetched...');
//     });
// });

// // Update post
// app.get('/updatepost/:id', (req, res) => {
//     let newTitle = 'Updated Title';
//     let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
//     let query = db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post updated...');
//     });
// });

// // Delete post
// app.get('/deletepost/:id', (req, res) => {
//     let newTitle = 'Updated Title';
//     let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
//     let query = db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post deleted...');
//     });
// });

app.listen('3000', () => {
    console.log('Server started on port 3000');
});