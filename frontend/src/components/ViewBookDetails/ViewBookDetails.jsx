import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const ViewBookDetails = () => {
  const { id } = useParams();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  const [Data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:1000/api/v1/get-book-by-id/${id}`
      );
      setData(response.data.data);
    };
    fetch();
  }, []);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  };
  const handleFavourite = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/add-book-to-favourite",
      {},
      { headers }
    );
    alert(response.data.message);
    navigate("all-books");
  };
  const handleCart = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/add-to-cart",
      {},
      { headers }
    );
    alert(response.data.message);
  };
  const DeleteBook = async () => {
    const response = await axios.delete(
      "http://localhost:1000/api/v1/delete-book",
      { headers }
    );
    alert(response.data.message);
  };

  return (
    <>
      {Data && (
        <div className="px-4 md:px-12 py-8 bg-zinc-900 flex gap-8 flex flex-col lg:flex-row items-start">
          <div className=" w-full lg:w-3/6  ">
            <div className="flex flex-col lg:flex-row justify-around p-12 bg-zinc-800 rounded ">
              <img
                src={Data.url}
                alt="/"
                className="md:h-[60vh] h-[50vh] lg:h-[70vh] rounded "
              />
              {isLoggedIn === true && role === "user" && (
                <div className="flex flex row  lg:flex-col items-between justify-between lg:justify-start mt-4 mt-0 ">
                  <button
                    className="bg-white rounded lg:rounded-full  lg:text-3xl p-3 mt-0  lg:mt-8 text-red-500 flex items-center justify-center"
                    onClick={handleFavourite}
                  >
                    <FaHeart />
                    <span className="ms-4 ml-3 block lg:hidden">
                      Favourites
                    </span>
                  </button>
                  <button
                    className="bg-white rounded  lg:rounded-full mt-0 lg:text-3xl p-3 md:mt-0 lg:mt-8 text-blue-500 flex items-center justify-center"
                    onClick={handleCart}
                  >
                    <FaShoppingCart />
                    <span className="ms-4 block lg:hidden">Add to cart</span>
                  </button>
                </div>
              )}
              {isLoggedIn === true && role === "admin" && (
                <div className="flex flex col lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0">
                  <Link
                    to={`/updateBook/${id}`}
                    className="bg-white rounded lg:rounded-full mt-8 text-3xl p-3 md:mt-0  lg:mt-8 flex items-center justify-center"
                  >
                    <FaEdit />
                    <span className="ms-4 block lg:hidden">Edit Book</span>
                  </Link>
                  <button
                    className="text-red-500  rounded  lg:rounded-full text-3xl p-3 mt-8 bg-white flex items-center justify-center"
                    onClick={DeleteBook}
                  >
                    <MdOutlineDelete />
                    <span className="ms-4 block lg:hidden">Delete Book</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="p-4 w-full lg:w-3/6">
            <h1 className="text-4xl text-zinc-300 font-semibold">
              {Data.title}
            </h1>
            <p className="text-zinc-400 mt-1">{Data.author}</p>
            <p className="text-zinc-500 ml-4 text-xl">{Data.desc}</p>
            <p className=" flex text-zinc-400 mt-4ms-center justify-start">
              <GrLanguage className="mt-1 mr-1" /> {Data.language}
            </p>
            <p className="text-zinc-100 mt-4 text-3xl font-semibold">
              ₹{Data.price}
            </p>
          </div>
        </div>
      )}
      {!Data && (
        <div className="h-screen bg-zinc-900 flex-items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default ViewBookDetails;
