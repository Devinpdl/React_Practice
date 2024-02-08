//Don't name your file as ourCurrencyInfo.jsx when creating custom hooks
//Because when jsx is returned , you've name the file as .jsx but if it isn't,  
//it will be treated as a normal javascript file
import { useState, useEffect } from "react";

function  useCurrencyInfo(currency) {
        //We used useCurrencyInfo other than any name bcoz we are using react-hooks/rules 
        //which states that all hooks should start with 'use when you're creating ur own hooks..
    //Now, we wan't to call our API and get data about currency whenever the value of currency changes...
    //Here, we can also write directly fetch(url) but we want to make sure that our code is not executed 
    //..until the component has mounted that's why we use useEffect()..
     //For below part of line no.20 and 21. Let's set variable and function inside useState...
     const [data,setData] = useState({});
     //Here, we put empty object inside useState so that if there is an error in fetching data 
     //then at least our app won't break..This is our Contingency Plan..
    useEffect(()=>{
         // API call and convert the string data into json
        const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
        fetch(url)
        .then((res)=> res.json())
        //Here, we're using promise to handle the requested data so that we can convert it into json..
        .then((res)=> setData(res[currency]))
        //Here, we don't hold the response in regular variable bcoz we'll not see updates in our UI..
        //Instead, we'll store it inside our state by using useState() which returns an array containing two values.
        //So, instead of holding it in varibale, we passed it through setData which is a function provided by usestate..
        //Here, we always don't need to access data or objects  by dot notation like this : data.base etc..
        //We can also access them like this: data["base"] etc.. But for simplicity we just use data.base etc
        console.log(data);
        
    },[currency]);
    //Here we write currency inside dependency array bcoz if there's any change 
    //in currency then only we'r going to execute our effect again..
    //Here, currency means our change of variable like from usd to npr, npr to inr and so on..
    //Now, what to return from this?
    /*
    * We have to return something from our custom Hooks..
    * In our case, we're returning our data which contains information about our currency..
    * So, whatever data we've got from our API, we'll send back to whoever called our custom Hook..
    *  */
   console.log(data);
   return data;
   //Here, we're just only returning our data..And we can't set our Data..
   //For this, we'll create another custom Hook named useSetCurrencyInfo where we'll set our data
   //For better understanding you can have a look at line no.46 that's of export part.
}
export default useCurrencyInfo;