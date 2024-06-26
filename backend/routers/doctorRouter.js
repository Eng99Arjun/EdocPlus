const express = require('express');
const router = express.Router();
const Model = require('../model/doctorModel')
require('dotenv').config();
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');

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

router.post("/authenticate", (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            console.log(result);
            if (result) {
                const { _id, name, email, avatar, role, fees } = result;
                const payload = { _id, name, email, avatar, fees };
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '2 days' },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json({ message: 'error creating token' })
                        }
                        else {
                            // console.log(token);
                            res.status(200).json({ token, role, name, avatar })
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
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get("/getbyid/:id", (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            console.log(result);
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
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

router.get("/getdoctor", verifyToken, (req, res) => {
    Model.findById(req.user._id)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
})

router.get("/authorise", verifyToken, (req, res) => {
    res.status(200).json({ allowed: true });
});


module.exports = router;