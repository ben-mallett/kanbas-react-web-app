import React from "react";
import ConditionalOutputIfElse
  from "./conditional_ifelse";
import ConditionalOutputInline
  from "./conditional_inline";
const ConditionalOutput = () => {
 return(
   <div>
     <ConditionalOutputIfElse/>
     <ConditionalOutputInline/>
   </div>
 );
};
export default ConditionalOutput;