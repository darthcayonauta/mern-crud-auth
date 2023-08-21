//guardando data
import User from '../models/user.model.js' ;
import bcrypt from 'bcryptjs' ;
//import  jwt  from 'jsonwebtoken';
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req,res) => {
    //console.log(req.body);
    const {username,email,password } = req.body;

    try {

        const passwordHash = await bcrypt.hash(password,10) ;

        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save() ;
        const token = await createAccessToken({id:userSaved._id}) ;


        res.cookie('token', token);

        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        }) ;


        // console.log(newUser);
    } catch (error) {
        //console.log(error);
        res.status(500).json({message:error.message}) ;
    }
} ;

export const login = async (req,res) => {
    //console.log(req.body);
    const {email,password } = req.body;

    try {

        //buscamos usuario
        const userFound = await User.findOne({email}) ;

        if(!userFound) return res.status(400).json({message:"User not found"}) ;

        //si todo esta ok, procedo a comparar las claves
        const isMatch = await bcrypt.compare(password,userFound.password) ;

        if(!isMatch) return res.status(400).json({message:"Incorrect password!"}) ;


        const token = await createAccessToken({id:userFound._id}) ;


        res.cookie('token', token);

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        }) ;


        // console.log(newUser);
    } catch (error) {
        //console.log(error);
        res.status(500).json({message:error.message}) ;
    }
} ;

export const logout = (req,res) => {
    res.cookie('token',"",{
        expires: new Date(0) 
    }) ;

    //envio una respuesta al cliente
    res.status(200) ;
}

//export const login = (req,res) => res.send('login') ;