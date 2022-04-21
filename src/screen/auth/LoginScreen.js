import React , {useState} from "react";
import "./LoginScreen.css";
import {useNavigate} from 'react-router-dom';
const LoginScreen = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = () => {
        var username_tmp = "sa";
        var password_tmp = "123";
        if(username === username_tmp && password === password_tmp){
            navigate("/");
        }else{
            console.log("Username or password incorrect!");
        }
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