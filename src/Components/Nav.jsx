import React, { useContext } from 'react'
import { Productcontext } from '../Utils/Contex'
import { Link } from 'react-router-dom';

const Nav = () => {
  const [products] = useContext(Productcontext);
  let particular_category = products && products.reduce((acc,currentvalue)=>[...acc,currentvalue.category],[])
  particular_category = [...new Set(particular_category)]
  console.log(particular_category);
  
  const color=()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`;
  }

  return (
    <>
     <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
          <a
            className="py-3 px-5 border rounded border-blue-200 text-blue-300"
            href="/create"
          >
            Add new product
          </a>
          <hr className="my-3 w-[80%]" />
          <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
          <div className=" w-[80%] p-3 ">
            {
              particular_category.map((specificcategory,index)=>{
                return <Link key={index} to={`/?category=${specificcategory}`} className="flex items-center mb-3">
                <span style={{backgroundColor: color()}} className=" mr-2 rounded-full  w-[15px] h-[15px]"></span>
                {specificcategory}
              </Link> 
              })
            }
          </div>
        </nav>
    </>
  )
}

export default Nav