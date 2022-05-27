import React, { useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { auth } from '../../config/fbConfig'
import { AiFillStar } from 'react-icons/ai'

function SignUp({user}) {
    const [formData, setFormData] = useState({
        fName:"",
        lName:"",
        email:"",
        password:""
    })


    function handleChange(e){
        setFormData({...formData, [e.target.id]:e.target.value})
    }
 

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(formData);
        try{
            const user = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            updateProfile(auth.currentUser, {displayName: formData.fName})
            console.log(user);
        }catch(error){
            console.log(error.message);            
        } 
        }
   
  
    let history = useHistory()
    function goToSignIn(){
        console.log('clicked');      
        <Redirect to='/signin'/>
        {history.push('/signin')}
    }

    if(user){
       console.log(user.email.split('')[0]);
        return <Redirect to='/'/>
      }

  return (
    <div className="flex flex-col justify-center items-center">
        {user? user.email:"Not logged in"}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    First Name
                </label>
                <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fName" type="text" placeholder="first name" value={formData.fName} onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Last Name
                </label>
                <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lName" type="text" placeholder="last name" value={formData.lName} onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    email
                </label>
                <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" value={formData.password} onChange={handleChange}/>  
                <p className="italic text-sm text-gray-500 flex"><AiFillStar className="text-red-600"/>Password should be atleast 6 characters</p>    
             </div>
            <div className="flex items-center justify-between">
                <button className="bg-slate-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign Up
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-slate-primary hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
            <div className="flex flex-col justify-center items-center">
            
            </div>
        </form>
        <p>Already have an account?</p>
            <button  className="bg-slate-primary hover:bg-blue-700 text-white font-bold py-2 px-4  my-2 rounded focus:outline-none focus:shadow-outline" onClick={goToSignIn}>
                    Sign In
            </button>
    </div>
  )
}

export default SignUp