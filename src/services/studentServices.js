import bcrypt from 'bcrypt';
import { reject, use } from 'bcrypt/promises';
import raw from 'body-parser/lib/types/raw';
import { all } from 'express/lib/application';
import db from '../models/index';
import ReactDOM from "react-dom";
import User from '../models/user';

let addStudent = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            // let check_email = await db.User.findOne({
            //     where: { email: data.username },
            //     raw: true
            // });
            // if (check_email === true) {
            //     resolve({
            //         error: 1,
            //         mesessa: 'Email da ton tai'
            //     })
            // }
            // var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            // var string_length = 8;
            // var randomstring = ''; 
            let kq = await db.User.create({
                fullname: data.fullname,
                birthday: data.birthday,
                ethnic: data.ethnic,
                gender: data.gender,
                born: data.born,
                fullname_mo: data.fullname_mo,
                birthday_mo: data.birthday_mo,
                job_mo: data.job_mo,
                address_connect_mo: data.address_connect_mo,
                phonenumber_mo: data.phonenumber_mo,
                fullname_fa: data.fullname_fa,
                birthday_fa: data.birthday_fa,
                job_fa: data.job_fa,
                address_connect_fa: data.address_connect_fa,
                phonenumber_fa: data.phonenumber_fa,
            })
            resolve({
                error: 0,
                mesessa: 'Thanh Cong',
                kq
            })

        } catch (error) {
            reject(error)
        }
    })

}

let checkEmail = (emailInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let emailc = await db.User.findOne({
                where: { email: emailInput }
            })
            if (emailc) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (error) {
            reject(error)
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

let delete_Stu = async (id_Stu) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check_idStu = await db.User.findOne({
                where: { id: id_Stu }
            })
            if (check_idStu) {
                await db.User.destroy({
                    where: { id: id_Stu }
                })
                let arrStudent = await db.User.findAll();
                resolve(arrStudent);
            } else {
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    })
}



let editStud = (studentId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checkID = await db.User.findOne({
                where: { id: studentId }
            })
            if (checkID) {
                resolve({
                    information: checkID
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    addStudent: addStudent,
    delete_Stu: delete_Stu,
    editStud: editStud


}