import React from 'react'
import Title from '../layouts/Title'
import Slider from "react-slick";
import { testimonialOne } from '../../assets';
import { testimonialTwo ,quote} from '../../assets';

const testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <section id="testimonial"
    className="w-full py-20   border-b-[1px]">
    <div className='flex justify-center items-center text-center'>
        <Title title="WHAT CLIENTS SAY" des="Testimonial"/>
    </div>
   
    <div className='max-w-6xl mx-auto '>
    <Slider {...settings}>
      <div className='w-full '>
        <div className='w-full h-[500px] flex justify-between'>
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center "> 
            <img src={testimonialOne} 
                 alt="textimonialOne" 
                 className='h-72 rounded-lg object-cover'/>
              <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>    
            </div>
            <div className='w-[60%] h-full flex flex-col justify-between'>
              <img src={quote} alt="quote" className='w-[20%]'/>
              <div className="w-full  h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne  "> 
              <div></div>
              <div></div>
              </div>
                   
            </div>
        </div>
      </div>
      {/* <div>
        <h3>2</h3>
      </div> */}
    
    </Slider>
    </div>
    </section>
  )
}

export default testimonial
