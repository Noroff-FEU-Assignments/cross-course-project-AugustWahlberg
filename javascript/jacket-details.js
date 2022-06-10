const jacketDetails = document.querySelector(".jacket-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const loader = document.querySelector(".loader")
const url = "https://bywahlberg.one/rainy-days/wp-json/wc/store/products/" + id ;



async function getJacket () {

    try{
        const response = await fetch(url);
        const details = await response.json();
        jacketDetails.innerHTML = "";
        

        jacketDetails.innerHTML += ` <div class="jacket-details">
                                      
                                      <div class="jacket-image">
                                      <h3>${details.name}</h3>
                                      <img src="${details.images[0].src}"> 
                                      <p>${details.prices.price}$</p>
                                      </div>

                                      <div class="jacket-info">   
                                      <p>${details.short_description}</p>

                                      <label for="Sizes1"></label>
                                    <select name="Size" id="Sizes1">
                                    <option value="color">${details.attributes[0].terms[0].name}</option>
                                    </select>
                                    
                                      <label for="Sizes1"></label>
                                    <select name="Size" id="Sizes1">                           
                                    <option value="XXS">${details.attributes[1].terms[0].name}</option>
                                    <option value="XS">${details.attributes[1].terms[1].name}</option>
                                    <option value="S">${details.attributes[1].terms[2].name}</option>
                                    <option value="M">${details.attributes[1].terms[3].name}</option>                           
                                    </select>

                                    <div class="center">
        <a href="#popup">Size chart</a>
      </div>
      <div id="popup">
        <div class="popup-content">
          <table class="content-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Pit to Pit</th>
                <th>Waist Width</th>
                <th>Body Length</th>
                <th>Shoulder Width</th>
                <th>Sleeve Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XXS</td>
                <td>47</td>
                <td>45,5</td>
                <td>67,5</td>
                <td>38</td>
                <td>60,5</td>
              </tr>
              <tr>
                <td>XS</td>
                <td>50</td>
                <td>48,5</td>
                <td>69,5</td>
                <td>40</td>
                <td>62,5</td>
              </tr>
              <tr>
                <td>S</td>
                <td>53</td>
                <td>51,5</td>
                <td>71,5</td>
                <td>42</td>
                <td>64,5</td>
              </tr>
              <tr>
                <td>M</td>
                <td>56</td>
                <td>54,5</td>
                <td>73,5</td>
                <td>44</td>
                <td>66,5</td>
              </tr>
              <tr>
                <td>L</td>
                <td>59</td>
                <td>57,5</td>
                <td>75,5</td>
                <td>46</td>
                <td>68,5</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>62</td>
                <td>60,5</td>
                <td>77,5</td>
                <td>48</td>
                <td>70,5</td>
              </tr> 
            </tbody>
          </table>
          <p>All measurements are in centimeters</p>
          <a href="#" class="close-popup">×</a>
        </div>                         
                                      </div> 
                                      <button class="btnbuy"> Add to cart </button>
                                      <div class="extrainfo"><h4>${details.description} </h4></div>    
                                      </div>
                                      </div>
                                        `;

//see more info - ligger også under shop                                        
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
}	

        }
    catch(error){
        loader.style.display = "none";
        jacketDetails.innerHTML = "An error occured!";
        } 
}
getJacket ();