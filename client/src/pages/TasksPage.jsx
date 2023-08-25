import { useEffect } from "react"
import { useTask } from "../context/TaskContext"

function TasksPage() {
  const {getTasks,tasks} = useTask()



  useEffect(()=>{
    getTasks()
  }, [] )

  return (
    <div>x
      {
        tasks.map(tasks => (
          <div key={tasks._id}> 
            <h1>{tasks.title}</h1>
            <p>{tasks.description}</p>
          </div>

        ))
      }
    </div>
  )
}

export default TasksPage