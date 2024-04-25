import React from 'react'

export default function Blog() {
  return (
    <div className='w-full'>
      <div className='max-w-[1000px] mx-auto pb-4'>
        <div className='mx-2'>
       <img src='https://thebrowncurves.com/wp-content/uploads/2021/08/blog-slider.jpg'/>
       </div>
      </div>
      <div className='max-w-[900px] mx-auto mt-10 lg:grid grid-cols-3 gap-[30px] pb-[50px]'>
       <div className='mt-5'>
       <div className='mx-2'>
        <img src='https://thebrowncurves.com/wp-content/uploads/2021/08/BLOG-JAJOO-1.jpg'/>
        <div className='pt-2'>
          <p className='pt-2 rubik font-[600] text-[15px] hover:text-red-200'><a href=''>CRAFTLAB</a></p>
          <p className='pt-2 italic text-[12px]'>August 15, 2021 / <span className='text-red-300 underline hover:text-black'><a href=''>The Brown Curves</a></span></p>
          <p className='pt-2 text-[13px]'>Partnered with Craftlab for providing metal service tray for them to do resin.</p>
          <div className='mt-2'>
            <button className='text-white bg-red-400 text-[11px] p-1 hover:bg-black'>Read More</button>
          </div>
          </div>
        </div>
       </div>
       <div className='mt-5'>
       <div className='mx-2'>
        <img src='https://thebrowncurves.com/wp-content/uploads/2021/07/blog-1-800x800-1.jpg ' />
        <div className='pt-2'>
          <p className='pt-2 rubik font-[600] text-[15px] hover:text-red-200'><a href=''>UNIQON DECORS </a></p>
          <p className='pt-2 italic text-[12px]'>August 15, 2021 / <span className='text-red-300 underline	hover:text-black'><a href=''>The Brown Curves</a></span></p>
          <p className='pt-2 text-[13px]'>Partnered with Craftlab for providing metal service tray for them to do resin.</p>
          <div className='mt-2'>
            <button className='text-white bg-red-400 text-[11px] p-1 hover:bg-black'>Read More</button>
          </div>
          </div>
        </div>
       </div>
       <div className='mt-5'>
       <div className='mx-2'>
        <img src='https://thebrowncurves.com/wp-content/uploads/2021/05/blog-2-800x800-2.jpg' />
        <div className='pt-2'>
          <p className='pt-2 rubik font-[600] text-[15px] hover:text-red-200'><a href=''>EIJYA DESIGNS</a></p>
          <p className='pt-2 italic text-[12px]'>August 15, 2021 / <span className='text-red-300 underline	hover:text-black'><a href=''>The Brown Curves</a></span></p>
          <p className='pt-2 text-[13px]'>Partnered with Craftlab for providing metal service tray for them to do resin.</p>
          <div className='mt-2'>
            <button className='text-white bg-red-400 text-[11px] p-1 hover:bg-black'>Read More</button>
          </div>
          </div>
        </div>
       </div>
       <div className='mt-5'>
        <div className='mx-2'>
        <img src='https://thebrowncurves.com/wp-content/uploads/2021/05/blog-3-800x800-1.jpg' />
        <div className='pt-2'>
          <p className='pt-2 rubik font-[600] text-[15px] hover:text-red-200'><a href=''>DIVYA INTEIORS</a></p>
          <p className='pt-2 italic text-[12px]'>August 15, 2021 / <span className='text-red-300 underline	hover:text-black'><a href=''>The Brown Curves</a></span></p>
          <p className='pt-2 text-[13px]'>Partnered with Craftlab for providing metal service tray for them to do resin.</p>
          <div className='mt-2'>
            <button className='text-white bg-red-400 text-[11px] p-1 hover:bg-black'>Read More</button>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}
