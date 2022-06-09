

import React,{useEffect,useState} from "react";
import {fetchData} from "../../helpler";
import {Button, Form, Input, Modal, Row, Space, Spin,Table} from "antd"
const TeacherScreen = () => {
    const [list , setList] = useState([]);
    const [loading,setLoading] = useState(false);
    const [visible,setVisible] = useState(false);

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

    // description: "PHP,Laravel , Mobile app"
// email: "narasome@gmail.com"
// fname: "Som"
// gender: 1
// lastname: "Nara"
// teacher_id: 23
// tel: "0968989009"
    const columns = [
        {
            title: "ID",
            dataIndex: "teacher_id",
        },
        {
            title: "First name",
            dataIndex: "fname",
        },
        {
            title: "Last name",
            dataIndex: "lastname",
        },
        {
            title: "Gender",
            dataIndex: "gender",
            render : (item,items) => { // item (gender (1,0)), items (object)
                // if(item == 1){
                //     return "Male"
                // }else {
                //     return "Female"
                // }
                return item == 1 ? "Male" : "Female"
            }
        },
        {
            title : "Email",
            dataIndex : "email"
        },
        {
            title : "Tel",
            dataIndex : "tel"
        },
        {
            title : "Descriptoin",
            dataIndex : "description"
        },
        {
            title : "Action",
            render : (item,items) => {
                return (
                    <Space>
                        <Button style={{color:"red"}} size="small">DELETE</Button>
                        <Button size="small">EDIT</Button>
                    </Space>
                )
            }
        }
    ]

    const handlePopUp = () => {
        setVisible(true)
    }

    const handleCloseModal = () => {
        setVisible(false)
    }

    const onOkModal = () => {
        // ...
    }


    return (
        <div>
            <Modal
                visible={visible}
                onCancel={handleCloseModal}
                onOk={onOkModal}
            >
                <Form>
                    <Form.Item
                        label="First name"
                        name={"fname"}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="First name"
                        name={"fname"}
                    >
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
            
            <Spin spinning={loading}>
                
                <Row>
                    <Space>
                        <h1>TeacherScreen</h1>
                        <Button onClick={handlePopUp} type="primary">Add New</Button>
                    </Space>
                </Row>
                <Table 
                    bordered={true}
                    columns={columns}
                    dataSource={list}
                />
            </Spin>
        </div>
    )
}

export default TeacherScreen;