import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    //Now, import UserContextProvider that we've defined in UserContextProvider...
    <UserContextProvider>
      {/* //You can also  pass data to the context provider as follows;
      UserContext.Provider value ={{user, setUser}} */}

     <h1> Learn React for Fun</h1>
     {/* //Now, we're importing two component which we want to display after h1 tag.. */}
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
