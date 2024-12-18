import axios from "../Utils/Axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const Details = () => {
  const {id} = useParams();
  console.log(id);
  const [singleproduct,setsingleproduct] = useState(null);
  const handleparticularlink = async() =>{
    try {
      const {data} = await axios.get(`/products/${id}`);
      console.log(data);
      setsingleproduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleparticularlink();
  }, [])
  
  return singleproduct ? (
    <>
      <div className="w-[70%] flex justify-between m-auto h-full p-[8%]">
        <img
          className="object-contain h-[80%] w-[40%]"
          src={`${singleproduct.image}`}
          alt=""
        />
        <div className="content w-[50%]">
          <h1 className="text-3xl">{singleproduct.title}</h1>
          <h2 className="my-2 text-red-500 font-bold">$ {singleproduct.price}</h2>
          <h3 className="my-2">{singleproduct.category}</h3>
          <p className="mb-8">{singleproduct.description}</p>
          <Link  className="mr-5 py-3 px-5 border rounded border-red-200 text-red-300">Edit</Link>
          <Link  className="py-3 px-5 border rounded border-blue-200 text-blue-300">Delete</Link>
        </div>
      </div>
    </>
  ):( 
    <Loading />
  );
};

export default Details;
