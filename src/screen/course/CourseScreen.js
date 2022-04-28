

import React, { useEffect } from "react";
import axios from "axios";
const CourseScreen = () => {

    useEffect(()=>{
        getListCourse();
    },[])

    const getListCourse = () => {
        const token = localStorage.getItem("accessToken")
        axios({
            method : "GET",
            url : "https://nitc.cleverapps.io/api/courses",
            data : {},
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then(response=>{
            var res = response.data;
            console.log(res)
        })
    }

    return (
        <div>
            <h1>CourseScreen</h1>
        </div>
    )
}

export default CourseScreen;