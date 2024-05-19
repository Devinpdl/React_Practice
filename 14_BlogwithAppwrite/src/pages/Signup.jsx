// import React from 'react'
// // import SignupComponent from "../components/Signup" // Importing default export
// import { Signup as SignupComponent } from "../components/Signup"; // Importing with an alias

import React from 'react';
// import { Signup } from '../components/Signup'; // Update import statement
import { Signup as SignupComponent } from '../components'
function Signup() {
  return (
    <div className='py-8' >
      <SignupComponent />
    </div>
  );
}

export default Signup;
