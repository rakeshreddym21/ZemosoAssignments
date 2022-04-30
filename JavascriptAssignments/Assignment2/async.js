//Using Promises
function getData(uId) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = false;
      if (!error) {
        console.log("Fetched the data!");
        resolve("skc@gmail.com");
      } else {
        console.log("Cant fetch the data!");
        reject("Something went Wrong!!");
      }
    }, 4000);
  });
}

async function init() {
  console.log("start");
  let email = await getData("skc");
  console.log("Email id of the user id is: " + email);
  console.log("end");
}
init();
