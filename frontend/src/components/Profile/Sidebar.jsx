import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { authActions } from "../../Store/auth";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ data }) => {
  const dispatch=useDispatch()
  const history=useNavigate();
  const role=useSelector((state)=>state.auth.role)
  return (
    <div className="bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-auto lg:h-[100%] ">
      <div className="flex items-center flex-col justify-center">
        <img src={data.avatar} alt="" className="h-[12vh] bg-white rounded" />
        <p className="mt-3 text-xl text-zinc-100 font-semibold">
          {data.username}
        </p>
        <p className="mt-1 text-normal text-zinc-300">{data.email}</p>
        <div className="w-full mt-4 h-[1px] bg-zinc-500  lg:black "></div>
      </div>
      {role==="user" && (<div className=" mt-3 w-full flex-col items-center justify-center flex">
        <Link
          to="/profile"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Favourites
        </Link>
        <Link
          to="/profile/orderHistory"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Order History
        </Link>
        <Link
          to="/profile/settings"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Settings
        </Link>
      </div>)}
      {role=== "admin"
      && <div className=" mt-3 w-full flex-col items-center justify-center flex">
      <Link
        to="/profile"
        className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
      >
        All Orders
      </Link>
      <Link
        to="/profile/add-book"
        className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
      >
        Add Book
      </Link>
      
    </div>}
      <button
        className="bg-zinc-900 w-3/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center py-2 rounded hover:text-zinc-900 
      hover:bg-white transition-all duration-300" onClick={()=>{
        dispatch(authActions.logout());
        dispatch(authActions.changeRole("user"));
        localStorage.clear("id");
        localStorage.clear("token")
        localStorage.clear("role")
        history("/")
      }}
      >
        Log Out
        <LuLogOut className="ms-4" />
      </button>
    </div>
  );
};

export default Sidebar;
