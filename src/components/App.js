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
import { db, auth } from '../config/fbConfig'
import QuestionDetails from "./dashboard/QuestionDetails";
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
      onAuthStateChanged(auth, (currentUser)=>{
        setLoading(false)
          setUser(currentUser)
      })
  },[])  
  // console.log(data);
  // console.log(user.email);
  // console.log(search);

  return (
    <>
        <Nav user={user} search={search} setSearch={setSearch}/>
        <Switch>
            <Route exact path='/signin'><SignIn user={user}/></Route>
            <Route exact path='/signup'><SignUp user={user}/></Route>
            <Route  path='/users' exact component={Users}/>
            <Route exact path='/post' component={QuestionForm}/>  
            <Route path='/question/:id'><QuestionDetails data={data} /></Route>                 
            <Route exact path='/'><Main user={user} loading={loading} data={data} setData={setData} search={search} setSearch={setSearch} /></Route>        
        </Switch>
        <Footer/>     
    </>
  );
}

export default App;
