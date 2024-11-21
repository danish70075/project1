import React from 'react'

const Danish = ({data}) => {
  return (
    <div className='h-full w-[100vw] flex  flex-wrap  gap-5 items-center justify-center'>
        {data.map((item)=>(

<div className='h-full w-[20vw] flex flex-col  gap-y-10   border-2 border-black rounded-3xl  bg-white'>
            
<div className=' w-[100%]  p-3 h-full bg-gray-400'>  <img className='w-40 h-40  mx-auto ' src={item.image} alt="" /></div>
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

export default Danish