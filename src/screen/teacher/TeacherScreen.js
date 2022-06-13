

import React,{useEffect,useState} from "react";
import {fetchData} from "../../helpler";
import {Button, Form, Input, Modal, Row, Select, Space, Spin,Table} from "antd";
const TeacherScreen = () => {
    const [list , setList] = useState([]);
    const [loading,setLoading] = useState(false);
    const [visible,setVisible] = useState(false);
    const {Option} = Select;
    const {TextArea} = Input
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

    const handleSave = () => {

    }

    const handleFinish = (objectForm) => {
        debugger
        var params = {
            fname : objectForm.fname,
            lastname : objectForm.lastname,
            gender : Number(objectForm.gender),
            tel : objectForm.phone,
            email : objectForm.email,
            description : objectForm.description,
        }
        setLoading(true);
        fetchData("api/teacher",params,"POST").then(res=>{
            setLoading(false);
            console.log(res);
            handleCloseModal();
        })
    }


    return (
        <div>
            <Modal
                title="New Teacher"
                visible={visible}
                onCancel={handleCloseModal}
                // onOk={onOkModal}
                footer={null}
                // footer={[
                //     <Button onClick={handleCloseModal}>
                //         Cancel
                //     </Button>,
                //     <Button htmlType="submit" onClick={handleSave}>
                //         Save
                //     </Button>
                // ]}
            >
                <Form
                    labelCol={{
                        span : 6
                    }}
                    wrapperCol={{
                        span : 18
                    }}
                    onFinish={handleFinish}
                >
                    <Form.Item
                        label="First name"
                        name={"fname"}
                        rules={[
                            {
                                required : true,
                                message : "First name required!"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Last name"
                        name={"lastname"}
                        rules={[
                            {
                                required : true,
                                message : "Last name required!"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Gender"
                        name={"gender"}
                    >
                        <Select defaultValue={"1"}>
                            <Option value={"1"}>Male</Option>
                            <Option value={"0"}>Female</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name={"email"}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name={"phone"}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name={"description"}
                    >
                        <TextArea/>
                    </Form.Item>
                    <Form.Item
                        // style={{textAlign:"right"}}
                        label=""
                        name="button"
                        labelCol={{
                            span:6
                        }}
                        wrapperCol={{
                            span:18
                        }}
                    >
                        <Space>
                            <Button onClick={handleCloseModal}>
                                Cancel
                            </Button>
                            <Button htmlType="submit">
                                Save
                            </Button>
                        </Space>
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