//Using CallBack
function getData(uId, CallBack) {
  setTimeout(() => {
    console.log("Fetched the data!");
    email = "skc@gmail.com";
    CallBack(email);
  }, 4000);
}
function print(email) {
  console.log("Email id of the user id is: " + email);
  console.log("end");
}
console.log("start");
getData("skc", print);
