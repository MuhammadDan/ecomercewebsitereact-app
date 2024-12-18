import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Productcontext } from "../Utils/Contex";
import Loading from "./Loading";
const Home = () => {
  const [products] = useContext(Productcontext)
  return products ? (
    <>
      <Nav />
      <div className="w-[85%]  p-10 flex flex-wrap gap-x-3 overflow-x-hidden overflow-y-auto">
        {
          products.map((item,index)=>{
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
