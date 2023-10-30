import { Link, useParams, useLocation } from "react-router-dom";


function CourseNavigation() {
  const links = 
    [
        "Home", 
        "Modules", 
        "Piazza", 
        "Zoom", 
        "Assignments", 
        "Quizzes", 
        "Grades", 
        "People",
        "Panopto",
        "Discussions",
        "Announcements",
        "Pages",
        "Files",
        "Rubrics",
        "Outcomes",
        "Collaborations",
        "Syllabus",
        "Settings",
    ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div style={{width: "100pc"}}>
        <div className="list-group wd-secondary-nav" style={{width: "150px"}}>
        {links.map((link, index) => (
            <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item list-group-item-action ${pathname.includes(link) && "active"}`}>
            {link}
            </Link>
        ))}
        </div>
    </div>
  );
}


export default CourseNavigation;