import React from 'react'
import './featured.css'
import { image2 ,image3 ,image4 } from '../../assets/images'

const Featured = () => {
  return (
     <div className='p-5'>
       <div className='container bg-stone-5  mx-auto p-0'>
          <div className='f-t'>
            <h1 className='text-center '>
              ENJoYING LIFE'S <br></br> GIFT
            </h1>
          </div>
          <div className=' flex items-center justify-around slider' id='image-slider'>
              <div className='sliding-image' id="image2">
                <img src={image2} alt="" srcset="" />
              </div>
              <div className='sliding-image' id="image3">
                <img src={image3} alt="" srcset="" />
              </div>
              <div className='sliding-image' id="image4">
                <img src={image4} alt="" srcset="" />
              </div>
          </div>
       </div>
     </div>
  )
}

export default Featured