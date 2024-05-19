import React, {useId} from 'react'

function SelectComponent({
    //Properties that you're gonna take is;
    options, //Option to select dropdown values..
    label, //It's Input field type so you've to declare label too..
    className ='',
    ...props

} , ref) {
    //Here, we provide a references to selectComponents that's why we use ref keyword above..
    // We define id to use the above useId to generate unique id in HTML..
    const id= useId();
  return (
    //Now, let's create a form;
    <div className='w-full'>
       {/* If there's label then we do display R.H.S label; */}
       {label && 
       <label htmlFor={id}
       className=''></label>}
       {/* //Now, we do need select element.. */}
       <select id={id}
        // {/* ref = {ref} //Giving the references taken from above , ref func SelectComponent */}
        {...props}
        ref={ref}
        // {/* This props means that We can pass any other properties which are
        // not mentioned here like size or color etc., and it will be passed as it is to our HTML tag. */}
        className = {`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
        {/* //From the options by default you get an array and to avoid problems we do use map func */}
        {/* {options.map((option)=>(<option key={option.value}>{option.text}</option>))} */}
        {/* we don't directly use .map for looping (coz there may be chances of not being value inside options
        and the program does crash 100% )
        //So, we do optional check if there's value inside options as like below; */}
        {options?.map((option)=>(
            <option key={option} value={option}>
                {/* //We used option as key and value coz it's unique in itself */}
                {option} {/*//Inside option tag the value is option */}
            </option>
        ))}
       </select>
       </div>
  )
}

// export default SelectComponent
//As like using const Input = React.forwardRef ( function Input(label, and so on) in Input.jsx
//We can use ForwardRef as like below by exporting it also;
export default React.forwardRef(SelectComponent);
//Just like this you can create any other input element like we did for select element..