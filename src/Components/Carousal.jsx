import React, { useEffect, useState } from 'react'

const Carousal = () => {

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
    <div>
        <h1> this is carousal </h1>

      
    </div>
  )
}

export default Carousal;
