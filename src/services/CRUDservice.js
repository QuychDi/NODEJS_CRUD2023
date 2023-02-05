import bcrypt from 'bcrypt';
import { reject, use } from 'bcrypt/promises';
import raw from 'body-parser/lib/types/raw';
import db from '../models/index';
import user from '../models/user';

const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromScript = await hashuserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromScript,
                fullname: data.fullname,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender,
                image: data.image,
                roleId: data.roleId,
                positionId: data.positionId,
            })

            resolve('Successfully');
        } catch (e) {
            reject(e);
        }
    })
}

let hashuserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }


    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // let Users = db.User.findAll();
            // resolve(Users);
            let user = '';
            // if (userid === 'ALL') {
            user = await db.User.findAll({
                where: { roleId: null },
                // attributes: {
                //     exclude: ['password']
                // },
                raw: true
            })
            resolve(user)
            // }
            // if (userid && userid !== 'ALL') {
            //     user = await db.User.findOne({
            //         where: { id: userid },
            //         attributes: {
            //             exclude: ['password']
            //         },
            //         raw: true
            //     })
            // }

        } catch (e) {
            reject(e);
        }
    })
}

let getIdEditUser = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let InfoUSer = await db.User.findOne({
                where: { id: idUser },
                raw: true,
            })
            if (InfoUSer) {
                // console.log('success fully');
                resolve(InfoUSer)
            } else {
                resolve([])
            }
        } catch (error) {
            reject(error);
        }
    })
}

let UpdateuserbyID = (data) => {
    return new Promise(async (resolve, reject) => {

        try {
            let user = await db.User.findOne({
                where: { id: data.id },
            })
            if (user) {
                user.email = data.email,
                    user.fullname = data.fullname,
                    user.address = data.address,
                    user.phonenumber = data.phonenumber,
                    user.gender = data.gender,
                    await user.save();
                let allUser = await db.User.findAll();
                resolve(allUser);
            } else {
                resolve();
            }
        } catch (error) {
            reject(error);
        }

    }
    )
}

let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: id },
            })

            if (user) {
                await db.User.destroy({
                    where: {
                        id: id
                    }
                })
                let allUser = await db.User.findAll();
                resolve(allUser);
            } else {

                resolve();
            }
        } catch (error) {
            reject(error)
        }

    }
    )
}

let getAll_CRUD = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allUser = await db.User.findAll();
            return resolve(allUser);
        } catch (error) {
            reject(error);
        }
    }

    )
}
// let putCrud = () =>{
//     return new m
// }
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getIdEditUser: getIdEditUser,
    UpdateuserbyID: UpdateuserbyID,
    deleteUser: deleteUser,
    getAll_CRUD: getAll_CRUD,

}