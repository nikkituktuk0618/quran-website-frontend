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
interface ResponseWrapper {
    type: "success";
    response: AxiosResponse;
}

export type GetDataResult = ErrorWrapper | ResponseWrapper;

export const getCaller = async({
    url,
    type = "withToken",
    baseUrl = baseApiUrl
}): Promise<GetDataResult> =>{
    const headerConfig = getHeaderConfig(type);
    try {
        const resposne = await axios.get(`${baseUrl}${url}`,{
            headers:headerConfig,
        });
        return {type:"success",response:resposne.data.data}
    } catch (error) {
        if(error.response.code === 401){
            logout()
            return;
        }
        return {type:"error",message:error.response?.data as errorData}
    }
}

export const postCaller = async ({
    url = "",
    payload,
    type = "withToken",
    baseUrl = baseApiUrl,
}): Promise<GetDataResult> => {
    const headerConfig = getHeaderConfig(type);
    try {
        const res = await axios.post(`${baseUrl}${url}`, payload, {
            headers: headerConfig,
        });
        return { type: "success", response: res };
    } catch (error) {
        if(error.response.code === 401){
            logout()
            return;
        }
        return {type:"error",message:error.response?.data as errorData}
    }
};