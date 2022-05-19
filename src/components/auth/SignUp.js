import React, {useState} from 'react'

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

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData);
    }

  return (
    <div className="flex flex-col justify-center items-center">
        
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
                    Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-slate-primary hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
    </div>
  )
}

export default SignUp