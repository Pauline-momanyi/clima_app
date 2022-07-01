import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import About from "./About";
import Footer from "./Footer";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Patient from "./rolepage/Patient";
import Nurse from "./rolepage/Nurse";
import {LoginContext} from './contexts/LoginContext'
import Newentry from "./rolepage/Newentry";

function App() {
  const [uid, setUid] = useState("")
  const [nid, setNid] = useState("")
  return (
    <div>

      <Navbar />
      <LoginContext.Provider value={{uid, nid, setNid, setUid}}>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/patient">
            <Patient />
          </Route>
          <Route exact path="/nurse">
            <Nurse/>
          </Route>
          <Route exact path="/new_entry">
            <Newentry />
          </Route>
        </Switch>
      </LoginContext.Provider>
     
      <Footer />
    </div>
  );
}

export default App;
