const baseUrl = "https://bywahlberg.one/rainy-days/wp-json/wc/store/products/";
const productContainer = document.querySelector(".products");
const loader = document.querySelector(".loader")

async function getProducts(url){

  try{
  const response = await fetch(url);
  const products = await response.json();
  loader.style.display = "none";
  
  products.forEach(function(product) {
    productContainer.innerHTML += `
    <div class="product">
    <h3>${product.name}</h3>
    <div class="jacket-image"><img src="${product.images[0].src}">
    <p>${product.prices.price}$</p>
    <p>${product.categories[1].name}</p>
    <a href="jacket-details.html?id=${product.id}"><button class="btnbuy"> ${product.add_to_cart.text} </button> </a>
    </div>
    </div>`
    
  });

}
catch(error){
    loader.style.display = "none";
    productContainer.innerHTML = "An error occured!";
    } 
}

getProducts(baseUrl);










