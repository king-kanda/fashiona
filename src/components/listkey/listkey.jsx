import React from 'react'

const listkey = (props) => {
  
    const numbers = props.numbers
    const double = numbers.map((number)=> 
          <li key={number.toString()} >
             {number}
          </li>
          )

    return (
      <div className='container p-5'>listkey
  
      {/* <p> { doubles } </p> */}
        <ul>
            {double}
        </ul>
        <br />
      <span> {2*4444} </span>
  
      </div>
    
    )
  

  
}

export default listkey