import "../App.css";
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Nav from "./layout/Nav";
import Try from "./Try";
import Header from "./dashboard/Header";
import Categories from "./dashboard/Categories";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp"
import QuestionList from "./dashboard/QuestionList";
import Main from "./dashboard/Main";

function App() {
  return (
    <Router>
      <Main/>
      <Switch>
        <Route exact path='/signin'><SignIn/></Route>
        <Route exact path='/signup'><SignUp/></Route>
      </Switch>
    </Router>
  );
}

export default App;
