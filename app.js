import express from 'express'
import profileRoutes from "./routes/profileRoutes.js"


const app = express()

app.use(express.json())
app.use("/api/profiles",profileRoutes)

export default app