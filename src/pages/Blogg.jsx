import React from 'react'
import PageHeadings from '../component/PageHedings'
import Footer from '../component/Footer'
import Blog from '../component/Blog'
import Logos from '../component/Logos'

const Blogg = () => {
  return (
    <>
      <PageHeadings pagename={"Blog Pagee"}/>
      <Blog/>
      <Logos/>
      <Footer/>
    </>
  )
}

export default Blogg
