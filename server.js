import dotenv from 'dotenv'
import app from './app.js'ls
import express from "express"

app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})