import UserService from '../services/LoginServices';
import req from 'express/lib/request';
import res from 'express/lib/response';
import db from '../models/index';
let handelLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email && !password) {
        return res.status(500).json({
            error: 5,
            errMessage: "Loi khong the truy cap",
        })
    }
    let check = await UserService.check_login(email, password);
    return res.status(200).json({
        error: check.error,
        value: check.errMessage,
        user_: check.user_info ? check.user_info : {}
    })
}
module.exports = {
    handelLogin: handelLogin,
}