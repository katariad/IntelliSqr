import express from "express";
import * as userController from "../controller/usercontroller";

const router = express.Router();

// User routes
router.get("/",userController.servermain)
router.post("/login",userController.authenciateuser)

export default router;
