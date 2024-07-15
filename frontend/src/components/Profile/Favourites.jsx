import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const Favourites = () => {
  const [FavouritesBooks, setFavouritesBooks] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-favourite-books",
        { headers },
        {}
      );
      console.log(response.data.data);
      setFavouritesBooks(response.data.data);
    };
    fetch();
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 ">
        {FavouritesBooks &&
          FavouritesBooks.map((items, i) => (
            <div key={i} >
              <BookCard data={items} favourite={true} />
            </div>
          ))}
      </div>
      {FavouritesBooks && FavouritesBooks.length === 0 && (
        <div className="text-5xl font-semibold text-zinc-500 flex  flex-col items-center justify-center w-full h-[100%]  ">
          No Favourite Books
          <img src="https://cdn-icons-png.freepik.com/256/10218/10218522.png?semt=ais_hybrid" alt="" className="h-[20vh] mb-8" />
        </div>
       
        )}
        
    </>
  )
};

export default Favourites
