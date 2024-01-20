function Anyfn(){
    return(
        <h3> This is our 3rd Heading From Vite</h3>
        //some library do forces us to write component name as .jsx file component if we use jsx like html elemnt.
        //If there's no return of html inside our file then,
        //you can use outfile.js instead of outfile.jsx
    )
}
export default Anyfn;
//Here Naming component as outfile.js will make issues so u have to write it
//as outfile.jsx when we use vite.
//But there's no any issues when we create component as like outfile.js from react only.
//So, I just named the file with .jsx extension and used jsx in import statement
//after naming file as .jsx, again it shows this error:
/*
Warning: The tag <anyfn> is unrecognized in this browser.
If you meant to render a React component, start its name with an uppercase letter.
    at anyfn
    at App
*/

//after renaming as Anyfn it'll work fine..

//Thus, Vite do restrict us by that kii, We must capitalized the Function name..
//And also remember one thing, If we are using JSX then we must use .jsx
//extension for the file otherwise It won't recognize the syntax.