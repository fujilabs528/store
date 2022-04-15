import { match } from "assert"
import express from "express"
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDB.js"
import ImportData from "./Dataimport.js"
import productRoute from "./Routes/ProductRoutes.js"
import { errorHandler, notFound } from "./Middleware/Errors.js"
import userRouter from "./Routes/UserRoutes.js"
import orderRouter from "./Routes/orderRoutes.js"

dotenv.config()
connectDatabase()
const app = express()
app.use(express.json())

// API 
app.use("/api/import", ImportData)
app.use("/api/products", productRoute)
app.use("/api/users", userRouter)
app.use("/api/orders", orderRouter)
app.get("/api/config/paypal", (req,res)=> {
    res.send(process.env.PAYPAL_CLIENT_ID)
})

// ERROR HANDLING
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 1000
console.log(PORT)

app.listen(PORT, 
    console.log(`SERVER RUNNING
     ON PORT ${PORT}`))

 