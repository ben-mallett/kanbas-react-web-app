import { Link } from "react-router-dom";
import db from "../../database";
import "../kanbas_main_nav/kanbas_nav.css";
import "./secondary_nav.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div style={{marginLeft: "150px"}}>
        <div className="row wd-header pt-3" style={{width: "100pc"}}>
            <h2>Dashboard</h2>
            <hr/>
        </div>
        <div class="row">
            <h3 className="wd-subtitle">Published Courses ({courses.length})</h3>
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
                    </div>))}
            </div>
        </div>
    </div>
  );
}
export default Dashboard;