import Courses from "./components/courses/courses";
import Dashboard from "./components/dashboard/dashboard";
import KanbasNavigation from "./components/kanbas_main_nav/kanbas_nav";
import {Routes, Route, Navigate } from "react-router-dom";

function Kanbas() {
   return(
      <div className="d-flex">
         <KanbasNavigation/>
         <div>
            <Routes>
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="Account" element={<h1>Account</h1>} />
               <Route path="Dashboard" element={<Dashboard/>} />
               <Route path="Courses/:courseId/*" element={<Courses/>} />
            </Routes>
         </div>
      </div>
   );
}
export default Kanbas