import React from 'react'

const Forms = () => {



    function Firsthandler(event){
        console.log("firstName:", event.target.value)
    }

    function Lasthandler(event){
        console.log("Lasthandler:", event.target.value)
    }
  return (
    <div className='h-screen w-full flex items-center bg-black '>
    <div className=' bg-white w-[40%] h-[40%] mx-auto flex items-center justify-center '>
     <form className='gap-5 flex flex-col'>
         <input
         className=' border-2 border-black'
         placeholder='FirstName'
         onChange={Firsthandler}
         
         />
<input
         className=' border-2 border-black'
         placeholder='LastName'
         onChange={Lasthandler}
        
         />




     </form>


    </div>
 </div>
  )
}

export default Forms