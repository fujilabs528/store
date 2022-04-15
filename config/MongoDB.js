import mongoose from "mongoose"

const connectDatabase = async () => {
    try{
        const connection =  await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
    console.log("MONGO CONNECTION MADE XXX")
    
    }
    catch(error){
        console.log(`ERROR: ${error.message} XXX`)
        process.exit(1)
    } 
}

export default connectDatabase