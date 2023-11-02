import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaEllipsis } from "react-icons/fa6";
import db from "../../database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulereducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

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
            <li className="list-group-item border d-flex justify-content-between align-items-center p-3" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div className="flex-grow-1 me-2">
                    <input 
                        className="form-control mb-2" 
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        }
                        placeholder="Module Name"
                    />
                    <textarea 
                        className="form-control"
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        }
                        placeholder="Module Description"
                        rows="3" 
                    />
                </div>
                
                <button className="btn btn-primary" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                <button className="btn btn-secondary" onClick={() => dispatch(updateModule(module))}>Update</button>

            </li>

                <ul className="list-group">
                    {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <h3>{module.name}</h3>
                                    <p>{module.description}</p>
                                </div>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => dispatch(setModule(module))}>
                                    Edit
                                </button>
                                <button
                                    onClick={() => dispatch(deleteModule(module._id))}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </div>
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
