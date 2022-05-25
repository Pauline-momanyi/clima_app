import React, { useEffect, useState } from "react";
import { AiFillStar } from 'react-icons/ai'
import { Redirect } from 'react-router-dom'
import { auth } from "../../config/fbConfig";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const [user, setUser] = useState();
  const [wrongCred, setWrongCred] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setWrongCred(error.message);
    }
  };
  if (!wrongCred && user) {
    return <Redirect to="/" />;
    console.log(user);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h3>Signed in as:</h3>
      {user ? user.email : "Not logged in"}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4"
        onSubmit={handleSignin}
      >
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
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
