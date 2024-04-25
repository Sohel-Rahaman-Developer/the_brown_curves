import React from 'react'
import { GoHome } from "react-icons/go";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";
// import { useRef, useState } from "react"

export default function Contact() {
  return (
    <div className='w-full'>
        <div className='max-w-[1320px] mx-auto mt-5 border-t-2 border-gray'>
        <h2 className='pt-4 text-black rubik text-[26px] font-[600] text-center'>Contact Us</h2>
            <p className='pt-1 text-black rubik font-[500] text-[10px] text-center'>HOME / Contact Us</p>
            <div className='mt-4 mb-7'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d458073.55555748637!2d73.0243094!3d26.2389469!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%20Rajasthan!3m2!1d26.2389469!2d73.02430939999999!5e0!3m2!1sen!2sin!4v1713609339110!5m2!1sen!2sin" width="100%" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <Contactpart/>
        
    </div>
  )
}





 function Contactpart() {
  return (
    <div className='w-full'>
        <div className='max-w-[900px] mt-12 pb-4 mx-auto lg:grid grid-cols-2 gap-[80px]'>
         <div className=''>
            <p className='text-[15px] rubik font-[600]'>INFORMATION</p>
            <div className='mt-5 bg-[#f7f7f7] py-5'>
               <div className='w-[80%] mx-auto mt-2'>
                   <div className='lg:grid grid-cols-[15%_auto] gap-[10px]'>
                      <div className='border-[1px] border-red-300  w-[50px] h-[50px] rounded-[100%] mt-2 flex items-center justify-center'>
                      <GoHome className='text-red-300 text-[18px]'/>
                      </div>
                      <div className='pt-2'>
                      <p className='font-[600] text-[13px] rubik'>Address:</p>
                      <p className='font-[500] text-slate-700 rubik text-[11px]'>The Brown Curves, India</p>
                      </div>
                   </div>
               </div>
               
               <div className='w-[80%] mx-auto mt-2'>
                   <div className='lg:grid grid-cols-[15%_auto] gap-[10px]'>
                      <div className='border-[1px] border-red-300  w-[50px] h-[50px] rounded-[100%] mt-2 flex items-center justify-center'>
                      <IoMdPhonePortrait  className='text-red-300 text-[18px]'/>
                      </div>
                      <div className='pt-2'>
                      <p className='font-[600] text-[13px] rubik'>Phone:</p>
                      <p className='font-[500] text-slate-700 rubik text-[11px]'>88902 87472 ,</p>
                      </div>
                   </div>
               </div>
               <div className='w-[80%] mx-auto mt-2'>
                   <div className='lg:grid grid-cols-[15%_auto] gap-[10px]'>
                      <div className='border-[1px] border-red-300  w-[50px] h-[50px] rounded-[100%] mt-2 flex items-center justify-center'>
                      <MdOutlineMail  className='text-red-300 text-[18px]'/>
                      </div>
                      <div className='pt-2'>
                      <p className='font-[600] text-[13px] rubik'>Email:</p>
                      <p className='font-[500] text-slate-700 rubik text-[11px]'>contact@thebrowncurves.com</p>
                      </div>
                   </div>
               </div>
               <div className='w-[80%] mx-auto mt-2'>
                   <div className='lg:grid grid-cols-[15%_auto] gap-[10px]'>
                      <div className='border-[1px] border-red-300  w-[50px] h-[50px] rounded-[100%] mt-2 flex items-center justify-center'>
                      <TbNetwork  className='text-red-300 text-[18px]'/>
                      </div>
                      <div className='pt-2'>
                      <p className='font-[600] text-[13px] rubik'>Website:</p>
                      <p className='font-[500] text-slate-700 rubik text-[11px]'>https://www.thebrowncurves.com</p>
                      </div>
                   </div>
               </div>
            </div>
         </div>
         <div className=''>
            <p className='text-[15px] rubik font-[600]'>GET IN TOUCH</p>
            <div className='mt-2 w-full'>
                <div className=''>
                    <form>
                        <div className='w-full lg:grid grid-cols-2 gap-[20px]'>
                        <div className='mt-2'>
                            <input type='text' placeholder='Enter your Name' className='bg-[#f7f7f7] text-black text-[11px] w-full outline-none py-3 px-2 font-[500] rubik border-none'/>
                        </div>
                        <div className='mt-2'>
                            <input type='text' placeholder='Enter your email' className='bg-[#f7f7f7] text-black text-[11px] w-full py-3 px-2 outline-none font-[500] rubik border-none'/>
                        </div>
                        </div>
                        <div className='w-full mt-4'>
                            <select className='bg-[#f7f7f7] w-full py-3 px-2 outline-none text-[11px] font-[500] rubik border-none'>
                                <option className=' text-black text-[11px] font-[500] rubik'>subject</option>
                                <option className=' text-black text-[11px] font-[500] rubik'>Internship</option>
                                <option className=' text-black text-[11px] font-[500] rubik'>order Delivery</option>
                                <option className=' text-black text-[11px] font-[500] rubik'>custom Designs</option>
                                <option className=' text-black text-[11px] font-[500] rubik'>Reseller & Bulk Product Enquiry</option>
                            </select>
                        </div>
                        <div className='mt-4'>
                        <textarea name="comment" placeholder='Enter your Address here' className='w-full text-black text-[11px] font-[500] rubik border-none py-3 bg-[#f7f7f7] px-2 resize-none outline-none h-[160px]'></textarea>
                        </div>
                        <div className='mt-4'>
                            <button className='w-full py-3 bg-red-400 rounded-[50px] text-[15px] text-white'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
         </div>
        </div>
    </div>
  )
}





//  function Faqpart() {
//   return (
//     <div className='max-w-[900px] mx-auto pt-12'>
//         <h2 className='text-center text-black font-[600] rubik text-[26px] pb-8'>Frequently Asked Questions</h2>
//         <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div class="mb-16">
//           <h2
//             class="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]"
//           >
//             Frequently asked questions
//           </h2>
//         </div>
//         <div class="accordion-group" data-accordion="default-accordion">
//           <div
//             class="accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4 active"
//             id="basic-heading-one-with-icon"
//           >
//             <button
//               class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
//               aria-controls="basic-collapse-one-with-icon"
//             >
//               <h5>How can I reset my password?</h5>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600 origin-center"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18M12 18V6"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//             </button>
//             <div
//               id="basic-collapse-one-with-icon"
//               class="accordion-content w-full overflow-hidden pr-4"
//               aria-labelledby="basic-heading-one"
//             //   style={{"max-height: 250px"}}
//             >
//               <p class="text-base text-gray-900 font-normal leading-6">
//                 To create an account, find the 'Sign up' or 'Create account'
//                 button, fill out the registration form with your personal
//                 information, and click 'Create account' or 'Sign up.' Verify
//                 your email address if needed, and then log in to start using the
//                 platform.
//               </p>
//             </div>
//           </div>
//           <div
//             class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
//             id="basic-heading-two-with-icon"
//           >
//             <button
//               class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
//               aria-controls="basic-collapse-two-with-icon"
//             >
//               <h5>How do I update my billing information?</h5>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18M12 18V6"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//             </button>
//             <div
//               id="basic-collapse-two-with-icon"
//               class="accordion-content w-full overflow-hidden pr-4"
//               aria-labelledby="basic-heading-two"
//             >
//               <p class="text-base text-gray-900 font-normal leading-6">
//                 To create an account, find the 'Sign up' or 'Create account'
//                 button, fill out the registration form with your personal
//                 information, and click 'Create account' or 'Sign up.' Verify
//                 your email address if needed, and then log in to start using the
//                 platform.
//               </p>
//             </div>
//           </div>
//           <div
//             class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
//             id="basic-heading-three-with-icon"
//           >
//             <button
//               class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
//               aria-controls="basic-collapse-three-with-icon"
//             >
//               <h5>How can I contact customer support?</h5>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18M12 18V6"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//             </button>
//             <div
//               id="basic-collapse-three-with-icon"
//               class="accordion-content w-full overflow-hidden pr-4"
//               aria-labelledby="basic-heading-three"
//             >
//               <p class="text-base text-gray-900 font-normal leading-6">
//                 To create an account, find the 'Sign up' or 'Create account'
//                 button, fill out the registration form with your personal
//                 information, and click 'Create account' or 'Sign up.' Verify
//                 your email address if needed, and then log in to start using the
//                 platform.
//               </p>
//             </div>
//           </div>
//           <div
//             class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
//             id="basic-heading-three-with-icon"
//           >
//             <button
//               class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
//               aria-controls="basic-collapse-three-with-icon"
//             >
//               <h5>How do I delete my account?</h5>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18M12 18V6"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//             </button>
//             <div
//               id="basic-collapse-three-with-icon"
//               class="accordion-content w-full overflow-hidden pr-4"
//               aria-labelledby="basic-heading-three"
              
//             >
//               <p class="text-base text-gray-900 font-normal leading-6">
//                 To create an account, find the 'Sign up' or 'Create account'
//                 button, fill out the registration form with your personal
//                 information, and click 'Create account' or 'Sign up.' Verify
//                 your email address if needed, and then log in to start using the
//                 platform.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }











// const FaqsCard = (props) => {

//     const answerElRef = useRef()
//     const [state, setState] = useState(false)
//     const [answerH, setAnswerH] = useState('0px')
//     const { faqsList, idx } = props

//     const handleOpenAnswer = () => {
//         const answerElH = answerElRef.current.childNodes[0].offsetHeight
//         setState(!state)
//         setAnswerH(`${answerElH + 20}px`)
//     }

//     return (
//         <div 
//             className="space-y-3 mt-5 overflow-hidden border-b"
//             key={idx}
//             onClick={handleOpenAnswer}
//         >
//             <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
//                 {faqsList.q}
//                 {
//                     state ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
//                         </svg>
//                     ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                         </svg>
//                     )
//                 }
//             </h4>
//             <div
//                 ref={answerElRef} className="duration-300"
//                 style={state ? {height: answerH } : {height: '0px'}}
//             >
//                 <div>
//                     <p className="text-gray-500">
//                         {faqsList.a}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function Faqpart ()  {

//     const faqsList = [
//         {
//             q: "What are some random questions to ask?",
//             a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
//         },
//         {
//             q: "Do you include common questions?",
//             a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
//         },
//         {
//             q: "Can I use this for 21 questions?",
//             a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
//         },
//         {
//             q: "Are these questions for girls or for boys?",
//             a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
//         },
//         {
//             q: "What do you wish you had more talent doing?",
//             a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
//         }
//     ]
  
//     return (
//         <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
//             <div className="space-y-3 text-center">
//                 <h1 className="text-3xl text-gray-800 font-semibold">
//                     Frequently Asked Questions
//                 </h1>
//                 <p className="text-gray-600 max-w-lg mx-auto text-lg">
//                     Answered all frequently asked questions, Still confused? feel free to contact us.
//                 </p>
//             </div>
//             <div className="mt-14 max-w-2xl mx-auto">
//                 {
//                     faqsList.map((item, idx) => (
//                         <FaqsCard
//                             idx={idx}
//                             faqsList={item}
//                         />
//                     ))
//                 }
//             </div>
//         </section>
//     )
// }