import React from 'react'

const DropDownItem = () =>{
  return (
    <div>
        <li className='dropdown-items'>
            <img src={props.img}> </img>
            <a> {props.text} </a>
        </li>
      
    </div>
  )
}

export default DropDownItem;
