import express from "express";
import { upload } from "../lib/multer.js";
import userService from "../services/user.service.js";
const router = express.Router();

router.post("/login", userService.login);

router.get("/token", userService.checkToken);

router.post("/email", userService.email);

router.post("/signup", userService.signup);

router.patch("/profile", upload.single("image"), userService.updateProfile);

router.post("/logout", userService.logout);

router.delete("/", userService.signout);

export default router;
