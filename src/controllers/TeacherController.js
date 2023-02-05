// import UserService from '../services/LoginServices';
import req from 'express/lib/request';
import res from 'express/lib/response';
// import db from '../models/index';
import TeacherServices from "../services/TeacherServices";

let getAllTeacher = async (req, res) => {
    let listTeacher = await TeacherServices.listTeacher();
    if (listTeacher) {
        return res.status(200).json({
            listTeacher
        })
    }
}

let postTeacher = async (req, res) => {
    let Post_Teacher = await TeacherServices.post_teacher(req.body);
    if (Post_Teacher) {
        return res.status(200).json({
            error: 0,
            Post_Teacher,
        })

    }
}

let deleteTeacher = async (req, res) => {
    let id_ = req.query.id;;
    if (id_) {
        let query = await TeacherServices.deleteTeacherSrv(id_);
        if (query) {
            return res.status(200).json({
                error: 0,
                query
            })
        }
    }
}

module.exports = {
    postTeacher: postTeacher,
    getAllTeacher: getAllTeacher,
    deleteTeacher: deleteTeacher
}