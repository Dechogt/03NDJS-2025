import express from "express"
import connectDB from "./db/connectDB.js"
import authRoutes from "./routes/auth.js"

//connect to the database
connectDB()

//initialize express
const app = express()

//and the middleware here

//API routes
app.use("/api/v1", authRoutes)

// any error handler middleware here

const port= process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})