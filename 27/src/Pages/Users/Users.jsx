import React from "react";
import { deleteById, patchById} from "../../services/requests";
import { USERS_URL } from "../../services/api";
import { useNavigate } from "react-router-dom";
import Search from "../Home/Search";
import Sort from "../Home/Sort";
import SortUser from "./SortUser";

const Users = ({ state, dispatch }) => {
  let navigate = useNavigate();
  const delUser = (id) => {
    deleteById(USERS_URL, id);
    dispatch({
      type: "SetDelUser",
      id,
    });
  };
  
  const ChangeAdmin = (elem) => {
    const updatedUsers = state.searchUs.map(user => {
      if (user.id === elem.id) {
        return { ...user, isAdmin: !user.isAdmin };
      }
      return user;
    });
  
    dispatch({
      type: "SetSearchUs",
      searchUs: updatedUsers,
    });
    patchById(USERS_URL, elem.id, { isAdmin: !elem.isAdmin })
  };
  
  

  return (
    <div className="pt-6 bg-indigo-200 container mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
    <SortUser state={state} dispatch={dispatch}/>
      <Search state={state} dispatch={dispatch}/>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">Id</th>
            <th scope="col" className="px-6 py-3">
               Info 
            </th>
            <th scope="col" className="px-6 py-3">
              UserName
            </th>
            <th scope="col" className="px-6 py-3">
              Password
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Date-Register
            </th>
            <th scope="col" className="px-6 py-3">
              Admin or User
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {state.searchUs.map((elem) => {
            return (
              <tr key={elem.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4"> {elem.id}</td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.pinimg.com/474x/11/27/cc/1127cc05230f856fc393ce699a1a1451.jpg"
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{`${elem.name} ${elem.surname}`}</div>
                    <div className="font-normal text-gray-500">
                      {elem.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{elem.userName}</td>
                
                <td className="px-6 py-4">
                    {elem.password}
                </td>
                <td className="px-6 py-4">{elem.gender}</td>
                <td className="px-6 py-4">{elem.date}</td>
                <td className="text-green-500 px-6 py-4">{elem.isAdmin ? "Admin" : "User"} <button onClick={()=> ChangeAdmin(elem)} className="text-red-500 px-6 py-4">{elem.isAdmin ? "(Change as User)" : "(Change as Admin)"}</button></td>


                <td className="px-6 py-4">
                    <button onClick={()=> delUser(elem.id)}
                      type="button"
                      className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Delete
                    </button>
                 
                </td>
                <td className="px-6 py-4">
                <button
                onClick={() =>
                  navigate("/userE", { state: { id: elem.id } })
                }
                      type="button"
                      className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Edit
                    </button>
                </td>
                <td className="px-6 py-4">
                <button
                onClick={() =>
                  navigate("/userdetail", { state: { id: elem.id } })
                }
                      type="button"
                      className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Detail
                    </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
