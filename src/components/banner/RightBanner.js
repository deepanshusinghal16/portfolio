import React from 'react'
import {bannerImg} from './../../assets/index';
export const RightBanner = () => {
  return (
    <div className='w-1/2  flex justify-end items-center'>
       <img src={bannerImg} alt="bannerImg" className='w-[450px] h-[580px] z-10' />
    </div>
  )
}
