// routes/index.ts
import express from "express";
import { authenciateuser,servermain } from "../controller/usercontroller";

const router = express.Router();

router.post("/login", authenciateuser); // ✅ Hook controller to route
router.get("/",servermain)
export default router;
