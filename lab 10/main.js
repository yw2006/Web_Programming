function callAthorFn(onotherFn) {
  console.log("this is call other function");
  onotherFn();
}
let y = () => {
  console.log("y");
};
callAthorFn(y);

var arr = [100, 10, 200, 300, 400, 500, 600, 700, 800, 900];
arr.map((x) => console.log(x));
console.log("the poped element");
console.log(arr.pop());
console.log("the array after poped");
arr.map((x) => console.log(x));
console.log("the pushed element is \n ahmed,mohamed");
arr.push("ahmed", "mohamed");
arr.map((x) => console.log(x));
arr.splice(4, 0, "removed");
console.log("after removing from4 and remove 3 elements");
arr.map((x) => console.log(x));
console.log("the sifted elements is ", arr.shift());
arr.map((x) => console.log(x));
console.log("the and unshift elements is ", 10);
arr.unshift(10);
arr.map((x) => console.log(x));
console.log(arr.lastIndexOf(10));
// lecture today
const content = document.getElementById("content");
console.log(content);
content.textContent = " hello world ahmed";
const h1 = document.createElement('h1');
const text = document.createTextNode('yousef walid');
content.after(h1.appendChild(text));
const submitType = document.getElementById("submitType");
submitType.addEventListener('click',()=>{
    alert('hello from alert');
})
