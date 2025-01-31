import React from 'react'
import PageHeadings from '../component/PageHedings'
import Footer from '../component/Footer'
import contact from '../assets/contact.png'

const Contact = () => {
  return (
    <>
      <PageHeadings pagename={"Contact Us"} />
  
      <div className='container mx-auto flex flex-col md:flex-row md:justify-between p-8'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <h2 className='text-3xl font-bold text-[#151875] mb-4'>Information About Us</h2>
          <p className='text-gray-600 mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.
            Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>

          <h2 className='text-3xl font-bold text-[#151875] mb-4'>Get In Touch</h2>
          <p className='text-gray-600 mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor
            lobortis quis bibendum quam.
          </p>
          <form>
            <input type="text" placeholder="Your Name*" className="border border-gray-300 p-3 mb-4 w-full" required />
            <input type="email" placeholder="Your E-mail*" className="border border-gray-300 p-3 mb-4 w-full" required />
            <input type="text" placeholder="Subject*" className="border border-gray-300 p-3 mb-4 w-full" required />
            <textarea placeholder="Type Your Message*" className="border border-gray-300 p-3 mb-4 w-full h-24" required />
            <button type="submit" className="bg-[#FB2E86] text-white px-6 py-3 rounded-md">Send Mail</button>
          </form>
        </div>

        <div className='md:w-1/2 flex flex-col justify-center items-center'>
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <h2 className='text-3xl font-bold text-[#151875] '>Contact Way</h2>
            <div className="flex gap-1">
            <div className='bg-[#5726DF] clr '></div>
            <p className='text-gray-600 mb-2'>Tel: 877-67-88-99</p>
            <p className='text-gray-600 mb-2'>E-Mail: shop@store.com</p>

            </div>
            <p className='text-gray-600 mb-4'>20 Margaret St, London, Great Britain, 3NM98-LK</p>
            <p className='text-gray-600 mb-2'><span className="font-bold text-[#FB2E86]">Support Forum:</span> For over 24hr</p>
            <p className='text-gray-600'><span className="font-bold text-[#FB2E86]">Free standard shipping:</span> on all orders.</p>
          </div>

          <div className='rounded-lg p-4 mb-4' style={{ width: '60%', height: '300px' }}>
            
            <img src={contact} alt="contact" />
          </div>
        </div>
      </div>
        
      
      <Footer/>
    </>
  )
}

export default Contact
