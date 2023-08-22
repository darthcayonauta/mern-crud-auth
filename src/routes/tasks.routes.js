//sólo para usuarios logueados

import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTask, createTask, updateTask, deleteTask  } from "../controllers/tasks.controller.js";


const router = Router() ;

router.get('/tasks',authRequired , getTasks) ;
router.get('/tasks/:id',authRequired, getTask ) ;
router.post('/tasks',authRequired, createTask ) ;
router.put('/tasks',authRequired , updateTask) ;
router.delete('/tasks',authRequired , deleteTask) ;

export default router ;