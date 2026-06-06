import express from "express"
import { analyzeProfile ,getAllProfiles} from "../controllers/profileController.js"
const router=express.Router()
router.post("/analyze",analyzeProfile)
router.get("/analyze",getAllProfiles)
export default router