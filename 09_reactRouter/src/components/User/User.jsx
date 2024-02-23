import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom



function User() {
    const { userid } = useParams(); // Destructure userid from useParams()
    //Using this whatever in the url with slash/ user, either number or string it'll show up in the page..
    return (
        <div className='bg-slate-300
     text-sky-700 text-6xl p-6 text-center '>User: {userid}</div>
    );
}

export default User;
