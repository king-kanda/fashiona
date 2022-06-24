import React, { useState ,useEffect } from 'react'

const Hooks = () => {

    const [count ,setCount ] =  useState(0) ;

    useEffect(() => {

        // use effect is simillar to componentdidmount  and componentwillunamont

        document.title = `You clicked ${count} times`;
    
    } );
    

  return (
    <div className='container'>
       <h2>
        This is a section for Hooks
       </h2>
        {/* hooks were introudced to eliminated stateless nature of functional components */}
        <div className="text-center">
            <h1>
                Count is {count}
            </h1>
            <button onClick={()=> setCount(count + 1)} className='bg-red-500 p-3 text-white rounded '>
                 add 
            </button>
            <button onClick={()=> setCount(count - 1)} className='bg-red-500 p-3 text-white rounded mx-2'>
                 sub
            </button>
        </div>
    </div>
  )
}

export default Hooks