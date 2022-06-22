import axios from "axios";
import React from "react";

export const baseUrl = "https://nitc.cleverapps.io/" // production
// export const baseUrl = "http://localhost:8080/" // developement
// export const baseUrl = "https://test.com/" // developement

export const fetchData = (paramUrl="",data={},method="GET") => {
    const token = localStorage.getItem("accessToken")
    return axios({
        method : method,
        url : baseUrl+paramUrl,
        data : data,
        headers : {
            Authorization : `Bearer ${token}`
        }
    }).then(response=>{
        return response.data;
    }).catch(err=>{
        window.location.href = "/login"
    })
}