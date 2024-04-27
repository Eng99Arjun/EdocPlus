const express = require('express');
const router = express.Router();
const Model = require('../model/patientModel')
const jwt = require('jsonwebtoken');
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

router.post("/authenticate", (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                const {_id, name, email}=result;
                const payload ={_id,name,email};
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {expiresIn:'2 days'},
                    (err,token)=>{
                        if(err){
                            res.status(500).json({message:'error creating token'})
                        }
                        else {
                            res.status(200).json({ token,role:result.role})
                        }
                    }
                )
            }else{
                res.status(401).json({messsage:'Invalid Credentials'})
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

router.get('/getbyemail/:email',(req,res)=> {
    Model.findOne({email:req.params.email})
    .then((result) => {
        if(result) res.status(200).json(result);
        else res.status(404).json({message:"Patient not found"})
    }).catch((err) => {
        
    });
})


module.exports = router;