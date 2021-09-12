const axios = require('axios');


exports.homeRoutes = (req, res) => {
    res.render('index');
}


exports.admin = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/admin/api/users')
        .then(function(response){
            res.render('admin', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.game_play = (req, res) =>{
    res.render('game_play');
}

exports.login = (req, res) =>{
    res.render('login');
}


exports.history_user = (req, res) =>{
    res.render('history_user');
}

exports.game_user = (req, res) =>{
    res.render('game_user');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/admin/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

