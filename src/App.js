import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "../src/tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index
                 element={<Labs/>}/>
          <Route path="/hello"
                 element={<HelloWorld/>}/>
          {/* <Route path="/tuiter"
                 element={<Tuiter/>}/>
          <Route path="/explore"
                 element={<ExploreComponent/>}/> */}
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
        {/* <Routes> */}
          
      {/* </Routes> */}
      </div>
    </BrowserRouter>
  );
}
export default App;