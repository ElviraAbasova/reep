import React, { useRef, useState } from "react";
import { postData } from "../../services/requests";
import { USERS_URL } from "../../services/api";

const UserPost = ({state, dispatch}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [gender, setGender] = useState("male");

  const name = useRef();
  const surname = useRef();
  const userName = useRef();
  const password = useRef();
  const email = useRef();
  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth() + 1; 
  const day = date.getDate();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();




  const handlePost = async (e) => {
    e.preventDefault();
    const obj = {
      id: String(state.users.length+1),
      name: name.current.value,
      surname: surname.current.value,
      userName: userName.current.value,
      password: password.current.value,
      date: `${day}-${month}-${year} ${hours}:${minute}:${second} `,
      gender,
      isAdmin,
      email: email.current.value,
      balance: 0
    };

    postData(USERS_URL, obj);
    name.current.value = "";
    surname.current.value = "";
    userName.current.value = "";
    password.current.value = "";
    email.current.value = "";
    setGender("");
    setIsAdmin("");

  };
  return (
    <form className=" pt-6 max-w-sm mx-auto" onSubmit={(e) => handlePost(e)}>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
        required
          ref={name}
          type="text"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Surname
        </label>
        <input
        required

          ref={surname}
          type="text"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
        
          ref={email}
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          userName
        </label>
        <input
        
          ref={userName}
          type="text"
          id="repeat-password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          ref={password}
          type="text"
          id="repeat-password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Gender
        </label>
        <div className="flex items-center">
          <input
        required

            type="radio"
            id="male"
            name="gender"
            checked={gender === "male"}
            onChange={() => setGender("Male")}
            className="mr-2"
          />
          <label htmlFor="male" className="text-sm">
            Male
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
        required

            type="radio"
            id="female"
            name="gender"
            checked={gender === "Female"}
            onChange={() => setGender("Female")}
            className="mr-2"
          />
          <label htmlFor="female" className="text-sm">
            Female
          </label>
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="admin"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Admin
        </label>
        <select
          id="admin"
          name="admin"
          value={isAdmin}
          onChange={(e) => setIsAdmin(e.target.value == "true")}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        >
          <option value="false">User</option>
          <option value="true">Admin</option>
        </select>
      </div>

      <button
        type="submit"
        className="text-white bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Post
      </button>
    </form>
  );
};

export default UserPost;
