const express = require("express");
const router = express.Router();
const db = require("../config/db");
const constant = require("../constant/index");

// post a user to the database
router.post("/create", (req, res) => {
  const data = req.body;

  if (!data.username) {
    return res
      .json({
        msg: "username required",
        status: "fail",
      })
      .status(400);
  }

  if (!data.password) {
    return res
      .json({
        msg: "password required",
        status: "fail",
      })
      .status(400);
  }

  if (!data.address) {
    return res
      .json({
        msg: "address required",
        status: "fail",
      })
      .status(400);
  }

  if (!data.type) {
    return res
      .json({
        msg: "type required",
        status: "fail",
      })
      .status(400);
  }

  console.log(data.type);

  if (constant.validType.indexOf(data.type) === -1) {
    return res.json({
      msg: "invalid user type",
      status: "fail",
    });
  }

  // create insert sql
  const sql = `INSERT INTO user (name, password, address, type, mon_A, mon_D, tue_A, tue_D, wed_A, wed_D, thu_A, thu_D, fri_A, fri_D) VALUES ('${data.username}', '${data.password}', '${data.address}', '${data.type}', '${data.mon_A}', '${data.mon_D}', '${data.tue_A}', '${data.tue_D}', '${data.wed_A}', '${data.wed_D}', '${data.thu_A}', '${data.thu_D}', '${data.fri_A}', '${data.fri_D}');`;

  // create user
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// get schedule from user ID
router.get("/getData/:id", (req, res) => {
  const id = req.params.id;

  const query = `SELECT mon_A, mon_D, tue_A, tue_D, wed_A, wed_D, thu_A, thu_D, fri_A, fri_D FROM user WHERE id = ${id}`;

  db.query(query, (err, result) => {
    if (err) {
      console.error("Database query error: " + err.stack);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    if (result.length === 0) {
      res.status(404).json({ error: "Data not found" });
      return;
    }

    // Extract values and return as an array
    const data = Object.values(result[0]);
    res.json(data);
  });
});

// signin
router.post("/signin", (req, res) => {
  const data = req.body;

  if (!data.username) {
    return res
      .json({
        msg: "username required",
        status: "fail",
      })
      .status(400);
  }

  if (!data.password) {
    return res
      .json({
        msg: "password required",
        status: "fail",
      })
      .status(400);
  }

  const sql = `SELECT * FROM user WHERE name='${data.username}' AND password='${data.password}';`;

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    if (data.length === 0) {
        return res.json({
            msg: "user not found",
            status: "fail",
        });
    }
    
    return res.json({
        msg: "success signin",
        status: "success",
        user: data[0],
    });
  });
});

// //SQL command doesnt work yet.
// // Add a ride to a user given another userID and a date/time
// router.post("/addRide",  (req, res) => {
//     const data = req.body

//     if (!data.driver) {
//         return res.json({
//             msg: "driver required",
//             status: "fail"
//         }).status(400)
//     }
//     if (!data.rider) {
//         return res.json({
//             msg: "rider required",
//             status: "fail"
//         }).status(400)
//     }
//     if (!data.day) {
//         return res.json({
//             msg: "day required",
//             status: "fail"
//         }).status(400)
//     }
//     if (!data.time) {
//         return res.json({
//             msg: "time required",
//             status: "fail"
//         }).status(400)
//     }
//     if (!data.AorD) {
//         return res.json({
//             msg: "arrival or departure required",
//             status: "fail"
//         }).status(400)
//     }

//     const col = `P-${data.day.substring(0, 3)}_${data.AorD}`;
//     console.log(col)

//     const sql = `UPDATE user
//     SET ${col} = ${data.time}
//     WHERE name = ${data.rider};`

//     db.query(sql, (err, data) => {
//         if (err) return res.json(err);
//         return res.json(data)
//     })

// });

// this should be implemented after signIn logic completed
// should get user id from session, current just get from query
router.get("/info/:id", (req, res) => {
  const sql = `SELECT * FROM user WHERE id=${req.params.id};`;

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

module.exports = router;
