import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeadings from './PageHedings';
import Footer from './Footer';
import Logos from './Logos';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.config.js';


const LogIn = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
    } else {
      // Submit form logic here
      console.log('Form submitted');
    }
  };
if (email && password && /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
{
  
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
  
  });
}


  return (
    <>
      <PageHeadings pagename={" My Account"} />   

      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
          <p className="text-center text-gray-600 text-sm">Please login using account detail below.</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>
            <div>
              <a href="#" className="text-sm text-pink-600 hover:text-pink-500">Forgot your password?</a>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-md hover:bg-pink-500 transition duration-200 ease-in-out"
            >
              Sign In
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an Account? 
              <a href="/CreateAccount" className="ml-1 text-pink-600 hover:text-pink-500">Create account</a>
            </p>
          </div>
        </div>
      </div>
      <Logos />
      <Footer />
    </>
  );
};

export default LogIn;
