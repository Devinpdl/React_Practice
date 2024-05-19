// import React, {useCallback} from 'react'
// import {useForm} from 'react-hook-form'
// import {Button, Input, Select, RTE} from "../index"

// //we need to collect data and send so let's import appwrite too;
// import appwriteService from "../../appwrite/config";

// import {useNavigate} from 'react-router-dom'
// import {useSelector} from 'react-redux'


// function PostForm({post}) {
//      //We need some info from useForm;
//     const {register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         //passing objects inside useForm;
//         defaultValues: {
//             //For defaultValues, it needs posts; for that we do some queries..
//             //So that we may know, users come here to edit or to give new values;
//             //For, new values; just like title is empty is okay but if comes for edit then we've to give
//             //..default values.. And default values are those values which comes from database/appwrite..
//             //Now, if we want to reuse the form then, the values comes from where?
//             //Values comes only to those whoever uses this form by clicking on edit button or so..
//             //For this reason we pass onject name post inside PostForm() .. 
//             title : post?.title || '', //If there's a post in props (comes when user clicks Edit) 
//             //then take its value from title else make it blank.
//             content: post?.content || '',
//             slug : post?.slug || '',
//             status: post?.status || 'active', // we're setting status value as active by default..

//         },
       
//     });
//     const navigate = useNavigate();
//     //Now, we do call useSelector to get userData
//     const userData = useSelector((state) => state.auth.userData)
//     //Now, if user submits the form then it passes the data..\
//     //There's two scenarios; 1st) there may be values inside post already then do update it;
//     //2nd) If there's no any values inside post then do new entries;

//     const submit = async (data) => {
//            // Check if post exists and has a non-null $id property
//            if (!userData) {
//             console.error('Error: User data not found');
//             return;
//         }
//         try {
//             let dbPost;

//             if (post && post.$id) {
//                 const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
                
//                 if (file) {
//                     await appwriteService.deleteFile(post.featuredImage);
//                 }

//                 dbPost = await appwriteService.updatePost(post.$id, {
//                     ...data,
//                     featuredImage: file ? file.$id : undefined,
//                 });
//             }
//             else {
//                 const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

//                 if (file) {
//                     const fileId = file.$id;
//                     data.featuredImage = fileId;
//                     dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
//                 }
//             }

//             if (dbPost) {
//                 navigate(`/post/${dbPost.$id}`);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

// //       if (post) {
// //           const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
// //           //deleting old image
// //           if (file) {
// //              // post.featuredImage store file id's
// //               appwriteService.deleteFile(post.featuredImage);
// //           }
// //            //updating the post
// //            // post.$id is slug
// //           const dbPost = await appwriteService.updatePost(post.$id, {
// //               ...data,
// //               featuredImage: file ? file.$id : undefined,
// //           });

// //           if (dbPost) {
// //               navigate(`/post/${dbPost.$id}`);
// //           }
// //       } else {
// //          // user is creating new form
// //          const file = await appwriteService.uploadFile(data.image[0]);

// //           if (file) {
// //               const fileId = file.$id;
// //               data.featuredImage = fileId;
// //               console.log("User id ", userData.$id)
// //             // sending other properties
// //             // spread out id done bz when forms are created we don't have user data but we have userId field in 
// //             // post, but we brought userData from store
// //               const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

// //               if (dbPost) {
// //                   navigate(`/post/${dbPost.$id}`);
// //               }
// //           }
// //       }
// //   };

//     // const submit = async (data) => {
//     //   //Here, data object contains the values of the form fields.
//     //     if(post){
//     //         //For update; 1st) we do handle file; we've already made uploadfile in dbService inside config.js
//     //       const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) :null; //If there's a file then upload it else make it null;

//     //       //data gives direct access of images..

//     //       //we've to save that file inside another variable too..
//     //       //If there may be case of having post previously then, we've to delete old images too;

//     //       if(file){
//     //         //If once the file or images is uploaded now you've to delete old images too..
//     //         //For that we need to get old images..
//     //         // const oldImages = await
//     //         appwriteService.deleteFile(post.featuredImage)
//     //         //Here, inside post.featuredImages we've stored whole file's id so we delete it using appwriteService..
            
//     //         //Finally, here if there's post then the file is uploaded and deleted too..
//     //       }
//     //       //Now, we've to update the post..
//     //       const dbPost = await appwriteService.updatePost(post.$id, {
//     //         //Here, post.$id is the slug.. does work so accordingly without much headache..
//     //         ...data,
//     //         //We're spreading the data so as;
//     //         /* we want to update the existing post with the new data, but we also want to keep any
//     //         existing properties that are not included in the data object. To achieve this, we use the
//     //         spread operator (...) to spread the data object into a new object, 
//     //         and then add any additional properties that we want to update. 
//     //         In this case, we are updating the featuredImage property with the new file ID, 
//     //         if a new file was uploaded.
//     //         */
//     //        //Now, we've to overwrite the field of featuredImage;
//     //         featuredImage: file ? file.$id : undefined,
//     //         //We're inserting unique id inside featuredImage..

//     //         //Now, Once we get dbPost then give user to navigate..
//     //         if(dbPost) {
//     //           navigate(`/post/${dbPost.$id}`);
//     //         //We're navigating from cureent post to a new post with the ID.
//     //         }
//     //       } )
//     //     }
//     //     else{
//     //       //If there was not post then, we do create a new post;
//     //       //For new post; //1st) DO upload the file;
//     //       // const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) :null
//     //       const file = await appwriteService.uploadFile(data.image[0]);

//     //       if(file){
//     //        const fileId= file.$id;
//     //        data.featuredImage = fileId;
//     //        //We're updating the fileId inside our data..
//     //        //We're only updating one properties of data;
//     //        //Now, we're sending remaining properties..

//     //        const dbPost=await appwriteService.createPost({
//     //         //For that; we have to give all data inside createPost but here we're passing objects;
//     //         //We're passing data as object..
//     //         ...data,
//     //         //We're spreading the data so as;
//     //         //coz the forms which is created will not have any user data;
//     //         //Now, we give userId field;
//     //         userId: userData.$id,
//     //         //We've bought userData from store using Selector above;

//     //        })
//     //        if(dbPost){
//     //         navigate(`/post/${dbPost.$id}`)
//     //        }
//     //       }
//     //     }

//     // }

//     // //We're creating a method to transform the slug;
//     // //There's two values inside url; title and slug;
//     // //For that, there must be a method to watch the title and generate the values inside the slug;
//     // //If user gives space inside url then; we've to convert space into dash(-).

//     const slugTransform = useCallback((value) => {
//       if(value && typeof value === 'string') {
//         return value
//         .trim()
//         .toLowerCase()
//         .replace(/^[a-zA-Z\d\s]+/g, '-')
//         .replace(/\s/g,'-') // Means; globally check the space and if there's space replace it with dash..
//         //If none of the above is there; then we do return empty string;
//     }
//         return "";
//     },[])

//     //Now, how to use above slug transform?
//     //For that we use React.useEffect
//     //We're using useEffect to watch the title and generate the slug;
//     React.useEffect(() => {
//       //Now, for that we make subscription;
//       //We're subscribing to the title and whenever the title changes; we're calling the slugTransform method;
//       //We're calling the slugTransform method and passing the title as argument;

//       const subscription = watch((value, {name}) =>{
//         //We're calling the slugTransform method and passing the title as argument;
//         if(name==='title'){
//           setValue('slug', slugTransform(value.title),
//              {shouldValidate:true});
//         }
//       }); //We're storing the watch method inside subscription variable;

//       return () => subscription.unsubscribe();
//         //We get the method return method and can use callback inside useEffect in react;
//         //And, for optimization we do use unsubscribe so as it'll not call everytime by looping..

//     }, [watch,slugTransform, setValue])
   
//   return (
//     <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//       {/* //We've defined div so as left part and right part. left part is taking 2/3rd of width */}
//             <div className="w-2/3 px-2">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className="mb-4"
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                     label="Slug :"
//                     placeholder="Slug"
//                     className="mb-4"
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
//                 <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>
//             <div className="w-1/3 px-2">
//                 <Input
//                     label="Featured Image :"
//                     type="file"
//                     className="mb-4"
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("image", { required: !post })}
//                 />
//                 {post && (
//                     <div className="w-full mb-4">
//                         <img
//                             src={appwriteService.getFilePreview(post.featuredImage)}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className="mb-4"
//                     {...register("status", { required: true })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//                     {post ? "Update" : "Submit"}
//                 </Button>
//             </div>
//         </form>
//     );
// }

// export default PostForm

import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, RTE } from '../index';
import appwriteService from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            content: post?.content || '',
            slug: post?.slug || '',
            status: post?.status || 'active',
        },
    });

    const navigate = useNavigate();
    // const userData = useSelector((state) => state.auth.userData);
    const userData = useSelector((state) => state.auth);

    const submit = async (data) => {
        if (!userData) {
            console.error('Error: User data not found');
            return;
        }

        try {
            let dbPost;

            if (post && post.$id) {
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

                if (file) {
                    await appwriteService.deleteFile(post.featuredImage);
                }

                dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                });
            } else {
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
                }
            }

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/^[a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-');
        }
        return '';
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input label="Title :" placeholder="Title" className="mb-4" {...register('title', { required: true })} />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register('slug', { required: true })}
                    onInput={(e) => {
                        setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues('content')} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register('image', { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select options={['active', 'inactive']} label="Status" className="mb-4" {...register('status', { required: true })} />
                <Button type="submit" bgColor={post ? 'bg-green-500' : undefined} className="w-full">
                    {post ? 'Update' : 'Submit'}
                </Button>
            </div>
        </form>
    );
}

export default PostForm;
