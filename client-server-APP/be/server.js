const express = require('express');
const cors = require('cors')
const userRouter = require("./routers/user")
const db = require("./config/db")

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static('35proj'))

app.get('/', (re, res)=> {
    return res.json("from backend side");
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("listening...");
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
  });

// register user router
app.use('/user', userRouter)


// Need to add a form for the signup page
// Then add event handler, such that submitting the form calls a function in backend
// The function called in backend should do a sql insert

app.post('/', (req, res) => {
    const {parcel} = req.body
    if (!parcel){
        res.status(400).send({status: failed})
    }
    res.status(200).send({status: 'recieved'})
})