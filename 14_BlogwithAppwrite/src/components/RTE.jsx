//RTE means real-time editor to edit or add text or number inside the posts..
//Here, we do track input form.. On the basis of that we do design slug and if there's any space;
//we replace it with underscore(_) dash(-) ..
import React from 'react'

//First we do need editor from tinymce
import { Editor } from '@tinymce/tinymce-react'

import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  //Here, the control comes from react-hook; and this control is responsible for transforming the state
  //for eg; transformation of state from components to form;

  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    //contoller does pass the control from here to another..
    name={name || "content"} //If there's name we do take name else will take content..
    control={control} //This control is given by parent element..So that it can take full control
    //like; whatever the events is happenning, whatever the states is and what's value inside of that state
    // etc etc control will be taken..
    render={({field: {onChange}}) => (
      // Inside field whatever event tracking you want like onChange, onBlur then you can do it..
      //Means; whatever may get changes inside the field you do now inform and do render...
      //Now, you can do render the field like; Input field or Editor field etc etc..
        <Editor
        initialValue={defaultValue}
        apiKey='9tn2an0g782dkpod1s0qtbwx8hysven2rv5p4u2tg7pqujbb'
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        //Here, whatever the changes 
        />
    )}
    />

     </div>
  )
}
