import req from 'express/lib/request';
import res from 'express/lib/response';
import db from '../models/index';
import CRUDservice from '../services/CRUDservice';
let getHomePage = async (req, res) => {

    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}
let getAboutMe = (req, res) => {
    return res.render('test/About.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let mesage = await CRUDservice.createNewUser(req.body);
    console.log(mesage);
    // await CRUDservice.createNewUser(req.body);
    return res.send("crud from server");
}
let displayGetCRUD = async (req, res) => {
    // let id = req.query.id; // ALL, id
    let da = await CRUDservice.getAllUser();
    return res.status(200).json({
        errcode: 0,
        errMess: '0K',
        da
    })
    // let da = await CRUDservice.getAllUser();
    // return res.render('get-crud.ejs', {
    //     datatable: da
    // });
    // return res.send("displayGetCRUD");
}

let editUserById = async (req, res) => {
    let usrId = req.query.id;
    if (usrId) {

        let InfUser = await CRUDservice.getIdEditUser(usrId);
        // console.log(InfUser);
        return res.render('editUser.ejs', {
            User: InfUser,

        });
    } else {
        return res.send('Hell edit 2');
    }



}

let putCrud = async (req, res) => {
    let user = req.body;
    let allUser = await CRUDservice.UpdateuserbyID(user);
    return res.render('get-crud.ejs', {
        datatable: allUser,

    })
}

let delete_user = async (req, res) => {
    let userid = req.query.user;
    if (userid) {
        let allUser = await CRUDservice.deleteUser(userid);
        return res.render('get-crud.ejs', {
            datatable: allUser
        });
    } else {
        return 'Hrll';
    }

}

let getAllCRUD = async (req, res) => {
    let alluser = await CRUDservice.getAll_CRUD();
    return res.render('get-crud.ejs', {
        datatable: alluser
    })
}
module.exports = {
    getHomePage: getHomePage,
    getAboutMe: getAboutMe,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    editUserById: editUserById,
    putCrud: putCrud,
    delete_user: delete_user,
    getAllCRUD: getAllCRUD
}