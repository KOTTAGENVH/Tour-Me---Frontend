import axios from "axios";
import { apiClient } from "../axios/api";

//Authentication Sign Up

export const signUp = async (usename, email, role, approved, password) => {
    try {
        const response = await apiClient.post("/user/create-user", {
            usename,
            email,
            role,
            approved,
            password,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

//Authentication Sign In

export const signIn = async (email, username, password) => {
    try {
        const response = await apiClient.post("/user/create-user", {
            email,
            username,
            password,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

//Authentication Forgot Password

export const forgotPassword = async (email, secretcode, password) => {
    try {
        const response = await apiClient.post("/user/forget-password", {
            email,
            secretcode,
            password,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

//Get All Users

export const getAllUsers = async () => {
    try {
        const response = await apiClient.get("/user/get-all-users");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//Get User By Id

export const getUserById = async (id) => {
    try {
        const response = await apiClient.get(`/user/get-user-by-id/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



