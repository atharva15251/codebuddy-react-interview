import React from 'react';
import { TbBrandGithubCopilot } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react"
import { CgLogIn } from 'react-icons/cg';

function SearchBar() {

  const [data, setData] = useState("");
  const [text, setText] = useState(false);

  const logData =(e)=>{
   
    setData(e.target.value);
  }

  return (
    <>
      <div className="flex justify-center items-center py-40">
            <input type="text" placeholder="Search the web " className="border-solid border-4 rounded-full px-40 h-12 bg-slate-200 text-left relative text-align: left flex flex-wrap" onChange={logData}></input>  
            <button className="px-6 m-2 h-12 w-20 rounded-full bg-slate-200" onClick={(e)=>{
                setText(e.target.value);
                console.log(data);
            }}> <TbBrandGithubCopilot /></button>
        </div>
    </>
  )
}

export default SearchBar;
