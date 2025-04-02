/* eslint-disable @typescript-eslint/no-explicit-any */

import { getHeaderConfig } from "@/utils/helper/getHeaderConfig";
import { logout } from "@/utils/helper/tokens";
import axios, { AxiosResponse } from "axios"

const baseApiUrl = `https://quran-website-backend.onrender.com/api/v1/`

export interface errorData {
    code: number;
    data: any;
    error: string;
    message: string;
    success: boolean;
}

interface ErrorWrapper {
    type: "error";
    message: errorData;
}
interface ResponseWrapper<T> {
    type: "success";
    response: AxiosResponse | T;
}

export type GetDataResult<T> = ErrorWrapper | ResponseWrapper<T>;

export const getCaller = async<T = any>({
    url,
    type = "withToken",
    baseUrl = baseApiUrl
}): Promise<GetDataResult<T>> =>{
    const headerConfig = getHeaderConfig(type);
    try {
        const resposne = await axios.get(`${baseUrl}${url}`,{
            headers:headerConfig,
        });
        return {type:"success",response:resposne.data as T}
    } catch (error) {
        if(error.status === 401){
            logout()
            return;
        }
        return {type:"error",message:error.response?.data as errorData}
    }
}

export const postCaller = async<T = any> ({
    url = "",
    payload,
    type = "withToken",
    baseUrl = baseApiUrl,
}): Promise<GetDataResult<T>> => {
    const headerConfig = getHeaderConfig(type);
    try {
        const res = await axios.post(`${baseUrl}${url}`, payload, {
            headers: headerConfig,
        });
        return { type: "success", response: res.data as T };
    } catch (error) {
        if(error.status === 401){
            logout()
            return;
        }
        return {type:"error",message:error.response?.data as errorData}
    }
};

export const putCaller = async<T = any> ({
    url = "",
    payload,
    type = "withToken",
    baseUrl = baseApiUrl,
}): Promise<GetDataResult<T>> => {
    const headerConfig = getHeaderConfig(type);
    try {
        const res = await axios.put(`${baseUrl}${url}`, payload, {
            headers: headerConfig,
        });
        return { type: "success", response: res.data as T };
    } catch (error) {
        if(error.status === 401){
            logout()
            return;
        }
        return {type:"error",message:error.response?.data as errorData}
    }
};

export const deleteCaller = async<T = any> ({
    url = "",
    type = "withToken",
    baseUrl = baseApiUrl,
}): Promise<GetDataResult<T>> => {
    const headerConfig = getHeaderConfig(type);
    try {
        const res = await axios.delete(`${baseUrl}${url}`, {
            headers: headerConfig,
        });
        return { type: "success", response: res.data as T };
    } catch (error) {
        if(error.status === 401){
            logout()
            return;
        }
        return {type:"error",message:error.response?.data as errorData}
    }
};