import React from 'react'

const Hwcard = ({data}) => {
  return (
    <div className='h-full w-[100vw] justify-center items-center gap-5'>

      {data.map((item)=>(
        <div className='h-full w-full flex flex-col  gap-y-10   border-2 border-black rounded-lg  bg-white '>
            <div className="flex-col">
                <div className='text-white'>Danish</div>
            </div>
        </div>
      ))}

    </div>
  )
}

export default Hwcard