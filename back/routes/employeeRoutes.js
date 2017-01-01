var Sequelize = require('sequelize')
var express = require('express')
var employeeRouter = require('express').Router()
var app = express()

var Employee = require('../back/models/index').Employee
var bodyparser = require('body-parser')



const getAllEmployees=(req,res)=>{
  Employee.findAll({}).then(()=>{
    res.send("this shit works")
  })
}


// const getAllComments=(req,res)=>{

//     console.log('data')
//     Comment.findAll({}).then(()=> {
//     res.send('this shit works')
//   })
// }


employeeRouter.route('/')
    .get(getAllEmployees)


module.exports = employeeRouter