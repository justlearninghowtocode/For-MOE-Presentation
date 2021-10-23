const axios = require('axios');

exports.homeRoutes = (req, res) => {
    res.render('index')
    
}

exports.add_user = (req, res) => {
    res.render('add_user')
}

exports.results = (req, res) => {
    //Make a get request to /api/users
    axios.get('http://localhost:4000/api/users')
        .then(function(response){
            res.render('results', {users: response.data});
        })
        .catch(err =>{
            res.send(err);
        })


    
}


exports.update_user = (req,res) =>{
    axios.get('http://localhost:4000/api/users', {params:{id: req.query.id}})
    .then(function(userdata){
        res.render("update_user", {user:userdata.data})
    })
    .catch(err => {
        res.send(err);
    })
}