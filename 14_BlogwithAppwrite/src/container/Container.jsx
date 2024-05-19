//Container is just like box, that accepts the properties as a childern..
//It can hold any number of child components.
//Just like; styling properties, whatever value it may have.. Container can displays it..

import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>

}

export default Container