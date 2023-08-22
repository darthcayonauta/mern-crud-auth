///como interactuaré con la db, importo el modelo de la base de datos
import Task from '../models/task.model.js'

export const getTasks = async (req,res) => {
   const tasks = await Task.find({
    user : req.user.id
   }).populate('user') ;

   res.json(tasks) ;
}

export const createTask = async (req,res) => {
    const {title,description,date}  = req.body ;

    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    }) ;

    const savedTask = await newTask.save() ;
    //ahora voy a retornar algo al cliente
    res.json(savedTask) ;

}

export const getTask = async (req,res) => {
    const task =await Task.findById(req.params.id) ;

    if(!task) return res.status(404).json({
        message:"tarea no encontrada" 
    }) ;

    //si lo encuentra , enntos devuelve la tarea
    res.json(task) ;

}

export const deleteTask = async (req,res) => {
    const task =await Task.findByIdAndDelete(req.params.id) ;

    if(!task) return res.status(404).json({
        message:"tarea no encontrada para eliminar" 
    }) ;

    res.json(task) ;

}

export const updateTask = async (req,res) => {
    const task =await Task.findByIdAndUpdate(req.params.id,
        req.body,{
            new: true
        }) ;

    if(!task) return res.status(404).json({
        message:"tarea no encontrada para actualizar" 
    }) ;

    res.json(task) ;
}