"use client";

import { faAngleDown, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import OffCanvas from './OffCanvas';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='w-[100%] bg-[#FFDA9B] py-3'>
        <div className='max-w-[1170px] mx-auto flex justify-end items-center'>
          <marquee className="text-[#595958] font-semibold text-[12px] mr-3">
            TO CUSTOMIZE YOUR ORDERS, CALL / WHATSAPP US AT +91 8890287472
          </marquee>
          <select className='text-[12px] p-1'>
            <option>Select Language</option>
            <option>French</option>
            <option>German</option>
            <option>Hindi</option>
            <option>Russian</option>
          </select>
        </div>
      </div>

      <div className='w-[100%]'>
        <div className='max-w-[100%] relative shadow-lg mx-auto flex justify-between py-3 px-[15px] items-center'>
          <img src="https://thebrowncurves.com/wp-content/uploads/2021/06/The-Brown-Curves-Logo-PNG-Final-.png" width={250} height={80} alt='not found' />
          <div className='h-[70px]'>
            <ul className='hidden lg:flex text-[#eb5151] font-bold text-[12px] menu h-full'>
              <li className='cursor-pointer flex items-center '><Link href="/"><span>HOME</span></Link></li>
              <li className='cursor-pointer flex items-center'><Link href="/about-us"><span>ABOUT US</span></Link></li>
              <li className='cursor-pointer flex items-center group'>SHOP
                <FontAwesomeIcon icon={faAngleDown} className='text-[14px] ms-2' />
                {/* Mega menu to be displayed on hover of SHOP */}
                <div className='mega-menu hidden group-hover:block absolute top-[79px] left-0 w-full'>
                  <div className=''>
                    <div id="mega-menu-dropdown" className="max-w-[500px] mx-auto max-h-[150px] overflow-y-scroll menu-header-scroll relative z-10 grid  w-auto grid-cols-2 text-sm bg-white border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                      <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                        <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                          <li><Link href="/about-us"><span className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">About Us</span></Link></li>
                          <li><Link href="/library"><span className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">Library</span></Link></li>
                          <li><Link href="/resources"><span className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">Resources</span></Link></li>
                          <li><Link href="/pro-version"><span className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">Pro Version</span></Link></li>
                        </ul>
                      </div>
                      <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                        <ul className="space-y-4">
                          <li><Link href="/blog"><span className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">Blog</span></Link></li>
                          <li><Link href="/newsletter"><span className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">Newsletter</span></Link></li>
                          <li><Link href="/playground"><span className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">Playground</span></Link></li>
                          <li><Link href="/license"><span className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">License</span></Link></li>
                        </ul>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-4">
                          <li><Link href="/contact-us"><span className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">Contact Us</span></Link></li>
                          <li><Link href="/support-center"><span className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">Support Center</span></Link></li>
                          <li><Link href="/terms"><span className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">Terms</span></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='cursor-pointer flex items-center'><Link href="/customize-us">CUSTOMIZATION </Link></li>
              <li className='cursor-pointer flex items-center'>DEAL</li>
              <li className='cursor-pointer flex items-center'><Link href="/blog-us">BLOG </Link></li>
              <li className='cursor-pointer flex items-center'><Link href="/testimonial-us">TESTIMONIALS</Link></li>
              <li className='cursor-pointer flex items-center'><Link href="/contact-us"><span>CONTACT US</span></Link></li>
            </ul>
          </div>
          <div className='flex items-center gap-4'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <div className='text-[25px] md:hidden'>
              <button onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></button>
            </div>
          </div>
        </div>
      </div>

      <OffCanvas isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  )
}
