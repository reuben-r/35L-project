const express = require("express")
const router = express.Router()
const db = require("../config/db")
const constant = require("../constant/index")

// create trip
router.post("/create", (req, res) => {
    const data = req.body

    if (!data.riderID) {
        return res.json({
            msg: "riderID required",
            status: "fail"
        }).status(400)
    }

    if (!data.driverID) {
        return res.json({
            msg: "driverID required",
            status: "fail"
        }).status(400)
    }

    if (!data.departure) {
        return res.json({
            msg: "departure required",
            status: "fail"
        }).status(400)
    }

    if (!data.arrival) {
        return res.json({
            msg: "arrival required",
            status: "fail"
        }).status(400)
    }

    if (!data.date) {
        return res.json({
            msg: "date required",
            status: "fail"
        }).status(400)
    }

    const sql = `INSERT INTO trip (riderID, driverID, booked_time, status, departure, arrival) VALUES 
    (${data.riderID}, ${data.driverID}, '${data.date}', 'requested', '${data.departure}', '${data.arrival}')`

    db.query(sql, (err, result) => {
        if (err) {
            return res.json({
                msg: err,
                status: "fail"
            }).status(400)
        }

        return res.json({
            msg: "success create trip",
            status: "success"
        }).status(200)
    })
})

router.post("/cancel", (req, res) => {
    const data = req.body

    if (!data.driverID || !data.riderID) {
        return res.json({
            msg: "driverID or riderID required",
            status: "fail"
        }).status(400)
    }

    if (!data.tripID) {
        return res.json({
            msg: "tripID required",
            status: "fail"
        }).status(400)
    }

    const sql = `UPDATE trip SET status = 'cancelled' WHERE tripID = ${data.tripID}`

    db.query(sql, (err, result) => {
        if (err) {
            return res.json({
                msg: err,
                status: "fail"
            }).status(400)
        }

        return res.json({
            msg: "success cancel trip",
            status: "success"
        }).status(200)
    })
})

// for driver to accept the trip
// should change the trip status
router.post("/accept", (req, res) => {
    const data = req.body

    if (!data.tripID) {
        return res.json({
            msg: "tripID required",
            status: "fail"
        }).status(400)
    }

    if (!data.driverID) {
        return res.json({
            msg: "driverID required",
            status: "fail"
        }).status(400)
    }

    const sql = `UPDATE trip SET status = 'accepted', driverID = ${data.driverID} WHERE tripID = ${data.tripID}`

    db.query(sql, (err, result) => {
        if (err) {
            return res.json({
                msg: err,
                status: "fail"
            }).status(400)
        }

        // get driver and rider info
        const sql = `SELECT * FROM trip WHERE tripID = ${data.tripID}`
        db.query(sql, (err, result) => {
            if (err) {
                return res.json({
                    msg: err,
                    status: "fail"
                }).status(400)
            }

            const trip = result[0]
            const sql = `SELECT * FROM user WHERE id = ${trip.riderID}`
            db.query(sql, (err, result) => {
                if (err) {
                    return res.json({
                        msg: err,
                        status: "fail"
                    }).status(400)
                }

                const rider = result[0]
                const sql = `SELECT * FROM user WHERE id = ${trip.driverID}`
                db.query(sql, (err, result) => {
                    if (err) {
                        return res.json({
                            msg: err,
                            status: "fail"
                        }).status(400)
                    }

                    const driver = result[0]
                    return res.json({
                        msg: "success accept trip",
                        status: "success",
                        trip: trip,
                        rider: rider,
                        driver: driver
                    }).status(200)
                })
            })
        })
    })
})


// for driver or rider to finish the trip?
router.post("/finish", (req, res) => {
    const data = req.body

    if (!data.tripID) {
        return res.json({
            msg: "tripID required",
            status: "fail"
        }).status(400)
    }

    const sql = `UPDATE trip SET status = 'finished' WHERE tripID = ${data.tripID}`

    db.query(sql, (err, result) => {
        if (err) {
            return res.json({
                msg: err,
                status: "fail"
            }).status(400)
        }

        return res.json({
            msg: "success finish trip",
            status: "success"
        }).status(200)
    })
})

// get the given driver's trip to be accepted
router.post("/books", (req, res) => {
    const data = req.body

    if (!data.driverID) {
        return res.json({
            msg: "driverID required",
            status: "fail"
        }).status(400)
    }

    const sql = `SELECT * FROM trip WHERE driverID = ${data.driverID} AND status = 'requested'`

    db.query(sql, (err, result) => {
        if (err) {
            return res.json({
                msg: err,
                status: "fail"
            }).status(400)
        }

        return res.json({
            msg: "success get books",
            status: "success",
            books: result
        }).status(200)
    })
})

module.exports = router