import mongoose from "mongoose";

export const connectdb = async ()=>{

    try {
        await mongoose.connect('mongodb://localhost:27017/merndb') ;
        console.log('Db conectada!');
        
    } catch (error) {
        console.log(error) ;
    }

}