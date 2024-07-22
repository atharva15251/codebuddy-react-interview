import React from "react";
import SearchBar from "./SearchBar";
import ImageSlider from "./ImageSlider";
import { useEffect, useState } from "react";
import CarousalCard from "./CarousalCard";

const Body = () => {

  const [newsList, setNewsList] = useState([]);

    useEffect (()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch("https://www.bing.com/hp/api/v1/carousel?&format=json&ecount=20&efirst=0&&");
        const json = await data.json();
        console.log(json?.data[0]?.items);
        setNewsList(json?.data[0]?.items)
    }
  
  return (
    <>
      <div className="body-container relative ">
        <img
          className="h-full w-full"
          src="https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&cs=tinysrgb&w=600"
        ></img>
        <div className="btn absolute inset-x-1/2 inset-y-1/4 ">
        <div className=" w-full">
          <SearchBar />
          
          </div>
        </div>
        
        <div className="carousal card flex flex-wrap"> 
        {newsList.map((news)=>(<CarousalCard newsData={news}/>))}
        </div>

        <div className="carousal flex">
        
        <ImageSlider />
        <ImageSlider />
        <ImageSlider />
        <ImageSlider />
        </div>
      </div>
    </>
  );
};

export default Body;
