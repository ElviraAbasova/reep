import React, { useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import { USERS_URL } from '../../services/api';
import { patchById } from '../../services/requests';

const UserEdit = ({state, dispatch}) => {

    const location = useLocation();
   let navigate = useNavigate()
    const editId = location.state.id;
    const find = state.users.find(item => item.id === editId);
    const [formData, setFormData] = useState({  
      name: find.name,
      surname: find.surname,
      userName: find.userName,
      password: find.password,
      email: find.email,
      gender: find.gender,
      isAdmin: find.isAdmin,
    });
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await patchById(USERS_URL, editId, formData);
      navigate("/users")
      window.location.reload(); 
     
  };
  return (
    <form  className="pt-6 max-w-sm mx-auto" onSubmit={handleSubmit}>
    <div className="mb-5">
      <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Name
      </label>
      <input
        value={formData.name}
        type="text"
        id="companyName"
        name="companyName"
        onChange={(e)=> setFormData({ ...formData, name: e.target.value })}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />
    </div>
    <div className="mb-5">
      <label htmlFor="contactName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Surname
      </label>
      <input
        value={formData.surname}
        type="text"
        id="contactName"
        name="contactName"
        onChange={(e)=> setFormData({ ...formData, surname: e.target.value })}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required=""
      />
    </div>
    <div className="mb-5">
      <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        userName
      </label>
      <input
        value={formData.userName}
        type="text"
        id="city"
        name="city"
        onChange={(e)=> setFormData({ ...formData, userName: e.target.value })}
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required=""
      />
    </div>
    <div className="mb-5">
      <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Password
      </label>
      <input
        value={formData.password}
        type="text"
        id="city"
        name="city"
        onChange={(e)=> setFormData({ ...formData, password: e.target.value })}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required=""
      />
    </div>
    <div className="mb-5">
      <label htmlFor="region" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Email
      </label>
      <input
        value={formData.email}
        type="email"
        id="region"
        name="region"
        onChange={(e)=> setFormData({ ...formData, email: e.target.value })}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required=""
      />
    </div>
    <div className="mb-5">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Gender
  </label>
  <div className="flex items-center">
    <input
      type="radio"
      id="male"
      name="gender"
      value="Male"
      checked={formData.gender === "Male"}
      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
      className="mr-2"
    />
    <label htmlFor="male" className="text-sm">
      Male
    </label>
  </div>
  <div className="flex items-center mt-2">
    <input
      type="radio"
      id="female"
      name="gender"
      value="Female"
      checked={formData.gender === "Female"}
      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
      className="mr-2"
    />
    <label htmlFor="female" className="text-sm">
      Female
    </label>
  </div>
</div>


<div className="mb-5">
  <label htmlFor="admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Admin
  </label>
  <select
  id="admin"
  name="admin"
  value={formData.isAdmin ? "true" : "false"}
  onChange={(e) => setFormData({ ...formData, isAdmin: e.target.value === "true" })}
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
      Edit
    </button>
  </form>
  )
}

export default UserEdit