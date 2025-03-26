import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://kurakuladeepak12:TjeJ1qHP12AnLJ1v@cluster0.qae3acz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"))
}

