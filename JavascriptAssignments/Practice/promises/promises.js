const posts = [
  { title: "post One", body: "This is post one" },
  { title: "post Two", body: "This is post two" },
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 100);
}
function createpost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("something went wrong!");
      }
    }, 2000);
  });
}
// createpost({ title: "post Three", body: "This is post Three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));
// const promise1=Promise.resolve('Hello World');
// Async Wait
async function init(){
    await createpost({ title: "post Four", 
   body: "This is post Three" });
   getPosts();
}
init();