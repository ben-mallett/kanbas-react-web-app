import { Link } from "react-router-dom";
import "../kanbas_main_nav/kanbas_nav.css";
import "./secondary_nav.css";
import { React } from "react";

function Dashboard(
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }
  ) {
    
    return (
        <div style={{marginLeft: "150px"}}>
            <div className="row wd-header pt-3" style={{width: "100pc"}}>
                <h2>Dashboard</h2>
                <hr/>
            </div>
            <h3 className="wd-subtitle">Published Courses ({courses.length})</h3>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <button className="btn btn-secondary" onClick={updateCourse} >
                Update
            </button>
            <button className="btn btn-primary" onClick={addNewCourse} >
                Add
            </button>


            <div className="row">
                <div className="wd-subtitle d-flex flex-row flex-wrap">
                    {courses.map((course) => (
                        <div className="card wd-card">
                            <img className="card-img-top" src="../../web_img.PNG" alt="Screenshot of dashboard page"/>
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="wd-card-link">
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p>{course.number}</p>
                                </div>
                            </Link>
                            <button
                                className="btn btn-secondary"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                            }}>
                                Edit Course
                            </button>

                            <button 
                                className="btn btn-primary"
                                onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                }}
                            >
                                Delete
                            </button>
                        </div>))}
                </div>
            </div>
        </div>
  );
}
export default Dashboard;