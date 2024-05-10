const express = require('express');
const router = express.Router();
const Model = require('../model/patientModel')
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');
require('dotenv').config();

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.put("/update/:id", (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
})


router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post("/authenticate", (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                const { _id, fullName, email, password, gender, age, contactNo, reports } = result;
                const payload = { _id, fullName, email, password, gender, age, contactNo, reports };
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '2 days' },
                    (err, token) => {
                        if (err) {
                            res.status(500).json({ message: 'error creating token' })
                        }
                        else {
                            res.status(200).json({ token, fullName, email, password, gender, age, contactNo, reports })
                        }
                    }
                )
            } else {
                res.status(401).json({ messsage: 'Invalid Credentials' })
            }

        }).catch((err) => {

            console.log(err);
            res.status(500).json(err)
        });
})


router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({ email: req.params.email })
        .then((result) => {
            if (result) res.status(200).json(result);
            else res.status(404).json({ message: "Patient not found" })
        }).catch((err) => {

        });
})

router.get("/getbymail/:email", (req, res) => {
    console.log(req.params.email)
    Model.find({ email: req.params.email })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err)
            res.status(500).json(err)
        });
});

router.get("/authorise", verifyToken, (req, res) => {
    res.status(200).json({ allowed: true });
});

module.exports = router;