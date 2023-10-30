import { Link, useLocation } from "react-router-dom";
import 
{ FaGauge, 
  FaUser, 
  FaBook, 
  FaCalendarDays, 
  FaEnvelope, 
  FaClock, 
  FaRobot, 
  FaRightFromBracket, 
  FaCircleQuestion,} from "react-icons/fa6";
import "./kanbas_nav.css";

function KanbasNavigation() {

  const links = [
    {
      name: "Account",
      icon: (<FaUser size={30} style={{color: "lightgray", border: "1px solid black", borderRadius: "100pc", padding: "3px"}}/>),
    },
    {
      name: "Dashboard",
      icon: (<FaGauge size={30}/>),
    },
    {
      name: "Courses",
      icon: (<FaBook size={30}/>),
    },
    {
      name: "Calendar",
      icon: (<FaCalendarDays size={30}/>),
    },
    {
      name: "Inbox",
      icon: (<FaEnvelope size={30}/>),
    },
    {
      name: "History",
      icon: (<FaClock size={30}/>),
    },
    {
      name: "Studio",
      icon: (<FaRobot size={30}/>),
    },
    {
      name: "Commons",
      icon: (<FaRightFromBracket size={30}/>),
    },
    {
      name: "Help",
      icon: (<FaCircleQuestion size={30}/>),
    },
  ];
  const { pathname } = useLocation();

  return (
      <div className="list-group wd-main-nav fixed-top" style={{ width: 110, height: "100pc" }}>
      <img size={30} className="list-group-item list=-group-item-action" src="../../../nu_wordmark.png" href="#" alt="Northeastern University Logo"/>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/kanbas/${link.name.toLowerCase()}`}
          className={`list-group-item list-group-item-action ${pathname.includes(link.name.toLowerCase()) && "active"}`}>
          <div className="wd-nav-element" style={{fontSize: "1.25em"}}>
            {link.icon}
            <span>{link.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;