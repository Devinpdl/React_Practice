//Now, let's we make our components reusable after creating our custom hooks..
//Input.jsx is nothing but a function that returns JSX code to create an input element
//with label and value properties..
//Now, we import basic react component from react writing rfce (React Functional Component Expression)
//For this you have to download react snippets extension..
import React from 'react';
import { useId } from 'react';

function InputField({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    //Here, we give an empty array as default value for currency options 
    // if it is not provided by the parent component..
    //We want the string like  "EUR" or "USD" etc., to be displayed in the select dropdown of the
    //currency field so we want all of them to get loop through array, Okay, Got it?..
    selectCurrency = "usd",
    //Here, we want usd get displayed in the select option by default when no other currency is selected..
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    // using useId() hook and bind it with label and input in which we've talked in line
    //line no. 38 to 42
    const amountInputId = useId()
//This useId will return random value to amountInputId  variable every time whenever this component gets rendered..

    return (
        // taking css from user as well
        <div className={`input-container bg-white p-3 rounded-lg text-sm flex flex-wrap justify-between items-center mb-5 ${className}`}>
            {/* Here, we're writing custom css using backtick `` inside javascript so that a user can pass
             their own desired css file if they have their own className or want to add extra classes...
             So, we gave an option just passing $ and className variable which user want to pass */}
            <div className="w-1/2">
                {/* for from */}
                <label htmlFor={amountInputId} className="input-label block text-gray-700">
{/* //Here, we bind amountInputId inside label tag because we are giving id attribute to label tag
which helps to give unique id in each render */}
                    {label}
{/* //Here, the label which we're using will repeat and change everytime 
whenever there is any changes in the label property passed by the parent component..
Thus, we use use optimizing approach for this in which we use 'useId' react hooks and then bind it  
with label and input both because id should always remain same while changing the content.. 
  */}
                </label>
                <input
                    id={amountInputId}
//Here we're binding amountInputId into our input field so that we can access it easily later..
//Each time unique id will be passed inside input id through by use of this 'useId' hook..
//..in which we've used 'amountInputId' variable which is returned by this hook function above..
                    className="input-field w-full bg-transparent py-1.5 border 
                    border-gray-300 rounded px-3 outline-none transition duration-300 ease-in-out"
                    type="number"
                    placeholder="Enter Amount"
                    disabled={amountDisable}
                    value={amount !== 0 ? amount : ''}
//Here,we are giving the functionality to disable either amount or currency fields based on what user wants..
//Here, take the value from the above function Input in which the user will provide it..
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//Here, onchange event is used where user enter any number then this data will go to the function 
//which we passed from our parent component..
//Also, Here we used ampersand &&  operator because if there is no callback function given by the user  
//then also the code execution should continue normally without breaking..
//Also, we converted the event's targeted value because most of the time Javascripts takes values as string  
//but we need it as Number so we convert it here..
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="currency-select w-full bg-gray-100 py-1.5 px-3 border
                    border-gray-300 rounded outline-none transition duration-300 ease-in-out cursor-pointer"
                    value={selectCurrency}
//Here, we're giving the value of select tag through value attribute which comes from our state variable..
//We're taking value from selectCurrency because by default we've given the value npr above in line no.18..
//Now, when the user selects any other option from dropdown then this selected value will be 
//stored into selectCurrency..Then, we've to update our main Currency in our state so we called onCurrencyChange
//as below :
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//Here, we're firing the event on change and getting the selected value through e.target.value.. 
//And then we passed this selected value to the function which we provided from our parent component..
                    disabled={currencyDisable}
//Here, we're checking whether the field should be disabled or not.. 
//If yes then it will show a disabled sign over it
//Same as with amount field, If the user doesn't want to make this field  disabled then 
//he can simply remove this prop..
//Same like amount field, We also give the functionality to disable the Currency Fields too..
                >
                    {/* <option  value="USD">
                        USD - United States Dollar
                    </option> */}
{/* Here we want to take the option value through loop so we disabled it.. */}
{/* 
                        {currencyOptions.map((curr)=> (
                            <option  value="USD">
                            USD - United States Dollar
                        </option>
//Now, the same value do repeats everytime when we do pass component like this..
//So, instead of doing that we just call the map function and pass the array inside it..
//When the components do repeat as like this then Javascript does hit so much while doing performance..
//Here, Because react doesn't know how many times it has to render so it hits the DOM tree for each repetition..
//That's why we've to pass key so that react won't make same elements in each render inside of map..
//Thus, if you want to bring performance inside loop to repeat the elements then you've to pass key anyhow..
                        ))} */}
                    
                        {currencyOptions.map((currency) => (
//Here, you can use index instead of unique variable name called curr..
//If you use index then your code will look like this:
//<option value={index} key={index}>...
//Note:::::: You can use id also if the data is coming from Database also..
//If you use id then your code will look like this:
//<option value={id} key={id}>..
//<option key={`${curr.name}-${curr._id}`} value= {`${curr._id}`}


                             <option key={currency}
                            //   value="npr">
                            //Here, we will take value from javascript object directly..
                            //In react curly braces {} means inside of it is nothing but javascript code..
                              value={currency}>
{/* Here, we took the value(displayed the value) that we have looped through key.. */}
                                {/* npr */}
{/* Here, we're not wanting to display 'npr' to the user always..
That's why we displayed the object that we've accessed the object or elements that which is 
looped through the usage of key.. Below we passed curr inside of curly braces.. 
Because javascript is passed through curly braces in react*/}
                             {currency}
                         </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputField;