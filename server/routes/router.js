const express = require('express')
const route = express.Router() //allows you to create different router in the same app

const services = require('../services/render')
const controller = require('../controller/controller')
/*
* @description Root Route
* @method GET
*/ 

route.get('/', services.homeRoutes)

route.get('/results',  services.results)
/*
* @description add users
* @method GET /add-user
*/ 

route.get('/add-user', services.add_user) 

/*
* @description for update users
* @method GET /update-user
*/ 

route.get('/update-user', services.update_user)


// API
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

module.exports = route