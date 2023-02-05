import UserService from '../services/LoginServices';
import req from 'express/lib/request';
import res from 'express/lib/response';
import db from '../models/index';
import CongVanService from "../services/CongVanService"
let getAllDV = async (req, res) => {
    let DonVi = await CongVanService.getDonVi();
    if (DonVi) {
        return res.status.json({
            err: 0,
            DonVi
        })
    }
}
module.exports = {
    getAllDV: getAllDV,
}