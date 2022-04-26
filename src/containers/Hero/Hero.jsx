import React from 'react'
import {gsap} from 'gsap'
import './hero.css'
import image1 from '../../assets/images/image1.jpeg'



const Hero = () => {
  return (
    <div className='bg-stone-50'>
      <div className=' container mx-auto hero  px-4'>
          {/* flex items align center justify space around */}
          <div className='flex items-center justify-around '>
            {/* first  text */}
            <div>
              <h1 className='hero-text1'>
                Bringing <br></br> Glam to Your <span className='space'> space .</span>
              </h1>
              <p className='hero-text2 text-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate molestiae commodi! Perspiciatis, quis voluptas! Est alias beatae quaerat asperiores?
              </p>
              <div className='btn-class'>
                    <button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-black rounded">
                          Don't click me
                    </button>
              </div>
            </div>
            {/* second image */}
            <div className='image-cont'>
              <img src={image1} alt="" srcset="" id='gsap-image' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero