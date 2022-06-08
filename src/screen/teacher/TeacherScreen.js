

import React,{useEffect,useState} from "react";
import {fetchData} from "../../helpler";
import {Spin} from "antd"
const TeacherScreen = () => {
    const [list , setList] = useState([]);
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        getListTeacher()
    },[])

    const getListTeacher = () => {
        setLoading(true)
        fetchData("api/teacher",{},"GET").then(res=>{
            setList(res.data)
            setLoading(false)
        })
    }


    return (
        <div>
            <Spin spinning={loading}>
                <h1>TeacherScreen</h1>
                {list.map((item,index)=>{
                    return (
                        <div>{item.fname}</div>
                    )
                })}
            </Spin>
        </div>
    )
}

export default TeacherScreen;