import bcrypt from 'bcrypt';
import { reject, use } from 'bcrypt/promises';
import raw from 'body-parser/lib/types/raw';
import db from '../models/index';
import user from '../models/user';
// let checkUseremail = await checkEmail(email);
// if (checkUseremail) {
// } else {
//     console.log("User name not is quychdi113@gmail.com")
// }
let check_login = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let checkUseremail = await checkEmail(email);
            if (checkUseremail) {
                userData.error = 1;
                userData.errMessage = checkEmail.inforUser;
                let userEmail = await db.User.findOne({
                    attributes: ['id', 'email', 'password', 'fullname'],
                    where: { email: email, roleId: 1 },
                    raw: true
                })
                if (userEmail) {
                    // let check_password = await bcrypt.compareSync(password, userEmail.password)
                    let check_password = await db.User.findOne({
                        where: { password: password }
                    })
                    if (check_password) {
                        userData.error = 0;
                        userData.errMessage = "Đăng nhập thành công";
                        delete userEmail.password
                        userData.user_info = userEmail;
                    } else {
                        userData.error = 2;
                        userData.errMessage = "Mật khẩu không chính xác.";
                    }
                } else {
                    userData.error = 3;
                    userData.errMessage = "Tên đăng nhập không tồn tại.";
                }
                resolve(userData)
            } else {
                userData.error = 4;
                userData.errMessage = "Tên đăng nhập không tồn tại."
                resolve(userData)
            }
        } catch (error) {
            reject(error)
        }
    }
    )
}

let checkEmail = (emailinput) => {
    return new Promise(async (resolve, reject) => {

        try {
            let inforUser = await db.User.findOne({
                where: { email: emailinput },
                raw: true
            })
            if (inforUser) {
                console.log(inforUser)
                resolve(true);
            } else {
                resolve(false)
            }
        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
    check_login: check_login,
    checkEmail: checkEmail,

} 