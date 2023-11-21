import EncodingParametersInURLs from "./encodingparams";
import WorkingWithObjects from "./workingwithobjects";
import WorkWithArrays from "./workwarrs";

function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="http://localhost:4000/a5/welcome" className="list-group-item">
            Welcome
          </a>
          <EncodingParametersInURLs/>
          <WorkingWithObjects/>
          <WorkWithArrays/>
        </div>
      </div>
    );
  }
  export default Assignment5;