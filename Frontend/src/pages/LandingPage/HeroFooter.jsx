import React from 'react'
import { logo } from '../../assets/images2'

const HeroFooter = () => {
  return (
    <div>
        <div className='flex justify-evenly items-center bg-[#D3D3D3] h-30 rounded-4xl  mx-6'>
            <div className='flex items-center justify-between'>
                <div className='rounded-full bg-[#E1E1FF] w-15 h-15 mr-5'>
                    <img src={logo} className='object contain rounded-full'/>
                </div>
                <div>
                    <p className='text-3xl' >Hello</p>
                    <p>mellow</p>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='rounded-full bg-[#E1E1FF] w-15 h-15 mr-5'>
                    <img src={logo} className='object contain rounded-full'/>
                </div>
                <div>
                    <p className='text-3xl' >Hello</p>
                    <p>mellow</p>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='rounded-full bg-[#E1E1FF] w-15 h-15 mr-5'>
                    <img src={logo} className='object contain rounded-full'/>
                </div>
                <div>
                    <p className='text-3xl' >Hello</p>
                    <p>mellow</p>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='rounded-full bg-[#E1E1FF] w-15 h-15 mr-5'>
                    <img src={logo} className='object contain rounded-full'/>
                </div>
                <div>
                    <p className='text-3xl' >Hello</p>
                    <p>mellow</p>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default HeroFooter