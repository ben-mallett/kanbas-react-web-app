import Labs from "./labs";
import HelloWorld from "./labs/a3/components/hello_world";
import Kanbas from "./kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";

function App() {
   return (
       <HashRouter>
           <Routes>
            <Route path="/"         element={<Navigate to="/Labs"/>}/>
            <Route path="/hello"    element={<HelloWorld/>}/>
            <Route path="/labs/*"   element={<Labs/>}/>
            <Route path="/kanbas/*" element={<Kanbas/>}/>
            </Routes>
       </HashRouter>
   );
}
export default App;