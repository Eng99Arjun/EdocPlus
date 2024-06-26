const express = require('express');
const router = express.Router();
const Model = require('../model/reportModel')
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
    Model.find().populate({
        path: 'appointment',
        populate: {
            path: 'patient'
        }

    }).populate({
        path: 'appointment',
        populate: {
            path: 'doctor'
        }
    })
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

router.get("/getbypatient", verifyToken, (req, res) => {
    Model.find({ patient: req.user._id }).populate('doctor').populate('slot')
        .then((result) => {
            // console.log(result);
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

// getbyappointment
router.get("/getbyappointment/:id", (req, res) => {
    Model.findOne({ appointment: req.params.id })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
})

// update
router.put("/update/:id", (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.json(result)
        }
        ).catch((err) => {
            res.status(500).json(err)
        });
});

module.exports = router;