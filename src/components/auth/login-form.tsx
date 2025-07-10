'use client'

import {z} from "zod"

const loginSchema = z.object({
    email: z.string().email('Please enter the valid email address'),
    password: z.string().min(6,'Password should be of 6 characters')
})


export default function LoginForm(){
    return(
        <div>
            <h1 className="text=2xl font-semibold">login page </h1>
        </div>
    )
}