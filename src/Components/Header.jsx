import React, { useState,useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiCloudMoon, CiLogin } from "react-icons/ci";
import { BsMicrosoft } from "react-icons/bs";
import { GoCopilot } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { BsGiftFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { LuLanguages } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePrivacyTip } from "react-icons/md";
import HamburgerMenu from "./HamburgerMenu";
import DropDownItem from "./DropDownItem";

const Header = () =>{

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    let menuRef = useRef();

    useEffect(()=>{
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                setHamburgerOpen(false);
        }
        };
        document.addEventListener("mousedown", handler);

         return ()=>{
             document.removeEventListener("mousedown",handler);
         }
    });

    const toggleHamburger = () =>{
        console.log("menu clicked", hamburgerOpen)
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <>
            <div>
            <button className="flex items-center flex-wrap"> </button>
            <ul className="flex p-4 m-2 cursor-pointer">
                <li className="px-20 flex"> <BsMicrosoft size="24px"/> Microsoft Bing </li>
                <li className="px-10 flex"> <GoCopilot size="24px"/> Copilot</li>
                <li className="px-8"> Images </li>
                <li className="px-8"> Videos</li>
                <li className="px-8"> Shopping</li>
                <li className="px-8"> Maps</li>
                <li className="px-8"> News </li>
                <li className="px-8 flex"> <CiCloudMoon size="24px"/> Weather</li>
                <li className="px-10 flex rounded-full"> Sign In <CiUser size="24px"/></li>
                <li className="px-10 flex rounded-full"> Rewards <BsGiftFill size="24px"/></li>
                <div ref={menuRef}>
                <button className="Hamburger" onClick={toggleHamburger}><GiHamburgerMenu /> </button>
                </div>
            
            {hamburgerOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex flex-wrap"><IoIosSettings /> Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex flex-wrap"><LuLanguages/> Languages</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex flex-wrap"><SlLocationPin/> Location</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex flex-wrap"><FaHistory/> Search history</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex flex-wrap"><CgProfile/> My Bing</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex flex-wrap"><MdOutlinePrivacyTip/> Privacy</a>
            </div>
          )}
          </ul>
          </div>
        </>
    )
}

export default Header;