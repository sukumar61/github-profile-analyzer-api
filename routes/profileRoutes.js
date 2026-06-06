import express from "express"
import { analyzeProfile ,getAllProfiles,getProfileById} from "../controllers/profileController.js"
const router=express.Router()
router.post("/analyze",analyzeProfile)
router.get("/",getAllProfiles)
router.get("/:id",getProfileById)
export default router