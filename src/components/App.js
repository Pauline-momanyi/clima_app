import React, {useState, useEffect} from "react";
import { Switch, Route} from "react-router-dom";
import Nav from "./layout/Nav";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp"
import Users from "./layout/Users";
import QuestionForm from "./layout/QuestionForm";
import Main from "./dashboard/Main";
import Footer from "./layout/Footer";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/fbConfig'
import FbFetch from "./FbFetch";

function App() {
  const [authorized, setAuthorized] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
      onAuthStateChanged(auth, (currentUser)=>{
        setLoading(false)
          setUser(currentUser)
      })
  },[])  

  return (
    <>
        <Nav/>
        <FbFetch/>
        <Switch>
            <Route  path='/signin' exact component={SignIn}/>
            <Route exact path='/signup'><SignUp user={user}/></Route>
            <Route  path='/users' exact component={Users}/>
            <Route exact path='/post' component={QuestionForm}/>                   
            <Route exact path='/'><Main user={user} loading={loading}/></Route>        
        </Switch>
        <Footer/>     
    </>
  );
}

export default App;
