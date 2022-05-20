import React, {useEffect, useState} from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../config/fbConfig'

function SignUp() {
    const [formData, setFormData] = useState({
        fName:"",
        lName:"",
        email:"",
        password:""
    })


    function handleChange(e){
        setFormData({...formData, [e.target.id]:e.target.value})
    }

    const [user, setUser] = useState({})

    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
    },[])
   

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(formData);
        try{
            const user = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            console.log(user);
        }catch(error){
            console.log(error.message);
        }        
       
    }

    const logOut = async(e)=>{
        console.log('logged out');
        await signOut(auth)
    }
   

  return (
    <div className="flex flex-col justify-center items-center">
        <h4>User signed up as:</h4>
        {user? user.email:"Not logged in"}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    First Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fName" type="text" placeholder="first name" value={formData.fName} onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Last Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lName" type="text" placeholder="last name" value={formData.lName} onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" value={formData.password} onChange={handleChange}/>      
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
            <button className="hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={logOut}>
                    Sign Out
                </button>
            </div>
        </form>
    </div>
  )
}

export default SignUp