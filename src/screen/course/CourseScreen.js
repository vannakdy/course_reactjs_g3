

import React, { useEffect,useState } from "react";
import axios from "axios";
import {Button,message,Table,Space} from "antd";
import {
    PlusOutlined,
    DeleteFilled,
    EditFilled
} from "@ant-design/icons";
import "./CourseScreen.css";

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

    const handleDelete = (record) => {
        axios({
            method : "DELETE",
            url : "https://nitc.cleverapps.io/api/courses/"+record.course_id,
            data : {},
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then(response=>{
            message.success("Delete successfully!");
            getListCourse();
        })
    }

    const handeEdit = () => {

    }

    const columns = [
        {
            title : "ID",
            dataIndex : "course_id"
        },
        {
            title : "Name",
            dataIndex : "name"
        },
        {
            title : "Price",
            dataIndex : "price"
        },
        {
            title : "Description",
            dataIndex : "description"
        },
        {
            title : "Status",
            dataIndex : "status",
            render : (status,record) => {
                return (
                  <div
                    style={{
                        color: status === 1 ? "green" : "brown",
                        fontWeight:"bold"
                    }}
                  >
                    {status === 1 ? "Eanbled" : "Diabled"} 
                    {/* <input /> */}
                  </div>
                )
            }
        },
        {
            title : "Action",
            dataIndex : "",
            render : (_,record) => {
                return (
                    <div style={{textAlign:"right"}}>
                        {/* <DeleteFilled 

                            style={{
                                color:"red",
                                fontSize:24
                            }}
                        />
                        <EditFilled 
                            style={{
                                color:"blue",
                                fontSize:24
                            }}
                        /> */}
                        <Space>
                            <Button onClick={()=>handleDelete(record)} size="small" danger><DeleteFilled /> Delete</Button>
                            <Button onClick={handeEdit} size="small" type="primary"><EditFilled /> Edit</Button>
                        </Space>
                    </div>
                )
            }
            
        },
    ]


    return (
        <div>
            <div className="header_container">
                <h1>List Courses</h1>
                <Button type="primary"> <PlusOutlined/> New Course</Button>
            </div>
            {/* <Button 
                type="primary"
                size="small"
                // disabled={true}
                block={true}
                style={{color:"red"}}
            >
                Default Button
            </Button>
            <br/>
            <Button 
                type="primary"
                size="small"
                shape="round"
            >
                Button
            </Button>
            <div>
                <DownOutlined 
                    style={{color:"green",fontSize:44}}
                />
            </div>
             */}
            {
                <Table 
                    bordered={true}
                    columns={columns}
                    dataSource={list}
                />

                // list.map((item,index)=>{
                //     return(
                //         <div key={index} style={{padding:10}}>
                //             <div>{item.name}</div>
                //             <div>{item.description}</div>
                //             <div>{item.price}$</div>
                //             <div>{item.status == 1 ? "Enabled" : "Disabled"}</div>
                //             <button onClick={()=>onClickDelete(item.course_id)}>Delete</button>
                //         </div>
                //     )
                // })
            }
        </div>
    )
}

export default CourseScreen;