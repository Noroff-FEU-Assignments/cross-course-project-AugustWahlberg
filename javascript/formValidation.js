const formShippingAddress = document.querySelector(".shipping-address");
const form = document.querySelector("#data-form");
const fullName = document.querySelector("#fullname");
const fullNameError = document.getElementById("fullNameError");
const email = document.querySelector("#email");
const emailError = document.getElementById("emailError");
const address = document.querySelector("#address");
const addressError = document.getElementById("addressError");
const city = document.querySelector("#city");
const cityError = document.getElementById("cityError");
const state = document.querySelector("#state");
const stateError = document.getElementById("stateError");
const zip = document.querySelector("#zip");
const zipError = document.getElementById("zipError");
const country = document.querySelector("#country");
const countryError = document.getElementById("countryError");
const cardName = document.querySelector("#cardname");
const cardNameError = document.getElementById("cardNameError");
const cardNumber = document.querySelector("#cardnumber");
const cardNumberError = document.getElementById("cardNumberError");
const expiryMonth = document.querySelector("#expmonth");
const expiryMonthError = document.getElementById("expMonthError");
const expiryYear = document.querySelector("#expyear");
const expiryYearError = document.getElementById("expYearError");
const cvv = document.querySelector("#cvv");
const cvvError = document.getElementById("cvvError");

let verdi = true;

function validate (item, itemError, length){

    if(item.value.trim().length > length){
        itemError.style.display = "none";
        
    } else {
        itemError.style.display = "block";
        verdi = false;
    }

}

function validateEqual (item, itemError, length){

    if(item.value.trim().length == length){
        itemError.style.display = "none";
        
    } else {
        itemError.style.display = "block";
        verdi = false;
    }
}


function validateForm(){
    event.preventDefault();
    verdi = true;

    validate(fullName, fullNameError, 4);


    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
        
    } else {
        emailError.style.display = "block";
        verdi = false;
    }

    validate(address, addressError, 5);

    validate(city, cityError, 2);

    validate(state, stateError, 2);

    validate(zip, zipError, 2);

    validate(country, countryError, 3);

    validate(cardName, cardNameError, 4);

    validateEqual(cardNumber, cardNumberError, 16);

    validateEqual(expiryMonth, expiryMonthError, 2);

    validateEqual(expiryYear, expiryYearError, 4);

    validateEqual(cvv, cvvError, 3);
}

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

const btnPay = document.querySelector(".btnpay")

form.addEventListener("submit", validateForm);

btnPay.addEventListener("click", toCheckOut);

function toCheckOut() {

    validateForm();

    if(verdi == true)
 
    window.location.href="checkout-success.html"; 
} 



