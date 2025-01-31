import React from 'react'
import HeroImg from "../assets/hero.png"
import HeroTop from "../assets/herotop.png"

const Hero = () => {
  return (
<section className='bg-[#F2F0FF] py-28 relative z-20 overflow-hidden'>
     <img className='absolute -top-12 left-0 -z-10 w-[250px]' src={HeroTop} alt="" />
    <div className="container mx-auto">
        <div className='flex justify-between items-center'>
            <div className="w=[60%]">
                <h4 className='font-lato font-bold text-[16px] text-primary pb-3'>Best Furniture For Your Castle....</h4>
                <h1 className='font-josef font-bold text-[56px] pb-3'>New Furniture Collection
                Trends in 2020</h1>
                <p className='font-lato text-[16px] text-[#8A8FB9] pr-56 pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</p>
                <button className='font-josef font-semibold text-[17px] bg-primary text-white py-4 px-10'>Shop Now</button>
            </div>
            <div className='w-[30%]'>
                <img className='w' src= {HeroImg} alt="hero.img" />
            </div>
        </div>
    </div>

</section>
  )
}

export default Hero
