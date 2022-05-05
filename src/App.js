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

const App = () => {
  const is_login = localStorage.getItem("is_login");
  const username = localStorage.getItem("username")
  const handleLoginOut = () => {
    localStorage.setItem("is_login","false");
    window.location.href = "/login"
  }
  const menu = (
    <Menu
      style={{width:200}}
      items={[
        { label: (
            <Link  to="/setting">
              Setting
            </Link>
          ),
          icon : <SettingFilled/>
        },
        { label: (
            <Link  to="/profile">
              Profile
            </Link>
          ),
          icon : <UserOutlined/>
        },
        { label: (
            <Link onClick={handleLoginOut} to="/login">
              Logout
            </Link>
          ),
          icon : <LoginOutlined/>,
          danger : true
        }
      ]}
    />
  );

  return (
    <BrowserRouter>
      {is_login == "true" ?
       <div className="menu_main">
         <div>
          {/* <Link className="menu_item" to="/">Home</Link> */}
          <Link className="menu_item" to="/course">Course</Link>
          <Link className="menu_item" to="/student">Student</Link>
          <Link className="menu_item" to="/teacher">Teacher</Link>
         </div>
         <div>
          <Dropdown overlay={menu}>
            <a className="menu_item" onClick={e => e.preventDefault()}>
              <Space><UserOutlined/>{username.toUpperCase()}<DownOutlined /></Space>
            </a>
          </Dropdown>
         </div>
      </div>
      :
      <div className="menu_main">
         <Link className="menu_item" to="/login">Brand Name</Link>
      </div>
    }
    <div style={{padding:20}}>
      <Routes >
          <Route path="/" element={<HomeScreen />}/>
          <Route path="/student" element={ <StudentScreen/>}/>
          <Route path="/teacher" element={<TeacherScreen/>}/>
          <Route path="/course" element={<CourseScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="*" element={<h1>Route Not Found</h1>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;