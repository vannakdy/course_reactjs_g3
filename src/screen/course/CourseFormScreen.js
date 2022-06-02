import React , {useState}  from "react";
import {
    Form,
    Input,
    Select,
    Button,
    Space,
    Spin
} from "antd";
import {useNavigate} from "react-router-dom";
import axios from "axios"

const {TextArea} = Input
const {Option} = Select


const CourseFormScreen = () => {

    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)

    const token = localStorage.getItem("accessToken")

    const haveSave = () => {
        
    }

    const handleCancel = () => {
        navigate("/course")
    }   

    const hadleOnFinish = (objValue) => {
        setLoading(true)
        axios({
            method : "POST",
            url : "https://nitc.cleverapps.io/api/courses",
            data  : {
                name : objValue.name,
                price : objValue.price,
                description : objValue.description,
                status : objValue.status
            },
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then(res=>{
            setLoading(false)
            navigate("/course")
        })
    }

    return (
        <div>
            <Spin spinning={loading}>
            <h1>New Courses</h1>
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                onFinish={hadleOnFinish}
            >
                <Form.Item
                    label="Course name"
                    name="name"
                >
                    <Input placeholder="Course name" />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                >
                    <Input placeholder="Course price" />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                >
                    <TextArea placeholder="Description" />
                </Form.Item>

                <Form.Item
                    label="Statau"
                    name="status"
                >
                    <Select defaultValue={"1"}>
                        <Option value="1">Enabled</Option>
                        <Option value="0">Disabled</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 18,
                    }}
                >
                    <Space>
                        <Button type="primary" htmlType="submit" >Save</Button>
                        <Button style={{color:"green"}}>Save New</Button>
                        <Button onClick={handleCancel}>Cancel</Button>
                    </Space>
                </Form.Item>
            </Form>
            </Spin>
        </div>
    )
}

export default CourseFormScreen;