import React from 'react'
import { GoDot } from "react-icons/go";

export default function Custom() {
  return (
    <section>
       <div className='w-full'>
        <div className='max-w-[1100px] mx-auto pt-6'>
          <div className='relative'>
            <div className='absolute top-[13px] lg:left-[28%] z-10 w-[11%] h-[1px] bg-black  '></div>
            <h2 className='text-center text-2xl rubik font-[600] md-[text-xl]'>CUSTOMIZATION</h2>
            <div className='absolute top-[13px] right-[28%] z-10 w-[11%] h-[1px] bg-black'></div>
            </div>
            <p className='text-center text-lg py-3 rubik font-[500] md-[text-sm] pb-4'>CUSTOM FURNITURE DESIGN</p>
            <div className='w-full'>
              <div className='max-w-[1000px] mx-auto'>
                <div className=''>
                  <div className='mx-2'>
               <img src='https://thebrowncurves.com/wp-content/uploads/2021/06/CUSTOMIZATION-IMAGE-1.jpg'/>
               </div>
               <p className='pt-5 px-2 rubik font-[500] text-sm text-slate-500'>Team TBC WELCOMES YOU WITH OPEN ARMS TO CUSTOM BUILD YOUR DREAM FURNITURE.</p>
               <p className='pt-3 px-2 rubik font-[500] italic text-slate-500'>There’s nothing we like more than an empty room and a head full of ideas. We love working with architects, designers, stylists and anyone with a vision for their space. From concept and design to fabrication , we can tailor-make everything to your brief. Tell us what you have in mind, and we’ll pull out all the possibilities to create it.</p>
               <p className='pt-3 px-2 rubik font-[500] text-[14px] text-slate-500'>WE HAVE A TEAM OF PROFESSIONAL FURNITURE DESIGNERS AND KAARIGARS, WHO WILL GO OUT OF THERE WAY TO UNDERSTAND  YOUR EACH REQUIREMENT, SMALL OR BIG.</p>
               <h5 className='pt-3 px-2 rubik font-[500] text-[14px]  text-slate-500'>OUR TEAM OF EXPERTS WILL BRIDGE THE GAP BETWEEN YOUR THOUGHT AND PRODUCT. WE HAVE A HAIBIT OF STUDYING EXISTING FURNITURE AT CLIENTS PLACE SO AS TO UNDERSTAND THERE TASTE.</h5>
               <h5 className='pt-3 px-2 rubik font-[500] text-[14px] text-slate-500'>WHAT CAN YOU GET CUSTOMIZED?</h5>
               </div>
               <div className='px-2'>
                <ul type='circle'>
                  <li className='pt-3 rubik font-[600] text-[14px] text-slate-700 flex'><span className='pt-1 pe-1 text-black'><GoDot /></span> FURNITURE WHICH ALREADY EXIXTS ON OUR PAGE AND WEBSITE INTO YOUR PREFREED DIMENSIONS AND FINISH</li>
                  <li className='pt-3 rubik font-[600] text-[14px] text-slate-700 flex'><span className='pt-1 pe-1 text-black'><GoDot /></span> SOME OTHER FURNITURE PIECE WHICH YOU HAVE IN MIND.</li>
                  <li className='pt-3 rubik font-[600] text-[14px] text-slate-700 flex'><span className='pt-1 pe-1 text-black'><GoDot /></span> FURNITURE, WHOSE INSPIRATIONAL IMAGE YOU HAVE</li>
                </ul>
                
               </div>
               </div>
               <div className='max-w-[1000px] mx-auto pb-8'>
                <p className='pt-7 px-2 rubik font-[600] text-[15px] text-slate-500'>SO GO AHEAD AND SHARE YOUR CUSTOM FURNITURE IDEAS WITH US AND LET OUR DESIGN EXPERTS DO THE MAGIC.</p>
                <div className='pt-7 mx-2'>
                  <img src='https://thebrowncurves.com/wp-content/uploads/2021/06/CUSTOMIZATION-IMAGE-2.jpg'/>
                </div>
               </div>
            </div>
        </div>
       </div>
    </section>
  )
}

