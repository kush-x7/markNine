import React, {useState} from 'react';
import "./styles.css";

const goodMusicList = {
  Papon: [
    { name: "Khud Se", rating: "5/5" },
    { name: "Moh Moh Ke Dhaage", rating: "4/5" },
    { name: "Mujhe Kaise Pata Na Chala", rating: "4/5" }
  ],

  Arijit_Singh: [
    { name: "Agar Tum Saath Ho", rating: "5/5" },
    { name: "Khairiyat", rating: "3/5" },
    { name: "Tum Hi Ho", rating: "4/5" }
  ],

  Jubin_Nautiyal: [
    { name: "Kinna Sona", rating: "4/5" },
    { name: "Taaron Ke Shehar", rating: "3/5" },
    { name: "Lut Gaye", rating: "4/5" }
  ]

};

let titles = Object.keys(goodMusicList);


export default function App() {

  const [artist, setArtist] = useState("Papon");
  function aristClickhandler(clickedArtist){
    setArtist(clickedArtist);
  }


  return (
    <div className="App">
      <h1>📻 goodmusic</h1>
      <p>Checkout my favorite songs. Select the artist to get started</p>

      { titles.map(singleTitle => {
          return <button key={singleTitle} onClick = {() => aristClickhandler(singleTitle)}> <strong>{singleTitle}</strong> </button>
        }) }

      <hr />

      <ul>
        {goodMusicList[artist].map(song => {
          return <li key={song.name}> <strong>{song.name}</strong> <em>{song.rating}</em> </li>
        })}
      </ul>
      

      
    
    </div>
  );
}
