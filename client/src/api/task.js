import axios from "./axios";

export const getTasksRequest = async ()=> axios.get('/tasks')
export const getTaskRequest = async (id) => axios.get(`/tasks/${id}`)
export const createTasksRequest = async (task) => axios.post('/tasks',task)
export const updateTasksRequest = async (id,task)=> axios.put(`/tasks/${id}`, task)

export const deleteTasksRequest = async (id) => axios.delete(`/tasks/${id}`)