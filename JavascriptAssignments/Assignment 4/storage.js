window.onload=()=>{
     print();
}


function print() {
  
  if (sessionStorage.sessioncount == undefined) {
    sessionStorage.sessioncount = 0;
  }
  if (localStorage.localcount == undefined) {
    localStorage.localcount = 0;
  }
  document.querySelector(
    "#display"
  ).innerHTML = `Session Score:  ${sessionStorage.sessioncount} times 
       Local Score:  ${localStorage.localcount} times`;
}
function increaseSession() {
  if (sessionStorage.sessioncount != undefined) {
    sessionStorage.sessioncount = parseInt(sessionStorage.sessioncount) + 1;
  } else {
    sessionStorage.sessioncount = 1;
  }
  print();
}
function increaseLocal() {
  if (localStorage.localcount != undefined) {
    localStorage.localcount = parseInt(localStorage.localcount) + 1;
  } else if (localStorage.localcount == undefined) {
    localStorage.localcount = 1;
  }
  print();
}
