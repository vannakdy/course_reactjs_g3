

import React, { useEffect,useState } from "react";
import axios from "axios";
const CourseScreen = () => {
    const [list , setList] = useState([]);
    const token = localStorage.getItem("accessToken")
    useEffect(()=>{
        getListCourse();
    },[])

    const getListCourse = () => {
        
        axios({
            method : "GET",
            url : "https://nitc.cleverapps.io/api/courses",
            data : {},
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then(response=>{
            var res = response.data;
            console.log(res.data)
            setList(res.data)
        })
    }

    const onClickDelete = (id) => {
        axios({
            method : "DELETE",
            url : "https://nitc.cleverapps.io/api/courses/"+id,
            data : {},
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then(response=>{
            var res = response.data;
            getListCourse();
            console.log(res);
        })
    }

    // course_id: 62
    // description: "DEs"
    // name: "TEst"
    // price: 1000
    // status: 1

    return (
        <div>
            <h1>CourseScreen</h1>
            <h1>{list.length}</h1>
            {
                list.map((item,index)=>{
                    return(
                        <div key={index} style={{padding:10}}>
                            <div>{item.name}</div>
                            <div>{item.description}</div>
                            <div>{item.price}$</div>
                            <div>{item.status == 1 ? "Enabled" : "Disabled"}</div>
                            <button onClick={()=>onClickDelete(item.course_id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CourseScreen;