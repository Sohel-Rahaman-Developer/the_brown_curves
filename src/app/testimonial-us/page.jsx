import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Test() {
  return (
    <div className='w-full'>
        <div className='max-w-[1320px] mx-auto mt-5 border-t-2 border-gray'>
            <h2 className='pt-4 text-black rubik text-[26px] font-[600] text-center'>Testmonials</h2>
            <p className='pt-1 text-black rubik font-[500] text-[10px] text-center'>HOME / TESTMONIALS</p>
            <div className='mt-6 max-w-[1000px] mx-auto pb-8'>
                <div className='mx-2'>
                <img src='https://thebrowncurves.com/wp-content/uploads/2021/08/testimonial-slider.jpg'/>
                <p className='pt-5 rubik font-[600] text-[22px] italic text-center text-[#c85c5d]'>We work with our customers to design products <br/>
                that fit their spaces perfectly. Check out some of our customers’ <br/>
                favourites from their homes here!</p>
            </div>
            </div>
            <div className='max-w-[900px] mx-auto mt-5 lg:grid grid-cols-3 gap-[30px] pb-8'>
                <Testpart/>
                <Testpart/>
                <Testpart/>
                <Testpart/>
                <Testpart/>
                <Testpart/>
                <Testpart/>
                <Testpart/>
                <Testpart/>
                <Testpart/>
            </div>
        </div>
    </div>
  )
}






 function Testpart() {
  return (
    <div className='mt-3'>
        <div className='mx-2'>
        <img src='https://thebrowncurves.com/wp-content/uploads/2021/08/Frame-1782X782-canne-marble-side.jpg'/>
        <h6 className='pt-2 text-[16px] text-center rubik font-[600]'>CANNE BEDSIDE UNIT</h6>
        <p className='pt-1 text-[14px] text-center rubik font-[600]'>In the Home Of: Abhinaba Ji, Hydrabaad</p>
        <p className='pt-1 italic text-[11px] text-slate-500 text-center rubik font-[500]'>“Really like the product-looks great in my home.”</p>
        <div className='mt-2'>
            <button className='py-2 px-5 text-[14px] rounded-[50px] hover:bg-black hover:text-white flex border-[1px] mx-auto border-black bg-[transparent]'>shop Product &nbsp; <span className='pt-1'><FaArrowRightLong /></span></button>
        </div>
        </div>
    </div>
  )
}
