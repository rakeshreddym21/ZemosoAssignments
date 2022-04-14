console.log("This is Callback");

const students = [
  { name: "Rakesh", sub: "java" },
  { name: "Jeevan", sub: "Javascript" },
];

function enrollstudent(student,callback) {
  setTimeout(() => {
    students.push(student);
    console.log("Enrolling");
    callback();
  }, 3000);
}
function getStudents() {
  setTimeout(() => {
    let output = "";
    console.log("Fetching");
    students.forEach(function(student){
        
        output=student.name;
        console.log("."+output);

    })
  }, 4000);
} 
let newStudent={name:"Akil",sub:"HTML"}
enrollstudent(newStudent,getStudents);
//  getStudents();