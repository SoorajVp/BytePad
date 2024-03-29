import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../axios"
import toast from "react-hot-toast"


export const submitLogin = createAsyncThunk(
    'users/submitLogin', async (payload) => {
        try {
            const response = await axiosInstance.post('/auth/login', payload)
            toast.success(response?.data?.message)
            return response.data
        } catch (error) {
            console.log(error?.response?.data)
            toast.error(error?.response?.data?.message)
            throw error?.response?.data;
            // return error?.response?.data
        }
    }
)

export const submitRegister = createAsyncThunk(
    'users/submitRegister', async( payload ) => {
        try {
            const response = await axiosInstance.post('/auth/register', payload)
            toast.success(response?.data?.message)
            return response.data
        } catch (error) {
            console.log(error?.response?.data)
            toast.error(error?.response?.data?.message)
            throw error?.response?.data;
        }
    }
)


export const submitMobile = async( payload ) => {
    try {
        const response = await axiosInstance.post('/auth/send-otp', payload);
        console.log(response)
        toast.success(response?.data?.message)
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        throw error?.response?.data;
    }
}   

export const verfyMobileOTP = async( payload ) => {
    try {
        const response = await axiosInstance.post('/auth/verify-otp', payload);
        toast.success(response?.data?.message)
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        throw error?.response?.data;
    }
}