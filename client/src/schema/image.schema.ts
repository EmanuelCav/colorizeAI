import { object, string } from "yup";

export const inputSchema = object().shape({
    inputs: string().trim().min(1, 'Please Type something to generate').required('Please Type something to generate')
})