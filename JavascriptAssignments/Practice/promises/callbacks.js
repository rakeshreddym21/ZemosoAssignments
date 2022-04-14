// const posts = [
//   { title: "post One", body: "This is post one" },
//   { title: "post Two", body: "This is post two" },
// ];
// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 8000);
// }
// function createpost(post,callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }
// createpost({ title: "post Three",
// body: "This is post Three" },getPosts);
function getData(uId) {
  setTimeout(() => {
    console.log("Fetched the data!");
    console.log("Email id of the user id is: skc@gmail.com");
    // return "skc@gmail.com";
  }, 4000);
}

console.log("start");
async function init() {
   await getData("skc");
}
init();
console.log("end");
