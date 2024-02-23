import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

//Below, we created a functional component Root.. This can also be done in App.jsx too..
function Root() {
  return (
    <>
    <Header />
    <Outlet />
    {/* //Once passing the Outlet component, Header and Footer remains same..
    But we can change the  content of them based on which route is being navigated to.. */}
    <Footer />
    {/* //Now, if we want dynamically pass the components like;About us,Home
    , Contact us etc.. inside Header and Footer then we have to import and use Outlet... */}



    </>
  )
}

export default Root