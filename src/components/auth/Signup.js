import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

function Signup({user}) {
    const [log, setLog] = useState("")
    const [role, setRole] = useState("")

    const [formData, setFormData] = useState({
        email:"",
        name:"",
        age: "",
        sex: "",
        doctor_id: "",
        password:""
    })

    function handleRole(e){
        setRole(e.target.value)
      }

    function handleChange(e){
        setFormData({...formData, [e.target.id]:e.target.value})
    } 

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData); 
        console.log(role);
        if (role==='nurse'){
            console.log('nurseee')
        }else if (role === 'user'){
            console.log('userrrr')
        }else{
            console.log('none')
        }

        if (role === 'user'){
            fetch('http://localhost:9292/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then (res=>res.json())
            .then (data=>{
                setLog(data.message)
                console.log(data);
            })
        }else{
            fetch('http://localhost:9292/nurse_signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then (res=>res.json())
            .then (data=>{
                setLog(data.message)
                console.log(data.message);
                alert (log);
            })
        }       
    }

  return (
    <div className="flex flex-col justify-center items-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center mb-4">
                <input id="default-radio-1" type="radio" value="nurse" name="default-radio" onChange= {handleRole} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nurse</label>
            </div>
            <div className="flex items-center justify-center">
                <input id="default-radio-2" type="radio" value="user" name="default-radio" onChange= {handleRole} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">User</label>
            </div>
            <br />
            <hr />
            <br />
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    email
                </label>
                <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                    Age
                </label>
                <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="number" placeholder="age" value={formData.age} onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sex">
                    Gender(M/F)
                </label>
                <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sex" type="text" placeholder="M/F" value={formData.sex} onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctor_id">
                    Doctor's Id
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="doctor_id" type="number" placeholder="Enter your doctor's id for patients" value={formData.doctor_id} onChange={handleChange}/>
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

        <p>{log? "Invalid details, try again or..": "gh"}</p>

        <p>Already have an account?</p>
            <button  className="bg-slate-primary hover:bg-blue-700 text-white font-bold py-2 px-4  my-2 rounded focus:outline-none focus:shadow-outline">
                    Sign In
            </button>
    </div>
  )
}

export default Signup