import React from "react";

const Dashboard = ({state, dispatch}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
     
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        </div>
      </header>
      

      <main className="flex-1 bg-white rounded-t-6xl shadow-xl">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
            <div className="bg-gradient-to-r from-pink-300 to-pink-400 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white mb-4">Products</h2>
              <p className="text-gray-100 text-xl">Count: {state.store.length}</p>
            </div>
            
       
            <div className="bg-gradient-to-r from-purple-300 to-purple-400 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white mb-4">Users</h2>
              <p className="text-gray-100 text-xl"> Count: {state.users.length}</p>
            </div>
            
         
            <div className="bg-gradient-to-r from-indigo-300 to-indigo-400 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white mb-4">Admins</h2>
              <p className="text-gray-100 text-xl">Count: {state.users.filter(elem=>elem.isAdmin == true).length} </p>
            </div>
          </div>
        </div>
      </main>
 
    </div>
  );
};

export default Dashboard;
