import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <div className='container'>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
