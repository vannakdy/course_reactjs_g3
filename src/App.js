import React  from "react";
import "./App.css"
import HomeScreen from "./screen/home/HomeScreen"
import StudentScreen from "./screen/student/StudentScreen"
import TeacherScreen from "./screen/teacher/TeacherScreen";
import CourseScreen from "./screen/course/CourseScreen";
import LoginScreen from "./screen/auth/LoginScreen";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {Dropdown,Space,Menu, Button} from "antd";
import {DownOutlined,UserOutlined,LoginOutlined,SettingFilled} from "@ant-design/icons"
import CourseFormScreen from "./screen/course/CourseFormScreen";
import Header from "./component/header/Header";
import Footer from "./component/header/Footer";

const App = () => {
  

  

  return (
    <BrowserRouter>
    <div style={{padding:20}}>
      <Header />
        <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/student" element={ <StudentScreen/>}/>
            <Route path="/teacher" element={<TeacherScreen/>}/>
            <Route path="/course" element={<CourseScreen/>}/>
            <Route path="/course/create" element={<CourseFormScreen/>}/>
            <Route path="/course/create/:id" element={<CourseFormScreen/>}/>
            
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="*" element={<h1>Route Not Found</h1>}/>
        </Routes>
      <Footer/>
    </div>

    </BrowserRouter>
  )
}

export default App;