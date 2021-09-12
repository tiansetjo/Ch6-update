const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)

// game
route.get('/game-play', services.game_play)
// login
route.get('/login', services.login)



// user history
route.get('/history-user', services.history_user)
//user game
route.get('/game-user', services.game_user)

//user admin
route.get('/admin', services.admin)



// API
route.post('/admin/api/users', controller.create);
route.get('/admin/api/users', controller.find);
route.put('/admin/api/users/:id', controller.update);
route.delete('/admin/api/users/:id', controller.delete);

const userData = {
    username: "tian",
    password: "12345",
    email: "abc@gmail.com",
    alamat : "pamulang"
  };
  
route.post("/login", (req, res) => {
    const loginReq = req.body;
    if (loginReq.username !== userData.username) {
      res.status(400).send({
        message: "Username is not registered",});
    } else if (loginReq.password !== userData.password) {
      res.status(400).send({ message: "Password is incorrect" });
    } else if (loginReq.email !== userData.email) {
      res.status(400).send({ message: "Email is incorrect" });
    }
    res.status(200).send({
      message: "Login Successful",
      data: userData,
    });
  });

module.exports = route