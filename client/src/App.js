import { BrowserRouter as Router, Route } from "react-router-dom";
import PageRender from "./PageRender";
function App() {
  return (
    //passing the id and page as a parameter and rendering
    //pagerender component use useParams()
    <Router>
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          <Route path="/:page" component={PageRender} />
          <Route path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
