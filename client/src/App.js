import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PageRender from "./PageRender";
import { refreshToken } from "./redux/actions/authAction";
import Home from "./pages/home";
import Login from "./pages/login";
import Alert from "./components/alert/Alert";
import Header from "./components/header/Header";
import Register from "./pages/register";
import "./styles/global.css";
import { GLOBALTYPES } from "./redux/actions/globalTypes";
function App() {
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    //passing the id and page as a parameter and rendering

    //pagerender component use useParams()
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          {auth.token && <Header />}
          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
