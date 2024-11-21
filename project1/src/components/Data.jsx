import React, { useState } from 'react'






const Data = () => {
    
const[data,setData]=useState({firstName:"",lastName:""});





//arrow function
const changehandler=(event)=>{
    setData((prevData)=>({
        ...prevData,  //rest opreater
        [event.target.name]:event.target.value,
        
    }))

}
// function c(){ /// simple fuction

// }
const[newData,setNewData]=useState({})

    function submithandler(event){
        event.preventDefault();

     console.log(data)
      setNewData(data)
        



    }

    
    return (
        <div className=' w-full  flex flex-col  justify-center items-center h-full bg-green-300 gap-5 p-5'>

            <div className=' w-full  rounded-lg items-center flex justify-center'>
                <img className='w-[80%]  h-[20%] rounded-lg ' src='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg'/>
            </div>

            <form  className='lg:w-[80%] sm:w-[80%] w-[80%] h-[30vh] bg-purple-500 flex flex-col items-center justify-center p-5 rounded-2xl  gap-5'>
                <input type='text' onChange={changehandler} name='firstName' placeholder='firstname' className=' border-2 border-red-600  text-center  rounded-full outline-none  w-full' />
                
                <input type='text' onChange={changehandler} name='lastName'   placeholder='lastname' className=' border-2 border-red-600  text-center  rounded-full outline-none  w-full' />
                <button type='submit' onClick={submithandler}  className=' text-center bg-rose-600 rounded-lg py-2 px-3 font-semibold'>Submit</button>
            </form>
            
            <form  className='lg:w-[80%] sm:w-[80%] w-[80%]  h-[30vh] bg-purple-500 flex flex-col items-center justify-center p-5 rounded-2xl  gap-5'>
                <input type='text' onChange={changehandler} name='firstName' placeholder='firstname' className=' border-2 border-red-600  text-center  rounded-full outline-none  w-full' />
                
                <input type='text' onChange={changehandler} name='lastName'   placeholder='lastname' className=' border-2 border-red-600  text-center  rounded-full outline-none  w-full' />
                <button type='submit' onClick={submithandler}  className=' text-center bg-rose-600 rounded-lg py-2 px-3 font-semibold'>Submit</button>
            </form>

            <div className=' w-full  rounded-lg items-center flex justify-center'>
                <img className='w-[80%] sm:hidden flex lg:flex h-[20%] rounded-lg ' src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg"/>
            </div>

            {/* <p>fsufjxc</p> */}

            <div>{newData.firstName}</div>
            <div>{newData.lastName}</div>



           


        </div>
    )
}

export default Data