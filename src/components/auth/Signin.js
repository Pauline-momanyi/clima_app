import React, { useState, useContext } from "react";
import { AiFillStar } from 'react-icons/ai'
import { Redirect } from "react-router-dom";
import {LoginContext} from '../contexts/LoginContext'

function Signin() {
  const {uid, nid, setUid, setNid} = useContext(LoginContext)
 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [log, setLog] = useState("")
  const [role, setRole] = useState("")

  function handleRole(e){
    setRole(e.target.value)
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleSignIn(e){
    e.preventDefault()
    console.log(formData);
    console.log(role);
    // console.log(nid);
    if (role === "user"){
        fetch('https://climarubyapi.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res=> (res.json()))
        .then (data=>{
          console.log("headers",data)
          setUid(data.id)
        });
        
    }else{
        fetch('https://climarubyapi.herokuapp.com/nurse_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then (res=> (res.json()))
        .then (data=>{
            // console.log(data.message);
            console.log(data);
            setNid(data.id)
            // console.log(headers.message);
        })
    }
   
}

  if(uid){
    console.log(uid);
    localStorage.setItem('uid', JSON.stringify(uid));
   return <Redirect to='/patient'/>
 }else if(nid){
  console.log(nid);
  localStorage.setItem('nid', JSON.stringify(nid));
  return <Redirect to='/nurse'/>
 }else{
    // return <Redirect to='/signin'/>
  }

  console.log( JSON.parse(localStorage.getItem('uid')));

 
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{ uid? "id is " + typeof(uid) : "No id"}</p>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4"
        onSubmit={handleSignIn}
      >
        <div className="flex items-center justify-center mb-4">
            <input id="default-radio-1" type="radio" value="nurse" name="role" required onChange= {handleRole} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nurse</label>
        </div>
        <div className="flex items-center justify-center">
            <input id="default-radio-2" type="radio" value="user" name="role" onChange= {handleRole} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">User</label>
        </div>
        <br />
        <hr />
        <br />
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="italic text-sm text-gray-500 flex"><AiFillStar className="text-red-600"/>Password should be atleast 6 characters</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-slate-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-slate-primary hover:text-blue-800"
            href="/"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      {/* <button onClick={logged}>Go</button> */}
    </div>
  );
}

export default Signin;
