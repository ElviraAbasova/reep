import React from 'react'

const SortUser = ({state,dispatch}) => {
    const SortAZ = ()=>{
        dispatch({
            type:"SetAZUs",
            users: state.users
        })
    }
    const SortZA = ()=>{
        dispatch({
            type:"SetZAUs",
            users: state.users
        })
      }
      const showAdmin = () =>{
        dispatch({
            type:"SetAdmins",
            users: state.users
        })
      }
  return (
    <div>
    <button
    onClick={()=>SortAZ()}
      type="button"
      className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Name: A-Z
    </button>
    <button
      onClick={()=>SortZA()}
      type="button"
      className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Name: Z-A
    </button>
    <button
     onClick={()=>showAdmin()}
        type="button"
        className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Show Admins
      </button>
    </div>
  )
}

export default SortUser