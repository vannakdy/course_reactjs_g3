import React , {useState} from "react";
import "./LoginScreen.css";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const LoginScreen = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

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



        // localStorage.setItem("data","dara sok");
        // var data = localStorage.getItem("data"); // get data by key
        // localStorage.removeItem("x") remove by key
        // localStorage.clear();
        // console.log(data);
       
        

        // var param = {
        //     "username" : "sa",
        //     "passsword" : "1234",
        // }
        // post("api/login",param).then(res=>{
        //     if(res == true){
        //         navigate("/");
        //     }else{
                
        //     }
        // })
        
    }

    return (
        <div className="contain_login">
            <div className="frm_login">
                <div className="txt_login">Login</div>
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
                <button onClick={handleLogin} className="btn_login">Login</button>
            </div>
        </div>
    )
}
export default LoginScreen;