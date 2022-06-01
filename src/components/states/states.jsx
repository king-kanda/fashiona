import React from 'react'
import './events.js'
import './states.css'

var date ;
function ticker(){
    date = new Date().toLocaleTimeString();
}
ticker()

function shoot(a){
    alert(a)
}

const states = () => {
  return (
    <div>
       <div className='container'>
        {/* this will serve as a basis for learning react states and lifecycles */}
        <div className="counter bg-grey-100 text-center">
            <h1 className="fw-bold text-center">
                Counter  { date }
            </h1>
            <div className="count-tick">
                00
            </div>
            <div className="btn-counter flex items-center justify-center p-5" >
           
                  <button onClick={ () => shoot ("hello")}  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      ADD
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Subtract
                  </button>
             
            </div>
        </div>
    </div>
    </div>
  )
}

export default states