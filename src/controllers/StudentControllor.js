import req from 'express/lib/request';
import res from 'express/lib/response';
import db from '../models/index';
import studentServices from '../services/studentServices';
let addNewStudent = async (req, res) => {
    let add_student = await studentServices.addStudent(req.body);
    return res.status(200).json({
        errocode: 0,
        mess: 'ok',
        add_student
    })

    // return res.status(200).json({
    //     errocode: 1,
    //     mess: 'Can not add student'
    // })

}

let delete_Student = async (req, res) => {
    let ID = req.query.id;
    if (ID) {
        let StudentId = await studentServices.delete_Stu(ID);
        return res.status(200).json({
            errocode: 0,
            mess: 'Deleted'
        })
    }

}

let editStudent = async (req, res) => {
    let ID = req.query.id;
    if (ID) {
        let IDstudent = await studentServices.editStud(ID);
        return res.status(200).json({
            errocode: 0,
            mess: "Oke Edit",
            IDstudent
        })
    }
}

module.exports = {
    addNewStudent: addNewStudent,
    delete_Student: delete_Student,
    editStudent: editStudent,
}