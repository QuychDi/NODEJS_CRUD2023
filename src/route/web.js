import express from "express";
import { route } from "express/lib/application";
import req from "express/lib/request";
import res from "express/lib/response";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController"
import StudentController from "../controllers/StudentControllor";
import ChucVuController from "../controllers/ChucVuController";
import TeacherController from "../controllers/TeacherController";
import CongVanController from "../controllers/CongvanController";
import { Route } from "express";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about-me', homeController.getAboutMe);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-css-crud', homeController.postCRUD)
    // CRUD
    router.get('/api/get-crud', homeController.displayGetCRUD);
    router.post('/api/create-student', StudentController.addNewStudent);
    // CHUC VU
    router.get('/api/get-all-chucvu', ChucVuController.getAllChucVu);
    router.get('/api/delete-chuc-vu', ChucVuController.deleteChucVu);
    router.post('/api/post-chuc-vu', ChucVuController.postChucVu);
    // TEACHER
    router.post('/api/post-teacher', TeacherController.postTeacher);
    router.get('/api/get-all-teacher', TeacherController.getAllTeacher);
    router.get('/api/delete-teacher', TeacherController.deleteTeacher);
    // STUDENT
    router.get('/api/deleteStu', StudentController.delete_Student);
    router.get('/api/edit-student', StudentController.editStudent);
    router.get('/get-crud', homeController.getAllCRUD);
    router.get('/edituser', homeController.editUserById);
    router.post('/put-crud', homeController.putCrud);
    router.get('/delete', homeController.delete_user);

    router.post('/api/login', userController.handelLogin);

    // CONG VAN
    router.get('/get-all-don-vi', CongVanController.getAllDV);
    return app.use("/", router)
}

module.exports = initWebRoutes;