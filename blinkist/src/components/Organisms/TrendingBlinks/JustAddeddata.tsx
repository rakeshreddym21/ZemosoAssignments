import image_1 from "../../Atoms/images/7.png";
import image_2 from "../../Atoms/images/8.png";
import image_3 from "../../Atoms/images/9.png";
import api from "../../../api/api";
const just = `{"just":[
    {"id":7,"src":"${image_1}","name":"The Lonely Century", "author":"NoreenaHertz", "duration":"15-minute read","noOfReads":"1.9k reads"},
{"id":8,"src":"${image_2}","name":"Eat Better, Feel Better", "author":"GiadaDeLaurentiis", "duration":"7-minute read", "noOfReads":"3k reads"},
{"id":9,"src":"${image_3}","name":"Dropshipping", "author":"JamesMoore", "duration":"8-minute read","noOfReads":"5k reads"}

]}`;

const justadded = JSON.parse(just);
const JustAddedData = justadded.just;
// const justadded =  await api.get(`\justadded`);
// const JustAddedData = justadded.data;

export default JustAddedData;
