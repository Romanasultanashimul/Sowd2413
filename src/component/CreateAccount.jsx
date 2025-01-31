import React, { useState } from 'react';
import PageHeadings from './PageHedings';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase.config.js';

const CreateAccount = () => {

    const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

 
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setErrorMessage('Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setErrorMessage('');

  };

  if(password && email && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
  {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log("Sign In Complete");
   
    })
    .catch((error) => {
      const errorCode = error.code;
   
      
    });
  }

  return (
    <>
      <PageHeadings pagename={"Create New Account"} />

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
          <p className="text-center text-gray-600 text-sm">
            Please fill in the details to create an account.
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email Address
              </label>
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
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
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
              <label className="block text-sm font-medium text-gray-700" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input type="password" id="confirm-password"name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>
            {errorMessage && (
              <div className="text-red-600 text-sm mt-2">
                {errorMessage}
              </div>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-md hover:bg-pink-500 transition duration-200 ease-in-out"
            >
              Create Account
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an Account? 
              <a href="#" className="ml-1 text-pink-600 hover:text-pink-500">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
