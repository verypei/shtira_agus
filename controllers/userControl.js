const {User} = require('../models')

class UserControl {
    static show(req, res, next){
        User.findAll({
            
        })
        .then(data=>{
            res.status(200).json({
                data: data})
        })
        .catch(err=>{
            res.status(400).json('error')
        })
    }

    static create(req, res, next){
        let newData={
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            website : req.body.email,
            service : req.body.service,
            details : req.body.details
        }
        User.create(newData)
        .then(data=>{
            res.status(201).json({
                input: data
            })
        })
        .catch(err=>{
            res.status(400).json('error')
        })
    }

}   

module.exports = UserControl