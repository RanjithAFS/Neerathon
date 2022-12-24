import { BrowserRouter as Router, Route } from "react-router-dom";
import PageRender from "./PageRender";
import Home from "./pages/home";
import Login from "./pages/login";
function App() {
  return (
    //passing the id and page as a parameter and rendering
    //pagerender component use useParams()
    <Router>
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          <Route exact path="/" component={Login} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
