import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  const plus =()=>setCount((count) + 1)
  const minus =()=>{
    if(count==0){
      alert("You cant count less 0")
    }
    else{
      setCount((count) - 1)
    }
  }
  return (
    <div className='flex items-center justify-center gap-10 bg-gray-400 h-[450px] w-[500px] mx-auto shadow-lg '>
      <button onClick={plus} className='bg-blue-500 h-[60px] w-[90px] rounded text-2xl font-bold text-white p-2 text-center hover:bg-blue-700 hover:text-3xl'> + </button>
      <h1 className='text-2xl text-green-400 font-extrabold uppercase shadow rounded'>Count {count}</h1>
      <button onClick={minus} className='bg-blue-500 h-[60px] w-[90px] rounded text-2xl font-bold text-white p-2 text-center hover:bg-blue-700 hover:text-3xl' > - </button>
    </div>
  )
}

export default App
