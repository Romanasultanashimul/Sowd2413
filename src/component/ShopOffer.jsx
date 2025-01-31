import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

const ShopOffer = () => {

      return (
        <section className=''>
            <div className='container mx-auto'>
            <div className="text-center mb-16">
      <h2 className="font-josef text-[46px] font-bold text-[#1A0B5B]">What Shopex Offer</h2>
    </div>
    <div className="flex justify-center w-full py-10">
  <div className="w-full max-w-screen-lg flex justify-center gap-4">

    <div className="w-full md:w-1/4 p-2 text-center bg-white shadow-lg rounded-lg">
      <div className="flex justify-center mb-2">
        <img src={icon1} alt='Free Delivery' className="w-16 h-16"/>
      </div>
      <h5 className='text-xl text-[#151875] font-semibold'>Free Delivery</h5>
      <p className='text-md text-gray-600 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>

    <div className="w-full md:w-1/4 p-2 text-center bg-white shadow-lg rounded-lg">
      <div className="flex justify-center mb-2">
        <img src={icon2} alt='100% Cash Back' className="w-16 h-16"/>
      </div>
      <h5 className='text-xl text-[#151875] font-semibold'>100% Cash Back</h5>
      <p className='text-md text-gray-600 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>

    <div className="w-full md:w-1/4 p-2 text-center bg-white shadow-lg rounded-lg">
      <div className="flex justify-center mb-2">
        <img src={icon3} alt='Quality Product' className="w-16 h-16"/>
      </div>
      <h5 className='text-xl text-[#151875] font-semibold'>Quality Product</h5>
      <p className='text-md text-gray-600 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>

    <div className="w-full md:w-1/4 p-2 text-center bg-white shadow-lg rounded-lg">
      <div className="flex justify-center mb-2">
        <img src={icon4} alt='24/7 Support' className="w-16 h-16"/>
      </div>
      <h5 className='text-xl text-[#151875] font-semibold'>24/7 Support</h5>
      <p className='text-md text-gray-600 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>

  </div>
</div>



            </div>
        </section>
  )
}

export default ShopOffer
