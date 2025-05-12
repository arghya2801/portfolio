import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className='px-5 md:px-0 max-w-4xl mx-auto prose dark:prose-invert'>{children}</div>
      <Footer />
    </>
  )
}
