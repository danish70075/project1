import React from 'react'

const Responsive1 = () => {
  return (
    <div className='w-full h-screen flex lg:flex-row flex-col bg-red-400 items-center justify-center gap-5'>
        <div className='lg:w-[40%] bg-purple-500 w-[90%] '>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'/>


        </div>
        <div className='lg:w-[40%] bg-slate-600 w-[90%]'>

            <img src='https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk='/>
        </div>




    </div>
  )
}

export default Responsive1