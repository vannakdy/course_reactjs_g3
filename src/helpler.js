import axios from "axios";
import React from "react";

export const baseUrl = "https://nitc.cleverapps.io/" // production
// export const baseUrl = "http://localhost:8080/" // developement
// export const baseUrl = "https://test.com/" // developement

export const fetchData = (paramUrl="",data={},method="GET",newRefreshToken=undefined) => {
    var token = localStorage.getItem("accessToken")
    if(newRefreshToken != undefined){
        token = newRefreshToken
    }
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
        var status = err.response ?  err.response.status : "";
        if(status == 403){
            refreshToken(paramUrl,data,method)
        }
    })
}

export const refreshToken = (paramUrl,paramData,method) => {
    var refreshToken = localStorage.getItem("refreshToken")
    return axios({
        method : "POST",
        url : baseUrl+"api/auth/refreshToken",
        data : {
            token : refreshToken
        },
        headers : {

        }
    }).then(response=>{
        var data = response.data;
        var newToken = data.accessToken
        var newRefreshToken = data.refreshToken
        localStorage.setItem("accessToken" , newToken);
        localStorage.setItem("refreshToken" , newRefreshToken);
        return fetchData(paramUrl,paramData,method,newToken) // recall when have new token
    }).catch(err=>{
        window.location.href = "/login"
    })
}

