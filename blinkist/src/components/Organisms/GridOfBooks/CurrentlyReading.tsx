import image_1 from "../../Atoms/images/1.png";
import image_2 from "../../Atoms/images/11.png";
import image_3 from "../../Atoms/images/3.png";
import image_4 from "../../Atoms/images/4.png";
import image_5 from "../../Atoms/images/5.png";
import image_6 from "../../Atoms/images/6.png";
import image_7 from "../../Atoms/images/7.png";
import image_8 from "../../Atoms/images/8.png";
import image_9 from "../../Atoms/images/9.png";
import React, { useState,useEffect } from "react";
import axios from "axios";


// const CurrentlyReading = () => {

//     const [reading, setCurrentlyReading] = useState([]);

//     useEffect(() => {
//       axios.get("http://localhost:3001/currentlyreading").then((res) => {
//         setCurrentlyReading(res.data);
//       });
//     }, []);
    
  
// }
// export default CurrentlyReading;
const cr = `
 {"currentlyreading":[{"id":1,"src":"${image_1}","name":"Bring Your Human to Work", "author":"Erica Keswin", "duration":"13-minute read","noOfReads":"1.9k reads"},
{"id":2,"src":"${image_2}","name":"Employee to Entrepreneur", "author":"SteveGlaveski", "duration":"15-minute read","noOfReads":"2k reads"},
{"id":3,"src":"${image_3}","name":"Doesn’t Hurt to Ask", "author":"TreyGowdy", "duration":"13-minute read","noOfReads":"1.2k reads"},
{"id":4,"src":"${image_4}","name":"The Fate of Food", "author":"AmandaLittle", "duration":"18-minute read","noOfReads":"16k reads"},
{"id":5,"src":"${image_5}","name":"Lives of the Stoics", "author":"RyanHoliday", "duration":"23-minute read","noOfReads":"1k reads"},
{"id":6,"src":"${image_6}","name":"Loving Your Business", "author":"DebbieKing", "duration":"5-minute read","noOfReads":"8k reads"},
{"id":7,"src":"${image_7}","name":"The Lonely Century", "author":"NoreenaHertz", "duration":"15-minute read","noOfReads":"1.9k reads"},
{"id":8,"src":"${image_8}","name":"Eat Better, Feel Better", "author":"GiadaDeLaurentiis", "duration":"7-minute read", "noOfReads":"3k reads"},
{"id":9,"src":"${image_9}","name":"Dropshipping", "author":"JamesMoore", "duration":"8-minute read","noOfReads":"5k reads"}
]}`;

const currentreading = JSON.parse(cr);
const CurrentlyReading = currentreading.currentlyreading;
export default CurrentlyReading;
