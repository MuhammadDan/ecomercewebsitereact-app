import React from 'react'
import Nav from './Nav'
const Home = () => {
  return (
    <>
    <Nav />
     <div className="w-[85%]  p-10 flex flex-wrap gap-x-3 overflow-x-hidden overflow-y-auto">
          <div className="card p-5 border shadow rounded w-[18%] h-[40vh] flex flex-col justify-center items-center">
             <div className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}>
             </div>
             <h1>Laptop, hp laptop bag 32 inch</h1>
          </div>
        </div>
    </>
  )
}

export default Home