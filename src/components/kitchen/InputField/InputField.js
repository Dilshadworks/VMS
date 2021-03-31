import React from 'react';
import Style from "./Style.css";

export default function InputField({type , name, handle}) {
    return (
        <>
          <input type={type} className="Input" name={name} onChange={handle}/>  
        </>
    )
}
