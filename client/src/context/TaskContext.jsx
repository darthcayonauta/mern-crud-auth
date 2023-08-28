import { createContext, useContext, useState } from "react";
import { createTasksRequest, 
         getTasksRequest, 
         deleteTasksRequest, 
         getTaskRequest,
         updateTasksRequest } from "../api/task";




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

//elimino una tarea
    const deleteTask = async (id) => {
        try {
          const res = await deleteTasksRequest(id);
          if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
        } catch (error) {
          console.log(error);
        }
      };



    //lista de tareas
    const getTasks = async() =>{
        const res = await getTasksRequest();
        setTasks(res.data)
        console.log(res);
    }

    const getTask = async (id) =>{

        try {
            
        const res = await getTaskRequest(id) ;
        //console.log(res)
        return res.data
        } catch (error) {
            console.log(error);
        }
    }

    const updateTask = async (id,task)=>{
        
        try {
            await updateTasksRequest(id,task)
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            deleteTask,
            getTask,
            updateTask
            }
        }>
            {children}
        </TaskContext.Provider>
    )
}