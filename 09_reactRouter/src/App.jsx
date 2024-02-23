import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Footer from './components/Footer/footer'
// import Header from './components/Header/Header'
// import Home from './components/Footer/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Now, we'll render three components that we have created ie; Header, Footer and Counter. */}
    {/* <Header />
    <Footer />
    <Home /> */}
    {/* //Here, things will not work like this beacuse inside Header we used router..  */}
    {/* //Now we will have to change the working mechanism..so there's no any use of App.jsx */}
    {/* //So, we put all of our code inside main.jsx to render the component.. */}
    {/* //If we want the Header and Footer be same but the componets have to change in an interval of time.. */}
    {/* //For this, inside Home we will put different component and if there's
    any Contact us, About us, etc then we create diffn components.. */}
    {/* //For this, we create Root.jsx inside src/components...and call it in Main.jsx as a component. */}






    </>
  )
}

export default App
