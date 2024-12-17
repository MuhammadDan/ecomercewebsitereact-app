import React from 'react'

const Nav = () => {
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
          <ul className=" w-[80%] p-3 ">
            <li className="flex items-center mb-3">
              <span className="bg-blue-300 mr-2 rounded-full  w-[15px] h-[15px]"></span>
              Category 1
            </li>
            <li className="flex items-center mb-3">
              <span className="bg-blue-300 mr-2 rounded-full  w-[15px] h-[15px]"></span>
              Category 2
            </li>
            <li className="flex items-center mb-3">
              <span className="bg-blue-300 mr-2 rounded-full  w-[15px] h-[15px]"></span>
              Category 3
            </li>
            <li className="flex items-center mb-3">
              <span className="bg-blue-300 mr-2 rounded-full  w-[15px] h-[15px]"></span>
              Category 4
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Nav