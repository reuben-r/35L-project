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
    const sql = `INSERT INTO user (name, address, password, type) VALUES ('${data.username}', '${data.address}', '${data.password}', '${data.type}');`

    // create user
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})


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