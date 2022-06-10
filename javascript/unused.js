// ------------- Where in index.js

/* function initiate() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const container = document.querySelector(".wrap-container");
  
    cartItems.forEach((item, index) => {
      const div1 = document.createElement("div");
      div1.className = "wrap-cart";
      const div2 = document.createElement("div");
      div2.className = "product-summary";
      const div3 = document.createElement("div");
      div3.className = "removebtn";
      const i = document.createElement("i");
      i.className = "fa fa-close";
      i.style.color = "#1a212e";
      div3.append(i);
      const h2 = document.createElement("h2");
      h2.innerText = item.name;
      const image = document.createElement("img");
      image.setAttribute("src", item.photo);
      const p = document.createElement("p");
      p.innerText = `${item.price}$`;
      const div4 = document.createElement("div");
      div4.className = "edit";
      const label = document.createElement("label");
      label.innerText = "Size";
      const h6 = document.createElement("h5");
      h6.innerText = item.size;
  
      div4.append(label);
      div4.append(h6);
      div2.append(div3);
      div3.append(h2);
      div3.append(image);
      div3.append(p);
      div3.append(div4);
  
      div1.append(div2);
      container.append(div1);
    });
    createSummary(cartItems);
  }
  
  function createSummary(cartItems) {
    const total = cartItems.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
  
    console.log(total);
    const div5 = document.createElement("div");
    div5.className = "wrap-cart";
    const div6 = document.createElement("div");
    div6.className = "price-summary";
    const h3 = document.createElement("h3");
    h3.innerText = "Order Summary";
    const refElemt = document.getElementById("cartContainer");
  
    const specDiv = document.createElement("div");
  
    cartItems.forEach((item, index) => {
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const div7 = document.createElement("div");
      div7.className = "line";
      p1.innerText = item.name;
      p2.innerText = `${item.price}$`;
      div7.append(p1);
      div7.append(p2);
      specDiv.appendChild(div7);
    });
    const div8 = document.createElement("div");
    div8.className = "line";
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    p3.innerText = "Shipping - DHL";
    p4.innerText = "20$";
    div8.append(p3);
    div8.append(p4);
    const div9 = document.createElement("div");
    div9.className = "striped-border";
    const div10 = document.createElement("div");
    div10.className = "line";
    const p5 = document.createElement("p");
    const p6 = document.createElement("p");
    p5.innerText = "Total";
    p6.innerText = `${total + 20}$`;
    div10.append(p5);
    div10.append(p6);
  
    div6.append(h3);
    div6.append(specDiv);
    div6.append(div8);
    div6.append(div9);
    div6.append(div10);
    div5.append(div6);
  
    refElemt.append(div5);
  }
  
  initiate();
  */





  
// ------------- Where in shop.js at the bottom

  /*
const items= [{
name: "The Allrounder",
photo: "/images/jacket-1-blue.png",
size: ["XXS", "XS", "S", "M", "L", "XL"],
prize: "180$",
color: [ {}
]
},

{
    name: "Comfy Dad",
    photo: "/images/jacket-2-orange.png",
    size: ["S", "M", "L", "EL"
    ],
    prize: "180$",
    color: [ "Orange", "Navy"
    ]
    },


    {
        name: "Mountain Mom",
        photo: "/images/jacket-3-green.png",
        size: ["S", "M", "L", "EL"
        ],
        prize: "180$",
        color: ["Light Green"]
        
        }
]

const mainShop = document.getElementById("main-shop");

function initiate (){
    items.forEach((item, index)=> {
        const section = document.createElement("section");
        section.className = `background${index}`
        const div1 = document.createElement("div");
        div1.className = `jacket-${index}`
        const div2 = document.createElement("div");
        div2.className = `jacket-image`
        const image = document.createElement("img");
        image.className = `jacket${index}img`
        const div3 = document.createElement("div");
        div3.className = `btns`
        const btn1 = document.createElement("button");
        const btn2 = document.createElement("button");
        const p1 = document.createElement("p");
        const div4 = document.createElement("div");
        const h3 = document.createElement("h3");
    }) 
}


let cartItems = [];
localStorage.setItem('cartItems', JSON.stringify(cartItems));


function addToCart(item) {
    let prevItemsInCart = JSON.parse(localStorage.get("cartItems"));
    prevItemsInCart.push(item);
    localStorage.setItem("cartItems", JSON.stringify(prevItemsInCart));
} */




// From CSS

/* Buttons jackets 
.btnblue,
.btnyellow,
.btnorange,
.btnnavy,
.btngreen {
  height: 20px;
  width: 20px;
  border-radius: 100%;
  border: none;
  margin: 5px;
  cursor: pointer;
}

.btnblue {
  background-color: rgba(57, 74, 113, 0.6);
  border: solid 2px rgba(250, 156, 75, 0);
}

.btnyellow {
  background-color: rgba(238, 223, 0, 0.5);
  border: solid 2px rgba(238, 223, 0, 0);
}

.btnorange {
  background-color: rgba(161, 66, 24, 0.6);
  border: solid 2px rgba(161, 66, 24, 0);
}

.btnnavy {
  background-color: rgba(10, 32, 66, 0.6);
  border: solid 2px rgba(10, 32, 66, 0);
}

.green-selected {
  background-color: #d9e0cd;
  border: solid 2px #1a212e;
}

.blue-selected {
  background-color: rgba(57, 74, 113, 1);
  border: solid 2px #000;
}

.yellow-selected {
  background-color: rgba(238, 223, 0, 1);
  border: solid 2px #000;
}

.orange-selected {
  background-color: rgba(161, 66, 24, 1);
  border: solid 2px #000;
}

.navy-selected {
  background-color: rgba(10, 32, 66, 1);
  border: solid 2px #000;
}

.btns {
  padding: 5px;
}
*/


 
//Dette kan muligens fjernes før innlevering

/*const btnBlueJacket = document.querySelector(".btnblue");
const btnYellowJacket = document.querySelector(".btnyellow");
const btnNavyJacket = document.querySelector(".btnnavy");
const btnOrangeJacket = document.querySelector(".btnorange");
const jacket1img = document.querySelector(".jacket1img");
const jacket2img = document.querySelector(".jacket2img");

btnYellowJacket.addEventListener ("click", pictureChangeToYellow);
function pictureChangeToYellow()
{
    jacket1img.src="/images/jacket-1-yellow.png";
    btnBlueJacket.classList.remove("blue-selected");
	btnYellowJacket.classList.add("yellow-selected");
};

btnBlueJacket.addEventListener ("click", pictureChangeToBlue);
function pictureChangeToBlue()
{
    jacket1img.src="/images/jacket-1-blue.png"
    btnYellowJacket.classList.remove("yellow-selected");
	btnBlueJacket.classList.add("blue-selected");
};

btnNavyJacket.addEventListener ("click", pictureChangeToNavy);
function pictureChangeToNavy()
{
    jacket2img.src="/images/jacket-2-blue.png";
    btnOrangeJacket.classList.remove("orange-selected");
    btnNavyJacket.classList.add("navy-selected");
};

btnOrangeJacket.addEventListener ("click", pictureChangeToOrange);
function pictureChangeToOrange()
{
    jacket2img.src="/images/jacket-2-orange.png";
    btnNavyJacket.classList.remove("navy-selected");
    btnOrangeJacket.classList.add("orange-selected")
};

const seeMoreInfo = document.querySelectorAll(".see-more-info");

for (let i = 0; i <seeMoreInfo.length; i++) {
    seeMoreInfo[i].onclick = function() {seeMore(i)};
}

  const info = document.querySelectorAll(".info");
  const icon = document.querySelectorAll(".fa");
  
 function seeMore (i)
{
        if (info[i].classList.contains("hide")) {
            info[i].classList.remove("hide");
            icon[i].classList.remove("fa-chevron-down");
            icon[i].classList.add("fa-chevron-up");
        } else {
            info[i].classList.add("hide");
            icon[i].classList.add("fa-chevron-down");
            icon[i].classList.remove("fa-chevron-up");
        }
}*/	

