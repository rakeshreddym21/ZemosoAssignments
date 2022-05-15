import image_8 from "../../Atoms/images/8.png";
const fr = `{"finishedreading":[{"id":8,"src":"${image_8}","name":"Eat Better, Feel Better", "author":"GiadaDeLaurentiis", "duration":"7-minute read", "noOfReads":"3k reads"}
]}`;

const finishedreading = JSON.parse(fr);
const FinishedReading = finishedreading.finishedreading;
export default FinishedReading;
