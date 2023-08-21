import mongoose from "mongoose";

//lo haces para validar el tipo de dato que ocuparás
const userSchema = new mongoose.Schema({
        username : {
            type: String,
            required: true,
            trim: true
        },
        email : {
            type: String,
            required: true,
            trim: true,
            unique: true


        },
        password : {
            type : String,
            required: true

        }
    }, {timestamps: true }
);

export default mongoose.model('User',userSchema) ;
