import bcrypt from 'bcrypt';
import { reject, use } from 'bcrypt/promises';
import raw from 'body-parser/lib/types/raw';
import { all } from 'express/lib/application';
import db from '../models/index';


// let getDonVi = () => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let Don_vi = await db.don_vi.findAll();
//             if (Don_vi) {
//                 resolve({
//                     error: "lay thanh cong",
//                     Don_vi
//                 })
//             }
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// let post_CV = (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let check_TenCV = await db.ChucVu.findOne({
//                 where: { tenCV: data },
//                 raw: true
//             })
//             if (check_TenCV) {
//                 resolve({
//                     error_api: 1,
//                     mease: "Chức vụ đã tồn tại"
//                 })

//             }
//             else {
//                 await db.ChucVu.create({
//                     tenCV: data,
//                 });
//                 resolve({
//                     error_api: 0,
//                     mease: "Thành công"

//                 })
//             }

//         } catch (error) {
//             reject(error)
//         }
//     })
// }

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
    // getDonVi: getDonVi

}