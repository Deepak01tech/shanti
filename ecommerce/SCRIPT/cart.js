let navbar = document.getElementById("navbar");
import nav from "../SCRIPT/nav.js";
nav(); // Call the navigation function
navbar.innerHTML = nav();

let main = document.getElementById("main");
//let total = socument.getElementById("total");

let cart_data = JSON.parse(localStorage.getItem("cart_data"));
// console.log(cart_data)
let count = 1;
let totalval=0;
let total = document.getElementById("total");

// cart_data.map((el) => {
//   totalval += el.price * count;
// });


 //total.innerText = "Total: $" + totalval;
display2(cart_data)


function display2(data) {
  main.innerHTML = "";
  data.map((el, index) => {
    totalval+=el.price*el.count;
    let div = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = el.title;
    let price = document.createElement("h3");
    price.innerText = "Price: " + el.price;
    let img = document.createElement("img");
    img.src = el.image;

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.addEventListener("click", () => {
      deleteItem(index);
    });

    let add= document.createElement("button");
    add.innerText = "+"  ;
    let text =document.createElement("h3");
    text.innerText = count;
    add.addEventListener("click", () => {
      //count ++;
      add(el)
       //text.innerText = count;
    });

    let sub = document.createElement("button");
    sub.innerText = "-" ;



    sub.addEventListener("click", () => {
      sub(el)
    });


    div.append(img, title, price, del, add, sub, text, total);

    main.append( div);
  });


}




 function deleteItem(index) {
   let cart_data = JSON.parse(localStorage.getItem("cart_data"));
   cart_data.splice(index, 1);
   localStorage.setItem("cart_data", JSON.stringify(cart_data));
   display2(cart_data);
 }

 function add(item)
 {
  let exist = cart_data.find((el) => el.id === item.id);
  if(exist){
    exist.count++;
  }else{
    item.count = 1;
    cart_data.push(item);
  }
  localStorage.setItem("cart_data", JSON.stringify(cart_data));
  display2(cart_data);
 }


