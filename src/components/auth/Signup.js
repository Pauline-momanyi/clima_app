import React, { useState } from 'react'
import UserSignup from './UserSignup'
import NurseSignup from './NurseSignup'

function Signup({user}) {
    // const [log, setLog] = useState("")
    const [role, setRole] = useState("")

    const [formData, setFormData] = useState({
        email:"",
        name:"",
        password:""
    })

    function handleRole(e){
        setRole(e.target.value)
      }

    // function handleChange(e){
    //     setFormData({...formData, [e.target.id]:e.target.value})
    // } 

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
            <button className='' type='submit'>OK</button>
            <br />
            <hr />
            <br />
           
        </form>
        {role === "user"? <UserSignup/>:<NurseSignup/>}
        {/* <NurseSignup/> */}
        {/* <UserSignup/> */}


        {/* <p>{log? log: "invalid details"}</p> */}

        <p>Already have an account?</p>
            <button  className="bg-slate-primary hover:bg-blue-700 text-white font-bold py-2 px-4  my-2 rounded focus:outline-none focus:shadow-outline">
                    Sign In
            </button>
    </div>
  )
}

export default Signup