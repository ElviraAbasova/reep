import React, { useState } from "react";

const Sort = ({state,dispatch}) => {
  
    const SortAZ = ()=>{
        dispatch({
            type:"SetAZ",
            store: state.store
        })
    }
    const SortZA = ()=>{
        dispatch({
            type:"SetZA",
            store: state.store
        })
    }
    const PriceHl = ()=>{
        dispatch({
            type:"PriceHl",
            store: state.store
        })
    }
    const PriceLh = ()=>{
        dispatch({
            type:"PriceLh",
            store: state.store
        })
    }
    const CountHl = ()=>{
        dispatch({
            type:"CountHl",
            store: state.store
        })
    }
    const CountLh = ()=>{
        dispatch({
            type:"CountLh",
            store: state.store
        })
    }
    const RatingHl = ()=>{
        dispatch({
            type:"RatingHl",
            store: state.store
        })
    }
    const RatingLh = ()=>{
        dispatch({
            type:"RatingLh",
            store: state.store
        })
    
     } 

     const [category, setCategory] = useState("");

     const handleCategory= (e) => {
       setCategory(e.target.value);
       dispatch({
         type: "SetCategory",
         category: e.target.value
       });
      }   
    
  return (
    <div>
      <button
      onClick={()=>SortAZ()}
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        title: A-Z
      </button>
      <button
        onClick={()=>SortZA()}
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        title: Z-A
      </button>
      <button
      onClick={()=> CountHl()}
        type="button"
        className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Count: High-low
      </button>
      <button
      onClick={()=> CountLh()}
        type="button"
        className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Count: Low-Hight
      </button>

      <button
      onClick={()=> PriceHl()}
        type="button"
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Price: High-low
      </button>
      <button
      onClick={()=> PriceLh()}
        type="button"
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Price: Low-hight
      </button>
     
      <button
       onClick={()=> RatingHl()}
        type="button"
        className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Rating: High-low
      </button>
      <button
       onClick={()=> RatingLh()}
        type="button"
        className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Rating: Low-high
      </button>
      <select
        value={category}
        onChange={handleCategory}
        id="category"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required=""
      >
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
    
    </div>
  );
};

export default Sort;
