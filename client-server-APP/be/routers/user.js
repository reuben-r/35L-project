const express = require("express")
const router = express.Router()
const db = require("../config/db")

const validType = ["Driver", "Rider"]


// get user name, password, address and type (Driver or Rider)
router.post("/create", (req, res) => {
    const data = req.body

    if (!data.username) {
        return res.json({
            msg: "username required",
            status: "fail"
        }).status(400)
    }

    if (!data.password) {
        return res.json({
            msg: "password required",
            status: "fail"
        }).status(400)
    }

    if (!data.address) {
        return res.json({
            msg: "address required",
            status: "fail"
        }).status(400)
    }

    if (!data.type) {
        return res.json({
            msg: "type required",
            status: "fail"
        }).status(400)
    }

    console.log(data.type)

    if (validType.indexOf(data.type) === -1) {
        return res.json({
            msg: "invalid user type",
            status: "fail"
        })
    }

    // create insert sql
    const sql = `INSERT INTO user (name, password, address, type, mon_A, mon_D, tue_A, tue_D, wed_A, wed_D, thu_A, thu_D, fri_A, fri_D) VALUES ('${data.username}', '${data.password}', '${data.address}', '${data.type}', '${data.mon_A}', '${data.mon_D}', '${data.tue_A}', '${data.tue_D}', '${data.wed_A}', '${data.wed_D}', '${data.thu_A}', '${data.thu_D}', '${data.fri_A}', '${data.fri_D}');`

    // create user
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})


router.get('/getData/:id', (req, res) => {
    const id = req.params.id;
  
    const query = `SELECT mon_A, mon_D, tue_A, tue_D, wed_A, wed_D, thu_A, thu_D, fri_A, fri_D FROM user WHERE id = ${id}`;
  
    db.query(query, (err, result) => {
      if (err) {
        console.error('Database query error: ' + err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      if (result.length === 0) {
        res.status(404).json({ error: 'Data not found' });
        return;
      }
  
      // Extract values and return as an array
      const data = Object.values(result[0]);
      res.json(data);
    });
  });


// this should be implemented after signIn logic completed
// should get user id from session, current just get from query
router.get("/info/:id", (req, res) => {
    const sql = `SELECT * FROM user WHERE id=${req.params.id};`

    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

module.exports = router