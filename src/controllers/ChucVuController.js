// import UserService from '../services/LoginServices';
import req from 'express/lib/request';
import res from 'express/lib/response';
// import db from '../models/index';
import ChucVuServices from "../services/ChucVuServices";
let getAllChucVu = async (req, res) => {
    let Chuc_Vu = await ChucVuServices.getAll_ChucVu();
    if (Chuc_Vu) {
        return res.status(200).json({
            error: 0,
            Chuc_Vu
        })
    }
}

let postChucVu = async (req, res) => {

    let PostCV = await ChucVuServices.post_CV(req.body.tenCV);
    if (PostCV) {
        return res.status(200).json({
            error: 0,
            PostCV,
        })

    }
}

let deleteChucVu = async (req, res) => {
    let id_ietm = req.query.id;
    if (id_ietm) {
        let delete_item = await ChucVuServices.deleteChucVuSerVice(id_ietm);
        if (delete_item) {
            return res.status(200).json({
                error: 0,
                delete_item
            })
        }
    }
}
module.exports = {
    getAllChucVu: getAllChucVu,
    postChucVu: postChucVu,
    deleteChucVu: deleteChucVu,
}