import React, { useRef } from 'react'
import { postData } from '../../services/requests'
import { STORE_URL } from '../../services/api'

const HomePost = () => {
  const title = useRef()
  const src = useRef()
  const count = useRef()
  const rate= useRef()
  const price = useRef()
  const category = useRef()


  const handlePost = (e) => {
    e.preventDefault()
    let obj ={
      title: title.current.value,
      image: src.current.value,
      price: price.current.value,
      category: category.current.value,
      rating:{
        count: count.current.value,
        rate: rate.current.value,
  
      },
      comments: []
    }
 
    postData(STORE_URL,obj)
    title.current.value = ""
    src.current.value = ""
    price.current.value= ""
    rate.current.value = ""
    count.current.value = ""
    category.current.value = ""
    





    
  }
  
  
  return (
    <form className=" pt-6 max-w-sm mx-auto" onSubmit={(e)=>handlePost(e) }>
    <div className="mb-5">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       Title
      </label>
      <input ref={title}
        type="text"
        id="email"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
    </div>
    <div className="mb-5">
        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Category
        </label>
        <select
          ref={category}
          id="category"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        >
          <option value="men's clothing">men's Clothing</option>
          <option value="women's clothing">women's Clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select>
      </div>
    <div className="mb-5">
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       Image
      </label>
      <input
      
      ref={src}
        type="text"
        id="password"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
    </div>
    <div className="mb-5">
      <label
        htmlFor="text"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Price
      </label>
      <input
      ref={price}
        type="number"
        id="repeat-password"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required=""
      />
    </div>
    <div className="mb-5">
      <label
        htmlFor="region"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        count
      </label>
      <input
      ref={count}
        type="number"
        id="region"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
    </div>
    <div className="mb-5">
      <label
        htmlFor="text"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Rate
      </label>
      <input
      ref={rate}
        type="number"
        id="repeat-password"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
    </div>
  
    <button
      type="submit"
      className="text-white bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Post
    </button>
  </form>
  )
}

export default HomePost