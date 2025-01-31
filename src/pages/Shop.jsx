import React from 'react'

import PageHeadings from '../component/PageHedings';
import Logos from '../component/Logos';
import Footer from '../component/Footer';
import ShopProducts from '../component/ShopProducts';

const Shop = () => {
  return (
    <>
    <PageHeadings pagename={"Shop Grid Default"}/>
    <ShopProducts/>
    <Logos/>
    <Footer/>

    </>

  )
}

export default Shop
