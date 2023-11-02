import React from "react";
import Add from "./add";
import ClickEvent from "./clickevent";
import PassingDataOnEvent from "./passingdataonevent";
import PassingFunctions from "./passingfunctions";
import EventObject from "./eventobject";
import BooleanStateVariables from "./booleanstate";
import StringStateVariables from "./stringstate";
import DateStateVariable from "./datestate";
import ObjectStateVariable from "./objectstate";
import ArrayStateVariable from "./arraystate";
import ParentStateComponent from "./parentstate";
import ReduxExamples from "./redux";
import Counter from "./counter";

const Assignment4 = () => {
    const hello = () => {
        alert("Hello");
    }
 return(
   <>
     <h1>Assignment 4</h1>
     <ReduxExamples/>
     <br></br>
     <Add a={1} b={2}/>
     <ClickEvent/>
     <PassingDataOnEvent/>
     <PassingFunctions theFunction={hello}/>
     <EventObject/>
     <Counter/>
     <BooleanStateVariables/>
     <StringStateVariables/>
     <DateStateVariable/>
     <ObjectStateVariable/>
     <ArrayStateVariable/>
     <ParentStateComponent/>
   </>
 );
};
export default Assignment4;