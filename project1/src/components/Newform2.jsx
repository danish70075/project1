import React from 'react'

const Newform2 = () => {
    return (
        <div className='flex h-[100vh] w-[100vw] bg-slate-950 text-white' >
            <div className='flex-col  mx-auto my-auto  rounded-2xl h-[100vh] w-[30vw] bg-white'>
                <h1 className='text-center text-black   mt-2 font-bold text-xl'>Rajestration form</h1>
                <div className="flex-col ml-2">
                    <label className='text-black block test-base '>First Name*</label>
                    <input className='border border-gray-300 w-[22vw] mt-1 font-light ' placeholder='Enter First Name' type="text" />
                </div>
                <div className="flex-col ml-2 ">
                    <label className='text-black block text-base ' htmlFor="">Last Name*</label>
                    <input className='border text-black border-gray-300 w-[22vw] font-light ' placeholder='Last Name' type="text" />
                </div>
                <div className='flex-col ml-2 '>
                    <label className='text-black block text-base' htmlFor="">Enter Email*</label>
                    <input  className="border border-gray-300 w-[22vw] font-light" placeholder="Enter Email" type="text" />
                </div>
                <div className='flex-col ml-2 '>
                    <label className='text-black block text-base' htmlFor="">Contact*</label>
                    <input className='border border-gray-300 w-[22vw] font-light' placeholder='Enter Contact Number:' type="text" />
                </div>
                <div className='flex-col  ml-2'>
                    <label className='text-black' htmlFor="">Gender*</label>
                </div>
                <div className='flex w-full  justify-center gap-4'>
                    <input type="radio" />
                    <label className='text-black' id='html' value="html" name="form" htmlFor="Mail:">Mail:</label>
                    <input type="radio" />
                    <label className='text-black' id='html' value="html" name="form" htmlFor="Femail:">Femail:</label>
                    <input type="radio" />
                    <label className='text-black' id='html' value="html" name="form" htmlFor="Other:">Other:</label>
                </div>
                <div className='flex'>
                    <label className='text-black  ml-2' htmlFor="">Your First Subject</label>
                </div>
                 <div className='flex w-full justify-center gap-4'>
                    <input type="checkbox" />
                    <label className='text-black' htmlFor="" id="html" name="form" value="html">Enlish</label>
                    <input type="checkbox" />
                    <label className='text-black' htmlFor="" id="html" name="form" value="html">Maths</label>
                    <input type="checkbox" />
                    <label className='text-black' htmlFor="" id="html" name="form" value="html">Physics</label>
                 </div>
                 <div className='flex  ml-2'>
                    <label className='text-black' htmlFor="Upload Resume">Upload Resume*</label>
                 </div>
                 <div className='flex w-[28vw] border border-gray-300 mx-auto'>
                    <button className='text-black border border-black ml-5  mb-1'>Brouser...</button>
                    <input className=' text-black-500 ml-2' placeholder='No File Selecded' type="text" />
                 </div>
                 <div className='flex-col'>
                    <label className='text-black ml-2  block text-base' htmlFor="">Enter URL*</label>
                    <input className='border border-gray-300 w-[22vw] ml-2 rounded-lg' placeholder='Enter url' type="text" />
                 </div>
                 <div className='flex-col  ml-2'>
                    <label className='text-black' htmlFor="">select your choice</label>
                 </div>
                 <div className='flex-col'>
                    <input className='ml-2 border border-gray-300 w-[22vw] rounded-lg' placeholder='select your ans' type="text" />
                    <select name="" id="cars">
                        <option>English</option>
                        <option>Maths</option>
                        <option>Physics</option>
                    </select>
                    <div className='flex-col'>
                        <label className='text-black ml-2 block text-base' htmlFor="">About</label>
                        <input className='h-12 w-[28vw]  border border-gray-300 ml-3 pb-6 rounded-lg' placeholder='about your self' type="text" />
                    </div>
                    <div className='flex text-black  items-center justify-center gap-20'>
                        <button className=" rounded-lg pr-3 pl-3 text-black bg-green-500 border border-black mt-1 mb-1 text-sm">Submit</button>
                        <button className="text-black border rounded-lg pr-3 pl-3 border-black bg-green-500 mt-1 mb-1 text-sm ">Submit</button>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Newform2