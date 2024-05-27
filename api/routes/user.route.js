import express from 'express';
import {updateUser, deleteUser, getUserListings, getUser} from '../controllers/user.controller.js';
import {verifyUser} from '../utils/verifyUser.js'
const router= express.Router();
router.post('/update/:id',verifyUser,updateUser);router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get("/:id", verifyToken, getUser);

export default router;