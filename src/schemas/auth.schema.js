//validaciones
import {z} from 'zod' ;

//creas un objeto
export const resgisterSchema = z.object({
    username : z.string({
        required_error: 'Username is required'
    }),
    email : z.string( {
        required_error: 'Email is required'
    }).email({
       message: 'Invalid Email'
    }),
    password : z.string({
        required_error: 'password is required'
    }).min(6,{
        message: 'password must be al last 6 characters'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid Email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6,{
        message: 'Password must be at last 6 characters'
    })
})