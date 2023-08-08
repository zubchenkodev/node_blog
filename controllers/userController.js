const express = require("express");
const User = require('../models/User');

exports.home = (req, res) => {
    res.render('home-guest');
}

exports.register = (req, res) => {
    let user = new User(req.body);
    user.register();
    if(user.errors.length){
        res.send(user.errors)
    } else {
        res.send(user.data)
    }
}
