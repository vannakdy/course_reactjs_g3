import React , {useState} from "react";
import "./LoginScreen.css";
import {useNavigate} from 'react-router-dom';
import {Button, Form,Input, Space , Spin} from "antd";
import {fetchData} from "../../helpler"
import axios from 'axios';
const LoginScreen = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false)

    const handleLogin = () => {

        axios({
            method: "POST",
            url: "https://nitc.cleverapps.io/api/auth/login",
            data:{
                "username" : username,
                "password" : password
            }
        }).then(response=>{
            var res = response.data;
            localStorage.setItem("accessToken" , res.accessToken);
            localStorage.setItem("permiision" , res.permiision);
            localStorage.setItem("refreshToken" , res.refreshToken);
            localStorage.setItem("username" , res.username);
            localStorage.setItem("is_login","true");
            window.location.href = "/course"
        })
        
    }

    const handleOnFinish = (objData) =>{
        var params = {
            "username" : objData.username,
            "password" : objData.password
        }
        setLoading(true)
        fetchData("api/auth/login",params,"POST").then(res=>{
            if(res){
                localStorage.setItem("accessToken" , res.accessToken);
                localStorage.setItem("permiision" , res.permiision);
                localStorage.setItem("refreshToken" , res.refreshToken);
                localStorage.setItem("username" , res.username);
                localStorage.setItem("is_login","true");
                window.location.href = "/course"
                setLoading(false)
            }
        })
    }

    return (
        <div className="contain_login">
            <div className="frm_login">
                <Spin spinning={loading}>
                    <Form
                    layout="vertical" 
                    onFinish={handleOnFinish}
                    >
                        <Form.Item
                            name={"username"}
                            label="Username"
                            rules={[
                                {
                                    required : true,
                                    message : "Please fill in username"
                                }
                            ]}
                        >
                            <Input 
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item
                            name={"password"}
                            label="Password"
                            rules={[
                                {
                                    required : true,
                                    message : "Please fill in password"
                                }
                            ]}
                        >
                            <Input.Password 
                                placeholder="Password"

                            />
                        </Form.Item>
                        <Form.Item>
                            <Space>
                                <Button htmlType="submit">Login</Button>
                                <Button >Register</Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Spin>

                {/* <div className="txt_login">Login</div>
                <input 
                    className="input"
                    placeholder="Username"
                    onChange={(event)=>setUsername(event.target.value)}
                /><br/>
                <input 
                    type={"password"}
                    className="input"
                    placeholder="Password"
                    onChange={(event)=>setPassword(event.target.value)}
                /><br/>
                <button onClick={handleLogin} className="btn_login">Login</button> */}
            </div>
        </div>
    )
}
export default LoginScreen;