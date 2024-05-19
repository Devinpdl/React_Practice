import React from 'react'

//Inside header we do want to bring Logout button only for those who's logged in..
//i.e; Conditional rendering..
//Let's import Container, logout button,
import {Container, LogoutBtn, Logo} from '../index'

//And, for redirection.. It needs links;
import {Link} from 'react-router-dom'

//It takes selector.. then only it can go to store.js and can only check user is logged in or not..
import {useSelector} from 'react-redux';

//If We do need to forcefully in navigation then use do import useNavigate  
import {useNavigate} from 'react-router-dom'

function Header() {
  //From state let's find out user is authenticated or not..
  const authStatus = useSelector((state)=> state.auth.status);
  //Inside useSelector we do find our callback and inside of () we do have access of state
  //Here, we're accessing the status from state.auth where we've defined our status in authReducer functionality..

  //Just as like we do dispatch, now we do create it from navigate
  const navigate=useNavigate();

  //Inside we do created all of the links that's needed..
  //And, if we want to show link of logout inside header, the user must be logged in..else we don't show it.
  //For eg; when user is logged in, then why to show get log in inside header..hmm..got it?

  //When such navigation bar is created.. we do make array and loop it inside of array as like below;
  const navItems = [
    {
      name: 'Home',
      slug: '/', //Slug means where url is going to?
      //For eg; you might want to create a URL like www.yourwebsite.com/blog/hello-world.
      //Here, hello-world is the slug.
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
   <header className='py-3 shadow-md bg-gray-400 '>
    <Container>
      <nav className='flex'>
        <div className='mr-4'>
          <Link to="/">
            <Logo width='69px' />
          </Link>
        </div>
        {/* outside div, there's unordered list where we're gonna loop into it.. */}
        <ul className='flex ml-auto'>
          {/* Now, start our javascript inside the ul list */}
          {navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              {/* We do put keys wherever the html elements does get repeats right? */}
              {/* Here, we assume every item's name is unique and we do take it as keys..okay? Got it? */}
              {/* Now, we bring button and we give a text inside the button using item.name.. */}
              <button onClick={()=> navigate(item.slug)}
              //navigate automatically will navigate to /signup, /login and etc etc..
              //navigate is the method and it takes arguments to determine where to take into next link/slug..
              className='inline-block px-6 py-2 duration-200 hover:bg-red-500 rounded-full'
              //Yo className le chae; Home, Login, Signup maa hovering garda animation plus arrange garxa..
              >{item.name}</button>
            </li>
          ): null
          )}
          {/* Now, we add logic to show logout option based on user is logged in(i.e; if user is Authenticated) */}
          {authStatus && (
            //It's a common syntax/ logic inside React of using double ampersand && and then displaying the things 
            //which is under expression i.e; inside of this parenthesis= ()..
            //Means; If authStatus is true then there'll be execution anything inside parenthesis ()
            <li>
              <LogoutBtn />
              {/* //We're displaying our components here.. */}
            </li>
            //Here, the logic is if authStatus is true then show Logout Button through components..
            //else, it'll not show up...

          )}
        </ul>
      </nav>
    </Container>

   </header>
  )
}

export default Header