import React from 'react'
import { useLocation } from 'react-router-dom';

const UserDetail = ({state,dispatch}) => {
    const location = useLocation();
    const detailId = location.state.id;
    const find = state.users.find(item => item.id === detailId);
  return (
    <div className="w-full h-screen bg-gray-100 px-10 pt-10">
    <div className="relative mt-16 mb-32 max-w-sm mx-auto mt-24">
      <div className="rounded overflow-hidden shadow-md bg-white">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-33">
            <img
              src="https://i.pinimg.com/474x/11/27/cc/1127cc05230f856fc393ce699a1a1451.jpg"
              className="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
        </div>
        <div className="px-6 mt-16">
          <h1 className="font-bold text-3xl text-center mb-1">{`${find.name} ${find.surname}`}</h1>
         <h2 className='text-indigo-500'>Username : <span className='text-black'>{find.userName}</span> </h2>
         <h2 className='text-indigo-500'>Email : <span className='text-black'>{find.email}</span></h2>
         <h2 className='text-indigo-500'>Password : <span className='text-black'>{find.password}</span> </h2>
         <h2 className='text-indigo-500'>Gender : <span className='text-black'>{find.gender}</span> </h2>
         <h2 className='text-indigo-500'>Admin or User : <span className='text-red-500'>{find.isAdmin ? "Admin" : "User"}</span> </h2>
         <h2 className='text-indigo-500'>Date register : <span className='text-black'>{find.date}</span> </h2>
         <h2 className='text-indigo-500'>Balance : <span className='text-black font-medium'>$ {find.balance}</span> </h2>



          <div className="w-full flex justify-center pt-5 pb-5">
            <a href="#" className="mx-5">
              <div aria-label="Github">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </a>
            <a href="#" className="mx-5">
              <div aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </div>
            </a>
            <a href="#" className="mx-5">
              <div aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default UserDetail