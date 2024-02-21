import express from "express";
import { storeProfile, applyJob, getUserProfile } from "../controllers/profileController.js";
import checkAuthUser from "../middlewares/auth-middleware.js";

const router = express.Router();

// Protected route
router.post('/store_profile', checkAuthUser, storeProfile);
router.post('/apply/:jobId', checkAuthUser, applyJob);
router.get('/get_profile', getUserProfile);

export default router;
