const express = require('express');
const {connectToDb, getDb} = require('./db.js')

const app = express();

let db
 
connectToDb((err)=>{
    if(!err){
        app.listen(3000, () => {
        console.log('Server is running on port 3000')
})
    db = getDb()
    }
})

let books = []
//routes

app.get('/books', (req, res) => {

    db.collection('books')
        .find()
        .sort({author:1})
        .forEach(book => books.push(book))
        .then(() => {
            res.status(200).json(books)
        })
        .catch(() => {
            res.status(500).json({error:"could not fetch the docs"})
        })
    })