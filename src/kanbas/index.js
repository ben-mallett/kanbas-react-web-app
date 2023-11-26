import Courses from "./components/courses/courses";
import Dashboard from "./components/dashboard/dashboard";
import KanbasNavigation from "./components/kanbas_main_nav/kanbas_nav";
import {Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
   const [courses, setCourses] = useState([]);
   const URL = "http://localhost:4000/api/courses";
   const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
   };
   useEffect(() => {
      findAllCourses();
   }, []);

   const [course, setCourse] = useState({
      name: "New Course",      number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
   });
    
   const addNewCourse = async () => {
      const response = await axios.post(URL, course);
      setCourses([
        response.data,
        ...courses,
      ]);
      setCourse({ name: "" });
    };
  

    const deleteCourse = async (course) => {
      console.log(course)
      const response = await axios.delete(
        `${URL}/${course._id}`
      );
      setCourses(courses.filter(
        (c) => c._id !== course._id));
      console.log(courses)
    };
  

    const updateCourse = async () => {
      console.log(courses)
      const response = await axios.put(
         `${URL}/${course._id}`,
         course
      );
      setCourses(
      courses.map((c) => {
      if (c._id === course._id) {
         console.log(response.data)
         return response.data;
      }
         return c;
      })
      );
   };
  
   return(
      <Provider store={store}>
         <div className="d-flex">
            <KanbasNavigation/>
            <div>
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={
                     <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                     />
                  } />
                  <Route path="Courses/:courseId/*" element={
                     <Courses
                        courses={courses}
                     />
                  } />
               </Routes>
            </div>
         </div>
      </Provider>
   );
}
export default Kanbas