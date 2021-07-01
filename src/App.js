import React, {Suspense,lazy,createContext} from 'react'
import "./App.css";
import BlogComponent from "./BlogComponent";
import HomePage from "./HomePage";
// import Mycomponent from "./Component/myComponent"
import ComponentA from "./Component/ComponentA"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Mycomponent = lazy(()=>import("./Component/myComponent"))
const FirstName = createContext()
const SecondName = createContext()

function App() {
  return (
   
    <Router>
      <div className="App">
        {/* <FirstName.Provider value={"reetika singh"}>
          <SecondName.Provider value={"chhotu"}>
              <ComponentA/>
          </SecondName.Provider>
        </FirstName.Provider> */}
        {/* <div>Another component</div>
        <Suspense fallback={<div>Loading....</div>}>
        <Mycomponent></Mycomponent>
        </Suspense> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blogs" component={BlogComponent} />
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
export {FirstName,SecondName}
