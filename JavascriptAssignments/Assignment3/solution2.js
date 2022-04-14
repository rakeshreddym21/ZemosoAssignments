//Rewrite the following code using template literals
// const printBill = (name, bill) => {
//   return "Hi" + name + ", please pay:" + bill;
// };
const printBil = (name, bill) => {
  return `Hi ${name} please pay: ${bill}`;
};
console.log(printBil("Jeevan", 1000));
