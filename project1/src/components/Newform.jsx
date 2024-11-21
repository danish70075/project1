import React from 'react'

const Newform = () => {




    return (
        <div className=" flex  justify-center h-[100vh] w-[100vw] bg-slate-500 py-[10%] ">
            <div className='flex flex-col  gap-5 items-center  justify-center bg-white h-full w-[40vw] '>
                <div className='flex  w-[80%] mx-auto'>
                    <label className=' text-sm text-red-500' htmlFor="FirstName">FirstName:</label>
                    <input
                        name='FirstName'
                        placeholder='name'

                        className='w-full border border-black outline-none' type="text" />
                </div>
                

                <div className='flex w-[80%] mx-auto '>
                    <label className='text-sm text-blue-500' htmlFor="seconName">secondName:</label>
                    <input
                        name='secondName'
                        placeholder='name'

                        className='w-full border border-black rounded-xl' type="text" />
                </div>
                <div className='flex  w-[80%] mx-auto'>
                    <label className='text-sm text-blue-500' htmlFor="lastName">lastName:</label>
                    <input
                        name='lastName'
                        placeholder='name'

                        className='w-full border border-black rounded-xl' type="text" />
                </div>
                <div className='flex '>
                    <label htmlFor="age">age:</label>
                    <select name="age" id="cars">
    <option >18</option>
    <option >19</option>
    <option >20</option>
    <option >21</option>
  </select>
                </div>
                <div className='flex '>
                    <label htmlFor="collegeName">male:</label>
                    <input type="radio" id="html" name='form'  value="HTML"/>


                </div>
                <div className='flex '>
                    <label htmlFor="collegeName">female:</label>
                    <input type="radio" id="html" name='form' value="HTML"/>


                </div>
                <div className='flex '>
                    <label htmlFor="courseName">courseName:</label>
                    <input
                        name='courseName'
                        

                        className='w-[20%]' type="checkbox" />
                </div>
                <div className='flex '>
                    <label htmlFor="universityName">universityName:</label>
                    <input
                        name='universityName'
                        placeholder='name'

                        className='w-[20%]' type="text" />
                </div>
                <div className='flex '>
                    <label htmlFor="cityName">cityName:</label>
                    <input
                        name='cityName'
                        placeholder='name'

                        className='w-[20%]' type="text" />
                </div>

            </div>



        </div>
    )
}

export default Newform