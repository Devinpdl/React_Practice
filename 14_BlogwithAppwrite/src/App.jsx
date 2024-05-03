import './App.css'

function App() {
  //Now we do access .env variable in React if we do create our project using React and not from Vite as like below;
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  //There's a separate method to access our environment variable if we're creating our app through Vite..
  console.log(import.meta.env.VITE_APPWRITE_URL);

  //Sometimes we have to forcefully unwrapped it using exclamation '!' as like below when using typescript;
  // console.log(import.meta.env.VITE_APPWRITE_URL!);

  //Taken from .env file where it shows error and didn't allowed us to do some comments;
//   REACT_APP_APPWRITE_URL="test environment"
// //Since we're creating our app through VITE it should be written as like below;
// VITE_APPWRITE_URL="test environment"

  //Taken from .env.sample file where it shows error and didn't allowed us to do some comments;
  // REACT_APP_APPWRITE_URL=""
//We do ignore .env file to send it into AWS or while doing deployement to any server's..
//Instead we do create a new .env.production file which will be used by the build process only and not in runtime.
//We do shift new .env.sample file to the deployement site..


  return (
    <>
      <h1>Learn Creating Blog with Appwrite</h1>
    </>
  )
}

export default App
