import image_1 from "../../Atoms/images/1.png";
import image_2 from "../../Atoms/images/2.png";
import image_3 from "../../Atoms/images/4.png";
import image_4 from "../../Atoms/images/5.png";
import image_5 from "../../Atoms/images/6.png";
import image_6 from "../../Atoms/images/9.png";

const trending = `{"trending":[{"id":1,"src":"${image_1}","name":"Bring Your Human to Work", "author":"Erica Keswin", "duration":"13-minute read","noOfReads":"1.9k reads"},
{"id":2,"src":"${image_2}","name":"Beyond Entrepreneurship 2.0", "author":"JimCollins", "duration":"15-minute read","noOfReads":"2k reads"},
{"id":4,"src":"${image_3}","name":"The Fate of Food", "author":"AmandaLittle", "duration":"18-minute read","noOfReads":"16k reads"},
{"id":5,"src":"${image_4}","name":"Lives of the Stoics", "author":"RyanHoliday", "duration":"23-minute read","noOfReads":"1k reads"},
{"id":6,"src":"${image_5}","name":"Loving Your Business", "author":"DebbieKing", "duration":"5-minute read","noOfReads":"8k reads"},
{"id":9,"src":"${image_6}","name":"Dropshipping", "author":"JamesMoore", "duration":"8-minute read","noOfReads":"5k reads"}
]}`;

const trendingblinks = JSON.parse(trending);
const TrendingBlinksData = trendingblinks.trending;
export default TrendingBlinksData;
