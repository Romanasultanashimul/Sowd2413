import React from 'react'

import logos from '../assets/logos.png'
import { Container } from 'postcss'

const Logos = () => {
  return (
    <section className='py-12'>
    <div className='container mx-auto'>            
    <img className='mx-auto' src={logos} alt="logos.png" />
    </div>
    </section>
  )
}

export default Logos