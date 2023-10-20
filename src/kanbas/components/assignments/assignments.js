import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../database";
import { FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import "../kanbas_main_nav/kanbas_nav.css";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  console.log(courseAssignments);
  return (
    <div style={{width: "90pc"}}>
        <h2>Assignments for {courseId}</h2>
        <div className="course-utility-button-container">
            <input className="form-control" style={{width: "25em", marginRight: "auto"}} placeholder="Search for assignments"/>
            <button type="button" className="btn btn-secondary">Group</button>
            <button type="button" className="btn btn-danger">Module</button>
            <a href="/kanbas/assignments/edit.html">
                <button type="button" class="btn btn-secondary">
                    <FaEllipsisVertical/>
                </button>
            </a>
        </div> 
        <hr/>
      <div className="list-group wd-module">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            <div className="wd-assignment-row">
                {/* <i class="fa-solid fa-chevron-down" style="color: #666 !important;"></i> */}
                <span>{assignment.title}</span>
                <span className="rounded-40 wd-grade-option">40% of Total</span>
                <div className="wd-assignment-options">
                    <FaPlus/>
                    <FaEllipsisVertical/>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;