import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import { getAllData } from "./services/requests";
import { useEffect, useReducer } from "react";
import reducer from "./Reducer/reducer";
import Layout from "./Layout/Layout";
import HomePost from "./Pages/Home/HomePost";
import Home from "./Pages/Home/Home";
import HomeEdit from "./Pages/Home/HomeEdit";
import { STORE_URL, USERS_URL } from "./services/api";
import Users from "./Pages/Users/Users";
import UserEdit from "./Pages/Users/UserEdit";
import UserPost from "./Pages/Users/UserPost";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Detail from "./Pages/Home/Detail";
import UserDetail from "./Pages/Users/UserDetail";



export default function App() {
  const [state, dispatch] = useReducer(reducer,
    {
      store: [],
      search: [],
      users: [],
      searchUs: [],

    })

  
    
    useEffect(()=>{
   
     getAllData(STORE_URL).then((res)=>{
     
        dispatch({
          type: "SetStore",
          store: res,
        })
        dispatch({
          type: "SetSearch",
          search: res,
        })
        
     

      })
      getAllData(USERS_URL).then((res)=>{
        dispatch({
          type: "SetUsers",
          users: res,
        });
        dispatch({
          type: "SetSearchUs",
          searchUs: res, 
        });
      });
      

    },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home state = {state} dispatch={dispatch}/>} />
          <Route path="homeP" element={<HomePost/>} />
          <Route path="homeE" element={<HomeEdit state = {state} dispatch={dispatch} />} />
          <Route path="users" element={<Users state = {state} dispatch={dispatch} />} />
          <Route path="userE" element={<UserEdit state = {state} dispatch={dispatch} />} />
          <Route path="userP" element={<UserPost state = {state} dispatch={dispatch} />} />
          <Route path="dashboard" element={<Dashboard state = {state} dispatch={dispatch} />} />
          <Route path="login" element={<Login state = {state} dispatch={dispatch} />} />
          <Route path="signup" element={<SignUp state = {state} dispatch={dispatch} />} />
          <Route path="detail" element={<Detail state = {state} dispatch={dispatch} />} />
          <Route path="userdetail" element={<UserDetail state = {state} dispatch={dispatch} />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);