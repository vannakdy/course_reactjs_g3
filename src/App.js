import React  from "react";
import "./App.css"
import HomeScreen from "./screen/home/HomeScreen"
import StudentScreen from "./screen/student/StudentScreen"
import TeacherScreen from "./screen/teacher/TeacherScreen";
import CourseScreen from "./screen/course/CourseScreen";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="menu_main">
         {/* <Link className="menu_item" to="/">Home</Link> */}
         <Link className="menu_item" to="/student">Student</Link>
         <Link className="menu_item" to="/teacher">Teacher</Link>
         <Link className="menu_item" to="/course">Course</Link>
      </div>
     <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/student" element={ <StudentScreen/>}/>
        <Route path="/teacher" element={<TeacherScreen/>}/>
        <Route path="/course" element={<CourseScreen/>}/>
        <Route path="*" element={<h1>Route Not Found</h1>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App;