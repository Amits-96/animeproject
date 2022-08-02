import { useEffect, useState } from "react";
import React  from 'react'
import Animelist from "./Animelist";

function Home() {
    let [animes, setAnimes] = useState(null);


     useEffect(() => {
          fetch("https://api.jikan.moe/v4/anime")
               .then((resopnse) => {
                    return resopnse.json();
               })
               .then((fetchedData) => {
                     setAnimes(fetchedData.data);
               })
     }, [])

     console.log(animes);
  return (
    <div className="ovr">
  
      {animes && <Animelist animes={animes} title="All Animes"/>}
         
    </div>
  )
}

export default Home