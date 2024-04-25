import { faConnectdevelop, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faContactCard, faEnvelope, faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full bg-[#F0F1F5]'>
      <div className='max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 px-4 md:px-0'>

        {/* Get in Touch */}
        <div className='footercol'>
          <h3 className='text-[#5d5d5d] font-bold mb-3 mt-2'>GET IN TOUCH</h3>
          <ul>
            <li><FontAwesomeIcon icon={faHome} className='mr-2' />The Brown Curves, India</li>
            <li><FontAwesomeIcon icon={faPhone} className='mr-2'/>88902 87472 ,</li>
            <li><FontAwesomeIcon icon={faEnvelope} className='mr-2' />contact@thebrowncurves.com</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className='footercol'>
          <h3 className='text-[#5d5d5d] font-bold mb-3 mt-2'>QUICK LINKS</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className='footercol'>
          <h3 className='text-[#5d5d5d] font-bold mb-3 mt-2'>SOCIAL LINKS</h3>
          <ul>
            <li><FontAwesomeIcon icon={faInstagram} className='mr-2' />Instagram</li>
            <li><FontAwesomeIcon icon={faPinterest} className='mr-2' /> Pinterest</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='footercol'>
          <h3 className='text-[#5d5d5d] font-bold mb-3 mt-2'>NEWSLETTER</h3>
          <form>
            <ul>
              <li>Send us your mail or next updates.</li>
              <li><input type="email" placeholder='Your Mail' className='p-1 w-full' /></li>
              <li><button type="submit" className='text-white bg-[#da3a5a] w-full rounded-[30px] mt-[10px] py-[3px]'>SEND</button></li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}
