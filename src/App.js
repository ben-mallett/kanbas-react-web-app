import Labs from "./labs";
import HelloWorld from "./labs/a3/components/hello_world";
import Kanbas from "./kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Project from "./project";

function App() {
   return (
       <HashRouter>
           <Routes>
            <Route path="/"         element={<Navigate to="/Labs"/>}/>
            <Route path="/hello"    element={<HelloWorld/>}/>
            <Route path="/labs/*"   element={<Labs/>}/>
            <Route path="/kanbas/*" element={<Kanbas/>}/>
            <Route path="/project/*" element={<Project/>}/>
            </Routes>
       </HashRouter>
   );
}
export default App;