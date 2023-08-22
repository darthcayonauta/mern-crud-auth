import mongoose from "mongoose";

const taskSchema =  new mongoose.Schema({
    title : {
        type: String,
        required : true,   
    },
    description :{
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    user:{
        type: mongoose.Schema.ObjectId, //es similar a las claves foráneas
        ref: 'User', //hace referencia al Esquema 'User'
        required : true

    }
}, {timestamp: true})


export default mongoose.model('Task', taskSchema) ;