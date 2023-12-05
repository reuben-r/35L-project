const express = require("express")
const router = express.Router()
const db = require("../config/db")

const validType = ["Driver", "Rider"]


// post a user to the database
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

// get schedule from user ID
router.get('/getSched/:id', (req, res) => {
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


  //get an ID when inputting a name
  router.get('/nameToID/:name', (req, res) => {
    const name = req.params.name;
  
    const query = `SELECT id FROM user WHERE name = '${name}'`;
  
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
      const data = Object.values(result[0]);
      res.json(data);
    });
  });


  //get an ID when inputting a name
  router.get('/idToAddress/:id', (req, res) => {
    const id = req.params.id;
  
    const query = `SELECT address FROM user WHERE id = '${id}'`;
  
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
      const data = Object.values(result[0]);
      res.json(data);
    });
  });


// Add a ride to a user given another userID and a date/time
router.post("/addRide",  (req, res) => {
    const data = req.body

    if (!data.rider) {
        return res.json({
            msg: "rider required",
            status: "fail"
        }).status(400)
    }
    if (!data.day) {
        return res.json({
            msg: "day required",
            status: "fail"
        }).status(400)
    }
    if (!data.time) {
        return res.json({
            msg: "time required",
            status: "fail"
        }).status(400)
    }
    if (!data.AorD) {
        return res.json({
            msg: "arrival or departure required",
            status: "fail"
        }).status(400)
    }


    const col = `P-${data.day.substring(0, 3).toLowerCase()}_${data.AorD.substring(0,1).toUpperCase()}`;
    console.log(col)
    const rider = `${data.rider}`


    const sql = `UPDATE user SET \`${col}\` = '${data.time}' WHERE name = '${rider}';`

    console.log(sql)
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })

});

 //get a true(failed login) or false(good login) when inputting a username and password
 router.post('/goodSign', (req, res) => {
    const data = req.body  
    const query = `SELECT * FROM user WHERE name = '${data.username}' AND password = '${data.password}'`;
  
    console.log(query)
    db.query(query, (err, result) => {
      if (err) {
        console.error('Database query error: ' + err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      
      const out = (result.length === 0);
      console.log(out)
      res.json(out);
    });
  });


  router.post('/updateUsername', (req, res) => {
    const { clientId, newUsername } = req.body;
  
    const query = `UPDATE user SET name = '${newUsername}' WHERE id = '${clientId}'`;
    
    db.query(query, (err, result) => {
      if (err) {
        console.error('Database query error: ' + err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ success: true });
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



// get users with schedule matching a specific time and column within a range
router.get('/getUsersByTimeAndColumnWithRange', (req, res) => {
  const timeParameter = req.query.timeParameter;
  const columnName = req.query.columnName;
  const rangeParameter = req.query.rangeParameter; // 'to' or 'from'

  if (!timeParameter || !columnName || !rangeParameter) {
      return res.status(400).json({
          msg: "timeParameter, columnName, and rangeParameter are required",
          status: "fail"
      });
  }

  let operator;
  if (rangeParameter === 'to') {
      operator = '<=';
  } else if (rangeParameter === 'from') {
      operator = '>=';
  } else {
      return res.status(400).json({
          msg: "Invalid rangeParameter value. Use 'to' or 'from'",
          status: "fail"
      });
  }

  const query = `SELECT * FROM user WHERE ${columnName} ${operator} ? AND ${columnName} BETWEEN ? - 60 AND ? + 60 LIMIT 25`;

  db.query(query, [timeParameter, timeParameter, timeParameter], (err, result) => {
      if (err) {
          console.error('Database query error: ' + err.stack);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }

      // Return the result as a multi-dimensional array
      const usersData = result.map(user => Object.values(user));
      res.json(usersData);
  });
});
