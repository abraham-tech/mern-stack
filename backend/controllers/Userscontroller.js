const User = require("../models/User");

const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        if(!username || !email || !password || !password.length) {
            res.status(400);
            throw new Error('Username or password is required');
        }

        res.json({
            status: true,
            message: "Registering user",
        })

    }catch (error) {

    }

}



module.exports = {
    register,
};