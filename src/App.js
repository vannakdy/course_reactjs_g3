import React  from "react";
import "./App.css"
import HomeScreen from "./screen/home/HomeScreen"
import StudentScreen from "./screen/student/StudentScreen"
import TeacherScreen from "./screen/teacher/TeacherScreen";
import CourseScreen from "./screen/course/CourseScreen";
import LoginScreen from "./screen/auth/LoginScreen";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

const App = () => {
  const is_login = localStorage.getItem("is_login");
  const handleLoginOut = () => {
    localStorage.setItem("is_login","false");
    window.location.href = "/login"
  }
  return (
    <BrowserRouter>
      {is_login == "true" ?
       <div className="menu_main">
         <Link className="menu_item" to="/">Home</Link>
         <Link className="menu_item" to="/course">Course</Link>
         <Link className="menu_item" to="/student">Student</Link>
         <Link className="menu_item" to="/teacher">Teacher</Link>
         <Link className="menu_item" to="/login" onClick={handleLoginOut}>logout</Link>
      </div>
      :
      <div className="menu_main">
         <Link className="menu_item" to="/login">Brand Name</Link>
      </div>
    }
     <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/student" element={ <StudentScreen/>}/>
        <Route path="/teacher" element={<TeacherScreen/>}/>
        <Route path="/course" element={<CourseScreen/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="*" element={<h1>Route Not Found</h1>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App;