import { createContext, useContext, useState } from "react";
import { createTasksRequest, getTasksRequest } from "../api/task";




const TaskContext = createContext() ;

export  const useTask = ()=>{
    const context = useContext(TaskContext) ;

    if(!context){
        throw new Error("useTask must be used within a TaskProvider") ;
    }

    return context ;
}


export function TaskProvider({ children }){
    //lista
    const [tasks, setTasks] = useState([]) ;

    //quiero crear la tarea
    //recibo un task
    const createTask =  async (task) => {
      //  console.log('!tastks!!')
        
        try {
            const res = await createTasksRequest(task)
            console.log(res)
            
        } catch (error) {
            console.log(error);
        }

    }

    //lista de tareas
    const getTasks = async() =>{
        const res = await getTasksRequest();
        setTasks(res.data)
        console.log(res);
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks
            }
        }>
            {children}
        </TaskContext.Provider>
    )
}