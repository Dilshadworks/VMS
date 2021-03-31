import React from 'react'
import './style.css';
function VisitorThead({TheadItem}) {
  return (
    <>
        {TheadItem.map((item , i)=>{
                  return <th>{item}</th>
             })}
</>
  )
}
export default VisitorThead
