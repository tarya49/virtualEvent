import express from 'express';
const router = express.Router();
const registerUser = require('./models/user_model');
const loginUser = require('./models/user_model');

const app = express();

router.post('/register', (req, res) => {
    const userCountry = req.body.country;
    const password = req.body.password;
    const name = req.body.name;
    var responseData;
    responseData = {
        "message": registerUser(name, password, userCountry),
        "status": 201
    }

    res.json(responseData);
});

router.post('/login', (req, res) => {
    var userName = req.body.userName;
    var password = req.body.password;

    responseData = {
        "message": loginUser(userName, password),
        "status": 200
    }

    res.json(responseData);

});

module.exports = router;