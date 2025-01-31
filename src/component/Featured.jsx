import React, { useContext, Component  } from 'react'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft, FaRegHeart} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import { LuZoomIn } from "react-icons/lu";

function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <div
        className="lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#FB2E86] rounded-full text-center flex justify-center items-center absolute top-[100%] lg:right-[44%] right-0 z-40 cursor-pointer"
        onClick={onClick}
        ><FaArrowRight className='text-white' /></div> 
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <div
      className="lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#FB2E86] rounded-full text-center flex justify-center items-center absolute top-[100%] lg:left-[44%] left-0 z-40 cursor-pointer"
      onClick={onClick}
      ><FaArrowLeft className='text-white ' /></div> 
    );
  }
const Featured = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

const data = useContext(apiData)

    
  return (
<section className="pt-12 pb-28">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="font-josef text-[46px] font-bold text-[#1A0B5B]">Featured Products</h2>
    </div>
    <div>
      <Slider {...settings} className='text-center'> 
        {data.map((item) => (
          <div className="!w-[95%] shadow-lg mb-5">
            <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              {/* Product Image */}
              <div className="flex justify-center pt-16 pb-8">
                <img src={item.thumbnail} alt="Product1.png" className='group-hover:scale-125 duration-700 ease-in-out'/>

                <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer" onClick={() => handleAddToCart(product)}>
                                        <FiShoppingCart /></div>
                                       
                                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                                        <FaRegHeart /></div>
                                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                                        <LuZoomIn />
                                       </div>
               </div>
             </div>

              {/* Product Details */}
              <div className="text-center py-5 bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                <h2 className="font-lato font-bold text-[18px] text-[#FB2E86] group-hover:text-white">{item.title}</h2>
                <div className="flex justify-center gap-x-2 pb-3">
                  <div className="clr w-5 h-1 bg-[#05E6b7]"></div>
                  <div className="clr w-5 h-1 bg-[#F701A8]"></div>
                  <div className="clr w-5 h-1 bg-[#00009D] group-hover:bg-white"></div>
                </div>

                <h5 className="font-josef font-normal text-[14px] text-[#151875] py-2 group-hover:text-white">
                Code - Y523201
                </h5>
                <p className="font-josef font-normal text-[14px] text-[#151875] py-2 group-hover:text-white">
                  ${item.price}
                </p>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>
  )
}

export default Featured
