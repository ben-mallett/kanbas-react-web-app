import db from "../../database";
import { Navigate, Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import "../kanbas_main_nav/kanbas_nav.css";
import "../dashboard/secondary_nav.css";
import CourseNavigation from "../course_nav/course_nav";
import ModuleList from "../module_list/module_list";
import Home from "../home/home";
import Assignments from "../assignments/assignments";
import AssignmentEditor from "../assignments/assignment_edit";


function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  return (
    <div style={{marginLeft: "150px"}}>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={pathname.substring(0, pathname.lastIndexOf("/"))}>{course.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{pathname.substring(pathname.lastIndexOf('/') + 1)}</li>
            </ol>
        </nav>
        <hr/>
        <CourseNavigation/>
        <div>
            <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
                left: "350px",
                top: "120px",
            }}
            >
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="home" element={<Home/>} />
                <Route path="modules" element={<ModuleList/>} />
                <Route path="assignments" element={<Assignments/>} />
                <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor/>}
                />
                <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
            </div>
        </div>
    </div>
  );
}
export default Courses;