import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './components/ThemeButton';
import Card from './components/Card'

function App() {
  //Here, we define a State variable that will hold the current theme of our application.
  const [currentTheme, setCurrentTheme] = useState('light')

  //Define the functionality of lightTheme and darkTheme which we has given as a value object
  //inside ThemeProvider...

  const lightTheme = () =>{
    setCurrentTheme("light");
  }
  const darkTheme = () =>{
    setCurrentTheme("dark");
  }
  //Actual change in a Theme happens how?
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(currentTheme)
    }, [currentTheme]
    )
  

  return (
//Below, div is the parent container for all other elements in our app..
//This div must be wrapped in ThemeProvider to apply styles from theme object as we're using context api.
<ThemeProvider value={{currentTheme, lightTheme, darkTheme}}>
{/* //Inside, ThemeProvider we've to define a default value for "value" prop which will hold our theme object. */}
<div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* For Theme Button */}
              {/* Load Theme Button Now */}
              <ThemeBtn />
                
            </div>

            <div className="w-full max-w-sm mx-auto">
               {/* Here comes Card */}
               {/* //Load  Card component now */}
               <Card />
            </div>
        </div>
    </div>
    </ThemeProvider>
  )
}

export default App
