import image_1 from "../../Atoms/images/1.png";
import image_2 from "../../Atoms/images/11.png";
import image_3 from "../../Atoms/images/3.png";

const featured = `{"featured":[{"id":1,"src":"${image_1}","name":"Bring Your Human to Work", "author":"Erica Keswin", "duration":"13-minute read","noOfReads":"1.9k reads"},
{"id":2,"src":"${image_2}","name":"Employee to Entrepreneur", "author":"SteveGlaveski", "duration":"15-minute read","noOfReads":"2k reads"},
{"id":3,"src":"${image_3}","name":"Doesn’t Hurt to Ask", "author":"TreyGowdy", "duration":"13-minute read","noOfReads":"1.2k reads"}
]}`;

const featuredblinks = JSON.parse(featured);
const FeaturedAudioBlinksData = featuredblinks.featured;
export default FeaturedAudioBlinksData;
