import bcrypt from 'bcrypt';
import { reject, use } from 'bcrypt/promises';
import raw from 'body-parser/lib/types/raw';
import { all } from 'express/lib/application';
import db from '../models/index';

let listTeacher = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let Teacher = await db.Teacher.findAll({
                raw: true
            })
            if (Teacher) {
                resolve({
                    error: 0,
                    Teacher
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
let post_teacher = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check_TenCV = await db.Teacher.findOne({
                where: { SoDT: data.soDT },
                raw: true
            })
            if (check_TenCV) {
                resolve({
                    error_api: 1,
                    mease: "Giáo viên đã tồn tại"
                })

            }
            else {
                await db.Teacher.create({
                    TenGV: data.name,
                    NamSinh: data.birthday,
                    GioiTinh: data.gender,
                    SoDT: data.soDT,
                    image: data.file_name,
                    id_CV: data.idCV
                });
                resolve({
                    error_api: 0,
                    mease: "Thêm giáo viên thành công"

                })
            }

        } catch (error) {
            reject(error)
        }
    })
}

let deleteTeacherSrv = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let qr = await db.Teacher.destroy({
                where: { id: id }
            })
            if (qr) {
                resolve({
                    error: 0,
                    meas: "Xóa thành công"
                })
            }
            resolve({
                error: 1,
                meas: "id không tại"
            })
        } catch (error) {
            reject(error)
        }
    })
}
// let deleteChucVuSerVice = (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let checkId = await db.ChucVu.findOne({
//                 where: { id: data },
//                 raw: true
//             })

//             if (checkId) {
//                 await db.ChucVu.destroy({
//                     where: { id: data },
//                     raw: true
//                 })
//                 resolve({
//                     error: 0,
//                     mease: "Xóa chức vụ thành công."
//                 })
//             } else {
//                 resolve({
//                     error: 1,
//                     mease: "Chức vụ vừa nhập không tồn tại"
//                 })
//             }
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

module.exports = {
    post_teacher: post_teacher,
    listTeacher: listTeacher,
    deleteTeacherSrv: deleteTeacherSrv


}