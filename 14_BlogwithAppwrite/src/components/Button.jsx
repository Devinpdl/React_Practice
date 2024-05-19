//We're creating a common Button that may be used in all components
import React from 'react'

function Button(
    {
        //Most often people use Javascript object as parameter as children like below;
        children,
        //define type too;
        type = "button",
        bgColor = 'bg-green-500',
        textColor = 'text-white',
        className = '', // Most of the time, We do take className as empty string..
        ...props //Also, we do spread props if you have passed any props..
        //props will be the other properties by user 


    }
) {
  return (
    //We can use above children parameter functionality as follows;
    <button className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`} {...props}>
        {/* //Here, you can't take backtick as just like normally in javascript.. Since it's react
        //..Wrap it in inside curly braces {} and anything after $ that's userdefined typos
        //..just like we've defined className= '' */}
        {/* //Here,className={`px-5 py-3 rounded-full ${className} ${textColor} ${bgColor}`} is nothing
        ..But a property which is attributes of the button right?
        //..Now, if user has given any other properties then we do take it from spread props
        //.. i.e; from ...props above.. means; every properties that may user define; we do take
        //.. take it from ...props */}
        {children}
        {/* Any text that's written will be passed here inside children  */}
    </button>
  )
}

export default Button