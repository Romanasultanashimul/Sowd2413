import React from 'react'

const PageHeadings= ({ pagename }) => {
  return (
    <section className='bg-[#F6F5FF] py-24'>
            <div className=" container mx-auto">
                <h2 className='text-[34px] font-jsans font-bold text-[#101750] pb-2'>{pagename}</h2>
                <h4 className='text-[16px] font-lato font-medium text-[#000000]'>Home . Pages . 
                <span className='text-[#FB2E86]'>{pagename}</span></h4>
            </div>
    </section>
  )
}

export default PageHeadings
