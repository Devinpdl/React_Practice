import React, {useId} from 'react'

// function Input() {
//     const id = useId();
//   return (
//     <div>Input</div>
//   )
// }
//Let's create above function as arrow function

const Input = React.forwardRef ( function Input({
     label,
     type = 'text',
     className = '',
     ...props}, ref  //Inside Input we do pass objects in javascript that we're going to take..
     //And finally we do use ref to pass the references from forwardRef above.
     //Here, ref is defined but not used.. we'll use it taking seriously..
){
    //Actual function does work inside forwardRef..
    //forwardRef helps to pass reference to another page like; when we define input field's components..
    //..in one separate folder and want to do pass and use that components into another folder..for that
    //..purposes we do use forwardRef.. state matching purposes ko laagi vanda hunxa..


    const id = useId();
    // return <h1>Test</h1>
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1 '
            //Here, if l.h.s label is given then anything after && will be displayed or executed.. 
            htmlFor={id}>
            {/* Here, htmlFor = {id} is for purpose of accessibility to assign unique id to it. */}
                {label}
                </label>
                }
                {/* //Now, It takes input */}
                <input
                type = {type} //we're taking the type that we've defined above i.e; as text
                className = {`px-3 py-2 rounded-lg bg-white text-black outline-none
                 focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${className}`}

                 ref={ref} //Whatever references that has taken from user as props, here, this is the way
                 //you pass that ref as javascript object.
                 //This is the things that gives references inside parent's components..
                 //So, now you can use these references
                 //This is the reason we do use of forwardRef..
                 //So, from one page it get references and then it'll take state's access at the same time..
                 id = {id}
                 {...props} // Any values that's being passed will be taken by spread props..
                 //Note: by use of this id, whatever the unique id that has been generated will be
                 //put into label field and into input field too..
                 //So that, anyone who clicks on that particular input field then within that input
                 //.. will get highlights and places a cursor into it so that user can write on it..

                />
        </div>
    )
} )

export default Input