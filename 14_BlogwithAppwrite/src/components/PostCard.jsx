import React from 'react';

//We do need information and this comes from services. so we do import it
import appwriteService from '../appwrite/config'
//we've to take it coz we don't have information inside our state
//We import this service coz we've to do some Queries.. and this service will make queries okay?

//It also takes Link so we do import it..
import {Link} from "react-router-dom"


function PostCard({
    //We've to take props by using $ coz it's issue of an appwrite?..
    $id,
    title,
    featuredImage,
}) {
  return (
   //Whole Card must be clickable so we do use link;
   <Link to={`/post/${$id}`}>
    {/* Link does help to navigate to the desired page without giving full url..
    for eg; above does takes us to the post with specified id's url ..
    Also don't be confused we used ${$id} coz varaible id in appwrite have to use by $ sign..
    ..So, It's an issue of appwrite don't be confused*/}
    {/* Now, we do work for what to display inside the link; */}
    <div className="w-full bg-slate-200 rounded-xl p-4">
        <div className='w-full justify-center mb-4 '>
            {/* We've to show image here */}
            <img src={appwriteService.getFilePreview(featuredImage)} alt = {title}
            className='rounded-xl' />
            {/* We cannot use src={featuredImage} directly, This is because featuredImage is not a direct URL 
            to the image file, but rather a reference to the image file stored in the Appwrite backend. 
            The appwriteService.getFilePreview method takes this reference and returns a URL to the 
            preview image that can be used as the src attribute of the img element. */}
        </div>
        {/* //Once this div does end we do give title below of it; */}\
        <h1 className="text-xl font-bold ">{title}</h1>
        {/* //Here, we put the value {title} inside h1 element. don't be confused.. */}
    </div>

   </Link>
  )
}

export default PostCard