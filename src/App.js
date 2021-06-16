import "./App.css";
import BlogComponent from "./BlogComponent";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blogs" component={BlogComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
