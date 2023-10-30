import React from "react";
import { useParams } from "react-router-dom";
import { FaEllipsis } from "react-icons/fa6";
import db from "../../database";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
         <div class="col col-sm-8">
            <div class="course-utility-button-container">
                <button type="button" class="btn btn-secondary">Collapse</button>
                <button type="button" class="btn btn-secondary">Progress</button>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="publishAllButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Publish All
                    </button>
                    <div class="dropdown-menu" aria-labelledby="publishAllButton">
                        <div class="dropdown-item">Publish some</div>
                        <div class="dropdown-item">Another action</div>
                        <div class="dropdown-item" >Something else here</div>
                    </div>
                </div>
                <button type="button" class="btn btn-danger">Module</button>
                <button type="button" class="btn btn-secondary">
                    <FaEllipsis/>
                </button>
            </div> 
            <hr/>
            <div>
                <ul className="list-group">
                    {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    </div>
  );
}

export default ModuleList;
