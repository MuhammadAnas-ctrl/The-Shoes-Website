

const user = document.querySelector(".user")
const aside = document.querySelector(".aside")
const over = document.querySelector(".over");
const side = document.querySelector(".side");
const menu = document.querySelector("#menu-btn");
const ul = document.querySelector(".ul")
const all = document.querySelector("#All");


menu.addEventListener("click",()=>{
    ul.classList.toggle("lef")
    menu.className.toggle('fa-solid fa-xmark');
})
user.addEventListener("click",()=>{
    aside.classList.toggle("spp")
})

over.addEventListener("click",()=>{
    side.classList.toggle("sdd")
})



let ArrProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "Adidas-black.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 400,
    image: "Adidas-Blue.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 150,
    image: "Adidas-White.png",
  },
  {
    id: 4,
    name: "Product 4",
    price: 90,
    image: "Nike-blue.png",
  },
  {
    id: 5,
    name: "Product 5",
    price: 100,
    image: "Nike-White.png",
  },
  {
    id: 6,
    name: "Product 6",
    price: 100,
    image: "Nike-black.png",
  },
];


function CharAt(){
    ArrProducts.forEach((item,key)=>{
        const main = document.getElementById("main")
        const card = document.createElement("div")
        // console.log(key);

        card.innerHTML = `
        <div id="card">
        <img loading="lazy" src="Images/${item.image}"/>
        <h2>${item.name}</h2>
        <p id="Price">Price : &nbsp;<small>$</small>${item.price}</p>
        <span id="left-right">
        <button id="See" class="see1">See More</button>
      
        <button id="See" class="dots"><i class="fa-solid fa-ellipsis-vertical"></i></button>
          <div id="three">
        <li><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;&nbsp;&nbsp; Add To Cart</li>
        <li>?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Question</li>
        <li id="a1"><i class="fa-solid fa-flag"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Report</li>
        </div>
 </span>
        <button id="Add">Add To Cart</buton>
        
       
        </div>
        `;
        (key)
      

        main.appendChild(card)
        
    })
}

CharAt()

const loading = document.querySelector(".Loading")

window.addEventListener("load",()=>{
  loading.style.display = "none"
})

const swtch = document.querySelector("#mycheck")
const asd = document.querySelector(".aside");

swtch.addEventListener("click",()=>{
  let ele = document.body
  ele.classList.toggle("bdd")
  if(ele.style.backgroundColor === "#292929"){
    asd.style.color = "#000"
  }
  else{
    asd.style.color = "#000"
  }
})

const p = document.querySelector("#pppp")
const date = new Date()
const year = date.getFullYear()

p.innerHTML = `
&copy; ${year} The Shoe Web | By M.Anas. All Right Reserved.
`;