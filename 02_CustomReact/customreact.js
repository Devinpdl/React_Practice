
const reactElement = {
    type: 'a' , // the type of the React element, can be 'div' or 'p'
    props: {
        href: 'https:www.youtube.com',
        target:'_blank',
        // children: ['Click here for Youtube']
        //Below we use  if(propName==='children') continue; just for sake of discarding the execution
        //from props if coder defined children inside props.
    },
    children: 'Click me to visit Youtube' //It is the content to be placed inside the element.

}
const mainContainer =document.querySelector('#root');

customRender(reactElement,mainContainer) //It do expect what to inject at first and then where to inject it.
//it which takes two params first one is the react element and 
//second one is where should this element be rendered i.e., in what container.
//Simply means, take the element from reactElement and do inject it inside mainContainer.
//Here we are giving id root from index.html file.
//So now whenever this script runs it will look for the div with id="root" and
//then it will place our Element there.
//In this case we are passing the element that will be rendered into our HTML page with id root
//We could also pass a container in which our component will be placed inside of.
function customRender(reactElement,container){
    /*
    // Create a new DOM element based on the type specified in reactElement
    const domElement = document.createElement(reactElement.type);
    //It's of above = Here, we're making moduler function so we're creating element through reactElement.
    //Also, directly reactElement is not giving us that value so we use .type property.
    //Properties are nothing but they're key-value pair.  
    // Set the innerHTML of the element to the content provided in reactElement.children
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    //Here, we're setting the properties href and we're taking value through methods; reactElement.props.href.
    domElement.setAttribute('target',reactElement.props.target);
    container.appendChild(domElement);
    */

    //Now, we create the above function little moduler through loop based.

   const domElement= document.createElement(reactElement.type);
   domElement.innerHTML= reactElement.children;
   // Loop through each property in reactElement.props
   for (let propName in reactElement.props) {
    // Skip the loop iteration if the property is 'children'
                if(propName==='children') continue;
                
    // Set the attribute of the DOM element based on the current property in the loop
    // The attribute name is taken from propName, and the value from reactElement.props[propName]
                domElement.setAttribute(propName,reactElement.props[propName]);
               // Here, propName is the key (property name) in reactElement.props, and reactElement.props[propName]
               // is the corresponding value. The square brackets are used to dynamically access the value of
               // the property with the key specified by propName.

               container.appendChild(domElement);
 } 
}
