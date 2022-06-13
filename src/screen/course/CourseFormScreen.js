import React , {useState,useEffect}  from "react";
import {
    Form,
    Input,
    Select,
    Button,
    Space,
    Spin,
} from "antd";
import {useNavigate,useParams} from "react-router-dom";
import {fetchData} from "../../helpler"

const {TextArea} = Input
const {Option} = Select



const CourseFormScreen = () => {
    const param = useParams();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)

    const  [form] = Form.useForm();

    useEffect(()=>{
        if(param.id != undefined){
            getCourseById()
        }
    },[])


    const getCourseById = () => {
        setLoading(true)
        fetchData("api/courses/"+param.id,{},"GET").then(res=>{
            var data = res.data[0]
            form.setFieldsValue({
                name : data.name,
                price : data.price,
                description : data.description,
                status : data.status,
            })
            setLoading(false)
        })
        // axios({
        //     method : "GET",
        //     url : "https://nitc.cleverapps.io/api/courses/"+param.id,
        //     data  : {
        //     },
        //     headers : {
        //         Authorization : `Bearer ${token}`
        //     }
        // }).then(res=>{
        //     console.log(res)
        //     var data = res.data.data[0]
        //     form.setFieldsValue({
        //         name : data.name,
        //         price : data.price,
        //         description : data.description,
        //         status : data.status,
        //     })
        //     setLoading(false)
        // })
    }

    const handleCancel = () => {
        navigate("/course")
    }   

    const hadleOnFinish = (objValue) => {
        setLoading(true)
        var methode = "POST";
        var course_id = null;
        if(param.id != undefined){
            methode = "PUT";
            course_id = param.id
        }
        var paramData = {
            course_id : course_id,
            name : objValue.name,
            price : objValue.price,
            description : objValue.description,
            status : objValue.status+""
        }
        fetchData("api/courses",paramData,methode).then(res=>{
            setLoading(false)
            navigate("/course")
        })
        // axios({
        //     method : methode,
        //     url : "https://nitc.cleverapps.io/api/courses",
        //     data  : {
        //         course_id : course_id,
        //         name : objValue.name,
        //         price : objValue.price,
        //         description : objValue.description,
        //         status : objValue.status+""
        //     },
        //     headers : {
        //         Authorization : `Bearer ${token}`
        //     }
        // }).then(res=>{
            
        // })
    }

    return (
        <div>
            <Spin spinning={loading}>
            <h1>{param.id == undefined ? "NEW" : "Update"} Courses</h1>
            <Form
                form={form}
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
                    rules={[
                        {
                            required : true,
                            message : "Please fill in course name!"
                        }
                    ]}
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
                    <Select defaultValue={1}>
                        <Option value={1}>Enabled</Option>
                        <Option value={0}>Disabled</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 18,
                    }}
                >
                    <Space>
                        <Button type="primary" htmlType="submit" >{param.id == undefined ? "Save" : "Update"}</Button>
                        {/* <Button style={{color:"green"}}>Save New</Button> */}
                        <Button onClick={handleCancel}>Cancel</Button>
                    </Space>
                </Form.Item>
            </Form>
            </Spin>
        </div>
    )
}

export default CourseFormScreen;