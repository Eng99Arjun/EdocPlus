const express = require('express');
const router = express.Router();
const Model = require('../model/appointmentModel');
const verifyToken = require('./verifyToken');

router.post('/add', verifyToken, (req, res) => {
    req.body.patient = req.user._id;
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})
router.post('/authenticate', (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            if (result) res.json(result)
            else res.status(400).json({ message: "Login failed" });
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
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
            res.json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
})

// get by patient
router.get("/getbypatient", verifyToken, (req, res) => {
    Model.find({ patient: req.user._id }).populate('doctor').populate('slot')
        .then((result) => {
            // console.log(result);
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

// get by doctor
router.get("/getbydoctor", verifyToken, (req, res) => {
    Model.find({ doctor: req.user._id }).populate('patient').populate('slot')
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;