import * as z from 'zod';

export const SignUpValidation = z.object({
    name: z.string().min(2, {message: 'Name must be between 2 and 50 characters'}),
    username: z.string().min(2, {message: 'Username must be between 2 and 50 characters'}),
    email: z.string().email({message: 'Please enter a valid email'}),
    password: z.string().min(6, {message: 'Password must be between 6 and 50 characters'}),
})