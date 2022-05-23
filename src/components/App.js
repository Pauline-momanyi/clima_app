import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Nav from "./layout/Nav";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp"
import Users from "./layout/Users";
import QuestionForm from "./layout/QuestionForm";
import Main from "./dashboard/Main";
import Footer from "./layout/Footer";

function App() {
  return (
    <Router >
      <div className="w-full">
        <Nav/>
        <Switch>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/> 
          <Route exact path='/users' component={Users}/>
          <Route exact path='/post' component={QuestionForm}/>                   
          <Route exact path='/'><Main authorized={true}/></Route>
        </Switch>
        <Footer/>
      </div>
     
    </Router>
  );
}

export default App;
