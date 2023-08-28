import {useForm} from 'react-hook-form' ;
import { useTask } from '../context/TaskContext';
import { useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import dayjs from 'dayjs';
//import utc from "dayjs/plugin/utc";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);


function TaskFormPage() {
 
  const {register,handleSubmit,setValue} = useForm() ;
  const {createTask, getTask,updateTask} = useTask() ;
  const navigate = useNavigate()
  const params = useParams() ;

  useEffect(()=>{
   // console.log(params)
   async function  loadTask(){
    if(params.id){
      const task = await  getTask(params.id)
      console.log(task._id)
      setValue('title',task.title),
      setValue('description',task.description)
     }
   }

   loadTask();
  }, []) ;

  //console.log(createTask())

  const onSubmit = handleSubmit( (data) =>{

      if(params.id){
       // updateTask(params.id,data)
       updateTask(params.id, {
        ...data,
        date: dayjs.utc(data.date).format(),
      
      }) ;
      }
      else{
        createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }


    navigate('/tasks')
  } ) ;


 
  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
      <label htmlFor="title">Title</label>
      <input 
          type="text" 
          placeholder="Title" 
          {...register('title')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
      />
      <label htmlFor="description">Description</label>
      <textarea  
          rows="3" placeholder="Description"
          {...register('description')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'

      ></textarea>
      <label htmlFor="date">Date</label>
      <input type="date" 
      {...register('date')}
      className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
      />



      <button type='submit' className='bg-indigo-500 px-3 py-2 rounded-md'> 
        Save
      </button>
    </form>
    </div>
  )
}

export default TaskFormPage