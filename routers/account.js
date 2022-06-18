const express = require('express');
const router = express.Router();
const AccountModel = require('../models/account');

const jwt = require('jsonwebtoken');

const keyToken = 'ptit_calendar';
const timeToken = '7d';

router.post('/', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    
    AccountModel.findOne({
      username: username,
      password: password

    })
    .then(data => {
        const token = jwt.sign(
            {
              id: data._id
            },
            keyToken,
            { expiresIn: timeToken }
          )
          res.status(200).json(
            {
              token: token,
            }
          )
    })
    .catch(err => res.status(500).json("Sai tài khoản hoặc mật khẩu"));
})

module.exports = router;