const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = new express.Router();

router.post('/users/login', async (req,res)=>{
    try {
        const token = await User.login(req.body.username,req.body.password);
        if(token.message) return res.status(203).send({error:token.message});
        await User.setToken(token)
        res.send({token});
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/users/logout',auth, async(req,res)=>{
    try {
        await User.setToken(null);
        res.send();
    } catch (error) {
        res.status(500).send();
    }
});

module.exports = router;
