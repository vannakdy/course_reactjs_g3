import React  from "react";
import {
    Form,
    Input,
    Select,
    Button,
    Space
} from "antd";

const {TextArea} = Input
const {Option} = Select


const CourseFormScreen = () => {
    const layout = {
        
    }
    return (
        <div>
            <h1>New Courses</h1>
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
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
                        <Button type="primary">Save</Button>
                        <Button style={{color:"green"}}>Save New</Button>
                        <Button>Cancel</Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CourseFormScreen;