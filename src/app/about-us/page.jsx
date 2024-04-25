import React from 'react'

export default function About() {
  return (
    <div className='w-full'>
        <div className='max-w-[1320px] mx-auto lg:grid grid-cols-2 gap-[40px] pt-12'>
           <div className=''>
            <h2 className='font-[600] rubik text-[26px] pb-4'>About Us</h2>
            <p className='text-[14px] leading-7 text-[#807f7f] text-justify'>The Brown Curves is a manufacturing unit which designs and manufactures furniture, home décor and accessories. Working with wood, marble, metal and glass we translate creative thoughts and dreams to eccentric designs.<br/>
             We have been into export of Indian furniture Articles overseas,catering to the needs of wholesellers out there since 3 decades.<br/>
             On one fine day, we decided to bring our excellent export quality products to domestic market through online platform, giving birth to TBC.With our own production studio, we cater to residential and commercial custom furniture requirements.<br/>

             At TBC, We understand, as objects weave their way into our home, they kind of become a feel, they become what we are and where we come from. The table lamp under the glow of which you re-visit your old letters, the dining table where you have best meal with your loved ones, or the armchair you sink into after a long working day, furniture shapes our emotions.<br/>

             Our designs blends contemporary utilities with traditions of excellence .Our products whether a Sofa, or a Chair or a Coffee table or Soft furnishings, all are 100% made in India respecting Indian standard measurements, so that they bring exceptional beauty and comfort to your home.<br/>

             We know that success tastes best when it’s collaborative. We work with artisans from across India to create each piece that carries us forward together in our design adventure. This is us doing our bit towards promoting traditional handcrafts and local artisanal communities.
             We have our in-house team of designers and craftsman. The expert karigars, some of them even from the fourth generations of furniture who have worked with royal families of Rajasthan, transform these designs into timeless products.<br/>

             All our products are handcrafted locally by skilled craftsmen which gives us complete control over the manufacturing process. We use the best quality materials to ensure that our products provide practical and enduring home solutions. So you can be rest assured that when you buy our handcrafted furniture online, it’ll serve you in the years to come.

           </p>
           </div>
           <div className=''>
            <img src='https://thebrowncurves.com/wp-content/uploads/2021/06/IMAGE-01-e1624202505801.jpg' width='100%'/>
           </div>
           </div>
           <div className='max-w-[1000px] mx-auto pt-12'>
            <div className='w-full mx-auto relative'>
           <div className='absolute top-[13px] lg:left-[28%] z-10 w-[11%] h-[1px] bg-black  '></div>
           <h2 className='text-center text-2xl rubik font-[600] md-[text-xl]'>FOUNDERS</h2>
            <div className='absolute top-[13px] right-[28%] z-10 w-[11%] h-[1px] bg-black'></div>
           </div>
           <div className=''>
            <p className='text-center text-[17px] font-[500] text-[#303030] rubik py-3'>We are a trio team of designers, directors, strategists and awkward dancers.</p>
           </div>
           <div className='w-full mt-7'>
              <div className='lg:grid grid-cols-2 gap-[30px]'>
                <div className=''>
                    <div className='border-[lightgray] border-[1px] rounded p-1'>
                    <img src='https://thebrowncurves.com/wp-content/uploads/2021/06/CO-FOUNDER-IMAGE-1.jpg' width='100%'/>
                </div>
                </div>
                <div className=''>
                    <h4 className='font-[600] rubik text-[15px] text-[#807f7f] pt-1'>Kuldeep Jhalani- Co-founder</h4>
                    
                    <p className='pt-4 text-[14px] text-justify font-[500] leading-8 rubik'>A hands-on creative with more than 30 years of manufacturing experience, and the senior most member of the team.<br/> 

                    He has been responsible for bringing concepts to life for clients. He has spent more than 3 decades designing, and manufacturing work for some of the world’s most elite and forward-thinking brands. Being a short-tempered person he can be seen working on smallest details latenights. Kuldeep ji can almost always be found in our workshop, working with our carpenters on a new design or admiring the grains on a new batch of wood.</p>
                </div>
              </div>
           </div>
           <div className='w-full mt-9'>
              <div className='lg:grid grid-cols-2 gap-[30px]'>
                <div className=''>
                    <div className='border-[lightgray] border-[1px] rounded p-1'>
                    <img src='https://thebrowncurves.com/wp-content/uploads/2021/06/FOUNDER-IMAGE-2FOUNDER-IMAGE-2.jpg' width='100%'/>
                </div>
                </div>
                <div className=''>
                    <h4 className='font-[600] rubik text-[22px] text-black pt-1'>Gopesh Jhalani- Co founder</h4>
                    
                    <p className='pt-4 text-[14px] text-justify font-[500] leading-8 rubik'>
                    Most Responsible member of the team , who occasionally tries to be creative.<br/>
                    He has got excellent skills when it comes to bringing a product at execution stage. He has a habit of inculcating Maximum utility features to every product keeping in mind the design aesthetics. He can frequently be seen lecturing around on HOW FURNITURE ITEMS AND HUMAN EMOTIONS GO HAND IN HAND.<br/>
                   He has a madness of measuring every product at every stage twice,thrice,or untill his OCD gives away.<br/>
                     He graduated with Master in Commerce and continued to grow until he was 6’ 2”
                     Outside of work, he can be found performing an individual music concert in his Bathroom, just for himself.
                    </p>
                </div>
              </div>
           </div>
           <div className='w-full mt-9'>
              <div className='lg:grid grid-cols-2 gap-[30px]'>
                <div className=''>
                    <div className='border-[lightgray] border-[1px] rounded p-1'>
                    <img src='https://thebrowncurves.com/wp-content/uploads/2024/02/IMG_168122-scaled.jpg' width='100%'/>
                </div>
                </div>
                <div className=''>
                    <h4 className='font-[600] rubik text-[22px] text-black pt-1'>Parul Jhalani- Co-founder</h4>
                    
                    <p className='pt-4 text-[14px] text-justify font-[500] leading-8 rubik'>
                    She works out of a room filled with books and few plants who stares back at her for a jug of water.<br/>

                    TBC is her inspiration to work a little harder and to smile a little more. It was in her passion for objects, that the seed of The Brown Curves was sown.<br/>

                    She works closely with architects and interiors designers from ideation to execution of our projects. She loves writing product discription and strongly belive in Bermuda Triangle. She picks up Books over people, laughs with her lungs out and do not understand the question, Mountains or Beaches, when one can have both.
                    </p>
                </div>
              </div>
           </div>
        </div>
        <Counterpart/>
    </div>
  )
}






 function Counterpart() {
  return (
    <div className='w-full bg-color mt-12'>
        <div className='max-w-[1000px] mx-auto lg:grid grid-cols-4 gap-[80px]'>
         <div className=''>
            <h2 className='font-[700] text-[#c85c5d] text-[30px] text-center rubik pt-5 pb-1'>90 +</h2>
            <p className=' rubik font-[500]  text-center text-[15px] pb-6'>Projects Completed</p>
         </div>
         <div className=''>
         <h2 className='font-[700] text-[#c85c5d] text-[30px] text-center rubik pt-5 pb-1'>84 +</h2>
            <p className=' rubik font-[500]  text-center text-[15px] pb-6'>of all Pitches Won</p>
         </div>
         <div className=''>
         <h2 className='font-[700] text-[#c85c5d] text-[30px] text-center rubik pt-5 pb-1'>18k+</h2>
            <p className=' rubik font-[500]  text-center text-[15px] pb-6'>Work Delivered</p>
         </div>
         <div className=''>
         <h2 className='font-[700] text-[#c85c5d] text-[30px] text-center rubik pt-5 pb-1'>1</h2>
            <p className=' rubik font-[500]  text-center text-[15px] pb-6'>Time Bullied By A Client</p>
         </div>
        </div>
    </div>
  )
}
