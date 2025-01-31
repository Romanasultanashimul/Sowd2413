import React from 'react'
import B1 from '../assets/b1.png'
import B2 from '../assets/b2.png'
import B3 from '../assets/b3.png'
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Blog = () => {
    return (
        <section className='py-12'>
            <div className='container mx-auto'>
            <div className="text-center mb-16">
      <h2 className="font-josef text-[46px] font-bold text-[#1A0B5B]">Latest Blog</h2>
    </div>
                <div className="flex justify-between">
                    <div className="w-[30%] shadow-lg group">
                        <img src={B1} alt="b1" className='rounded-lg w-full' />
                        <div className="px-4 pt-5 pb-8">
                            <div className="flex gap-x-12 items-center pb-8">
                                <div className="flex gap-x-3 items-center">
                                    <FaPenNib className='text-[#FB2E86]'/>
                                    <h3 className='text-[14px] font-normal font-jsans text-[#151875]'>SaberAli</h3>
                                </div>
                                <div className="flex gap-x-3 items-center">
                                    <SlCalender className='text-[#FB2E86]'/>
                                    <h3 className='text-[14px] font-normal font-jsans text-[#151875]'>21 August,2020</h3>
                                </div>
                            </div>
                            <div className="">
                                <h3 className='text-[18px] font-bold font-jsans text-[#151875] pb-4 group-hover:text-[#FB2E86]'>Top esssential Trends in 2021</h3>
                                <p className='text-[#72718F] text-[16px] font-normal font-lato pb-3'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                                <button className='text-[#151875] text-[16px] font-normal font-lato underline group-hover:text-[#FB2E86]'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] shadow-lg group">
                        <img src={B2} alt="b2" className='rounded-lg w-full' />
                        <div className="px-4 pt-5 pb-8">
                            <div className="flex gap-x-12 items-center pb-8">
                                <div className="flex gap-x-3 items-center">
                                    <FaPenNib className='text-[#FB2E86]'/>
                                    <h3 className='text-[14px] font-normal font-jsans text-[#151875]'>Surfauxion</h3>
                                </div>
                                <div className="flex gap-x-3 items-center">
                                    <SlCalender className='text-[#FB2E86]'/>
                                    <h3 className='text-[14px] font-normal font-jsans text-[#151875]'>21 August,2020</h3>
                                </div>
                            </div>
                            <div className="">
                                <h3 className='text-[18px] font-bold font-jsans text-[#151875] pb-4 group-hover:text-[#FB2E86]'>Top esssential Trends in 2021</h3>
                                <p className='text-[#72718F] text-[16px] font-normal font-lato pb-3'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                                <button className='text-[#151875] text-[16px] font-normal font-lato underline group-hover:text-[#FB2E86]'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] shadow-lg group">
                        <img src={B3} alt="b3" className='rounded-lg w-full' />
                        <div className="px-4 pt-5 pb-8">
                            <div className="flex gap-x-12 items-center pb-8">
                                <div className="flex gap-x-3 items-center">
                                    <FaPenNib className='text-[#FB2E86]'/>
                                    <h3 className='text-[14px] font-normal font-jsans text-[#151875]'>SaberAli</h3>
                                </div>
                                <div className="flex gap-x-3 items-center">
                                    <SlCalender className='text-[#FB2E86]'/>
                                    <h3 className='text-[14px] font-normal font-jsans text-[#151875]'>21 August,2020</h3>
                                </div>
                            </div>
                            <div className="">
                                <h3 className='text-[18px] font-bold font-jsans text-[#151875] pb-4 group-hover:text-[#FB2E86]'>Top esssential Trends in 2021</h3>
                                <p className='text-[#72718F] text-[16px] font-normal font-lato pb-3'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                                <button className='text-[#151875] text-[16px] font-normal font-lato underline group-hover:text-[#FB2E86]'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
