import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Productcontext } from "../Utils/Contex";
import Loading from "./Loading";
import axios from "../Utils/Axios";
const Home = () => {
  const [products] = useContext(Productcontext)

  const {search} = useLocation();
  //console.log(search);
  const category = decodeURIComponent(search.split("=")[1]);
  //console.log(category);
   
  const [filteredproducts,setfilterproducts] = useState(null);

  const getproductcategory = async ()=>{
    try {
      const {data} = await axios.get(`/products/category/${category}`)
      setfilterproducts(data);
    //  console.log(data); 
      
    } catch (error) {
      console.log(error);
      
    }
  }
   useEffect(() => {
    if(!filteredproducts || category == 'undefined') setfilterproducts(products);
     if(category != 'undefined') getproductcategory();
   
   }, [category,products])
   
  //  console.log(filteredproducts);
   
  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-10 mt-[2%] flex flex-wrap gap-x-3 overflow-x-hidden overflow-y-auto">
        {
          filteredproducts && filteredproducts.map((item,index)=>{
            return <Link
            to={`/details/${item.id}`}
            key={products.id}
            className="card p-5 border shadow rounded w-[18%] h-[40vh] flex flex-col justify-center items-center"
          >
            <div
              className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  `url(${item.image})`,
              }}
            ></div>
            <h1>{item.title}</h1>
          </Link>
          })
        }
      </div>
    </>
    ):(<Loading />
  )
};

export default Home;
