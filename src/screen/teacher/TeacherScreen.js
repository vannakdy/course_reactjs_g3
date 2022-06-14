

import React,{useEffect,useState} from "react";
import {fetchData} from "../../helpler";
import "./TeacherScreen.css";
import {Button, Divider, Form, Input, message, Modal, Row, Select, Space, Spin,Table} from "antd";
const TeacherScreen = () => {
    const [list , setList] = useState([]);
    const [loading,setLoading] = useState(false);
    const [visible,setVisible] = useState(false);
    const [id,setId] = useState(null)
    const {Option} = Select;
    const {TextArea} = Input;
    const [formRef] = Form.useForm();

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
                        <Button onClick={()=>handleDelete(items)} style={{color:"red"}} size="small">DELETE</Button>
                        <Button onClick={()=>handleShowEdit(items)} size="small">EDIT</Button>
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
        formRef.resetFields();
        setId(null)
    }

    const onOkModal = () => {
        // ...
    }

    const handleDelete = (items) => {
        setLoading(true);
        fetchData("api/teacher/"+items.teacher_id,{},"DELETE").then(res=>{
            setLoading(false);
            message("Delete success!");
            getListTeacher();
        })
    }

    const handleShowEdit = (items) => {
        setVisible(true)
        setId(items.teacher_id)
        formRef.setFieldsValue({
            fname : items.fname,
            lastname : items.lastname,
            gender : items.gender+"",
            email : items.email,
            phone : items.tel,
            description : items.description,
        })
    }

    const handleFinish = (objectForm) => {
        if(id == null){
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
                getListTeacher();
            })
        }else{
            var params = {
                teacher_id : id,
                fname : objectForm.fname,
                lastname : objectForm.lastname,
                gender : Number(objectForm.gender),
                tel : objectForm.phone,
                email : objectForm.email,
                description : objectForm.description,
            }
            setLoading(true);
            fetchData("api/teacher",params,"PUT").then(res=>{
                setLoading(false);
                console.log(res);
                handleCloseModal();
                getListTeacher();
            })
        }
       
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
                    form = {formRef}
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
                        rules={[
                            { 
                                type: 'email',
                                message : "Email invalid!"
                            },
                            {
                                required : true,
                                message : "Email required!"
                            }
                        ]}
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
                        label=""
                        name="button"
                        wrapperCol={{
                            span:18,
                            offset:6
                        }}
                        style={{textAlign:"right"}}
                    >
                        <Space>
                            <Button onClick={handleCloseModal}>
                                Cancel
                            </Button>
                            <Button htmlType="submit">
                                {id == null ? "SAVE" : "UPDATE"}
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
            
            <Spin spinning={loading}>
                
                <div className="content_header">
                    <h1>TeacherScreen</h1>
                    <Button onClick={handlePopUp} type="primary">Add New</Button>
                </div>
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