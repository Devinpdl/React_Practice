//Better approach to export the component is creating a file like index.js
//for this, First we import all the list of components inside index.js and then
//export them as an object with their names being keys and values as exports.
import InputField from "./InputField";
//Here, we're importing the method/function and then exporting this method not file inside curly braces..
export {InputField};