import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        
        const connection = mongoose.connection

        connection.on("connected", () => {
            console.log("MongoDB connected...")
        })

        connection.on("error",(error) => {
            console.log("MongoDB connection error, please make sure db is up and running"+error)
            process.exit(1)
        })
    } catch (error) {
        console.log("Unable to connect to the database!!!")
        console.log(error)
    }
}