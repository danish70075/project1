import React from 'react'
import { IoStar } from "react-icons/io5";

const HomeWork = ({data}) => {
  return (
    <div className='h-full py-5 w-[100%] flex flex-wrap gap-14 items-center justify-center bg-purple-400'>
        {data.map((item)=>(

            <div  className=' h-full  rounded-xl w-60 bg-white flex flex-col'>
                <div className=' h-full w-[100%] flex  rounded-xl border-black'><img className='h-40 w-full rounded-xl pt-2 pr-2 pl-2 ' src={item.image} alt="" /></div>
                <div className=' flex flex-col pl-3 gap-1'>
                  <div className='text-black  text-sm '>{item?.title}</div>
                  <div className='text-black text-sm'>price$:{item?.price}</div>
                 <div className='flex  gap-3'>





                 <div className='text-black text-sm'>{item?.rating?.rate}</div>
                 <div className=' '><IoStar className='text-yellow-400' /></div>
                 </div>
                  <div className='text-black text-sm'> category:{item?.category}</div>
                  <div className='text-black text-sm'> count:{item?.rating?.count}</div>
                </div>
            </div>
            

        ))}
    </div>
  )
}

export default HomeWork