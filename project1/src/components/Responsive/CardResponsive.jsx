import React from 'react'

const CardResponsive = ({data}) => {
  return (
    <div className='h-full w-[100vw]   gap-5 items-center justify-center grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
        {data.map((item)=>(

<div className='h-full w-full flex flex-col  gap-y-10   border-2 border-black rounded-lg  bg-white'>
            
<div className=' w-[100%]  p-3 h-full rounded-lg bg-gray-400'>  <img className='w-40 h-40  mx-auto ' src={item.image} alt="" /></div>
<div className='flex flex-col gap-y-3   '>
    
    <div className='text-black'>{item.title}</div>
    <div className='text-black ml-5'>price:${item.price}</div>
    <div className='text-black'>category {item.category}</div>
    <div className=''>rating {item.rating.rate}</div>
    <div className=''>  {item.rating.count}</div>
    <div className=''></div>
    <div className=''></div>
</div>
</div>



        ))}
    </div>
  )
}

export default CardResponsive