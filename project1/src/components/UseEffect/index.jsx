import React, { useEffect, useRef, useState } from 'react'

const UseEffect1 = () => {
     const [count, setCount] = useState(5);


    // const count = useRef(5);

    // useEffect(() => {
    //     setTimeout(() => {
    
    //     setCount((count) => count + 1);
    //   }, 1000);
    // });



//     useEffect(()=>{
//         setTimeout(() => {

//         console.log("helow")
// }, 1000);



//     },)


const[start,setStart]= useState(false)


  useEffect(() => {
    
       start && setTimeout(() => {
    
        setCount((count) => count + 1);
      }, 1000);
   
    });





    
  return (
    <div className=' w-full flex flex-col items-center justify-center'>
    <div className='w-full  text-center text-9xl font-bold'>{count}</div>

    <button onClick={()=>setStart(true)} className=' px-6 py-3 bg-purple-500 rounded-3xl '>Start</button>
    <button onClick={()=>setStart(false)} className=' px-6 py-3 bg-red-500 rounded-3xl '>Stop</button>

    </div>
  )
}

export default UseEffect1