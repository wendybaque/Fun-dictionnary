import React, { useState } from 'react'

function Header() {
    const [value, setValue] = useState("");
    const handleInputChange = e => setValue(e.target.value);
    const handleSubmit = () => {
        setValue("");
    }
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="container mx-auto py-8">
            <h1 className='text-3xl font-bold text-center text-white drop-shadow-lg'>Fun Dictionnary</h1>
            <p className='text-center mt-1 mb-10 text-slate-200 text-lg'>Find definition for words</p>
                <div className="flex item-center justify-center mt-5">
                    <div className="flex shadow-md	">
                        <input type="text" placeholder='Search...' className='px-4 py-2 md:w-80 rounded-l-lg' onChange={handleInputChange}/>
                        <button type='button' className='bg-indigo-500 border-l px-4 py-2 text-white rounded-r-lg' onClick={handleSubmit}>Search</button>
                    </div>
                </div>
                <h3 className='text-slate-200 text-center mt-4'>Result for : <span className='text-white font-bold'>Happy</span></h3>
        </div>
    </div>
  )
}

export default Header