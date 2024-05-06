import React, { useRef, useState } from "react";
import { postData } from "../../services/requests";
import { USERS_URL } from "../../services/api";
import { useNavigate } from "react-router-dom";

const SignUp = ({ state, dispatch }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [gender, setGender] = useState("male");

  const name = useRef();
  const surname = useRef();
  const userName = useRef();
  const password = useRef();
  const email = useRef();
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  let navigate= useNavigate()

  const handlePost = (e) => {
    e.preventDefault();
    const obj = {
      id: String(state.users.length + 1),
      name: name.current.value,
      surname: surname.current.value,
      userName: userName.current.value,
      password: password.current.value,
      date: `${day}-${month}-${year} ${hours}:${minute}:${second} `,
      gender,
      isAdmin,
      email: email.current.value,
      balance: 0,
    };
     let controlUs = state.users.find(user => user.userName === obj.userName)
     let controlEm = state.users.find(user => user.email === obj.email)

     if(controlUs){
      alert("Bele bir username artiq movcuddur")
     }else if(controlEm){
      alert("Bele bir email artiq movcuddur")

     }else{
      postData(USERS_URL, obj);
      name.current.value = "";
      surname.current.value = "";
      userName.current.value = "";
      password.current.value = "";
      email.current.value = "";
      setGender("");
      setIsAdmin("");
      navigate("/login");
      window.location.reload()

     }



 

  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <form onSubmit={(e) => handlePost(e)} className="mt-9 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          ref={name}
          type="text"
          id="name"
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
          Surname
        </label>
        <input
          ref={surname}
          type="text"
          id="surname"
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          ref={email}
          type="email"
          id="email"
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          ref={userName}
          type="text"
          id="userName"
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          ref={password}
          type="password"
          id="password"
          className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <div className="mt-1">
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              className="form-radio text-blue-500"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            <span className="ml-2 text-gray-900">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-pink-500"
              name="gender"
              value="female"
              checked={gender === "Female"}
              onChange={() => setGender("Female")}
            />
            <span className="ml-2 text-gray-900">Female</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="isAdmin" className="block text-sm font-medium text-gray-700">
          Role
        </label>
        <select
          id="isAdmin"
          name="isAdmin"
          value={isAdmin}
          onChange={(e) => setIsAdmin(e.target.value === "true")}
          className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required
        >
          <option value="false">User</option>
          <option value="true">Admin</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        
      >
        Sign Up
      </button>
    </form>
    </div>
  );
};

export default SignUp;
