const express = require('express');
const router = express.Router();
const Model = require('../model/doctorModel')

router.post('/add',(req,res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
router.post('/authenticate',(req,res)=>{
    console.log(req.body);
    Model.findOne(req.body)
    .then((result) => {
        if(result)res.json(result)
        else res.status(400).json({message:"Login failed"});
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/getall',(req,res)=>{
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get("/getbyid/:id", (req,res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
})


module.exports = router;