function createCard(id, title, offer, subTitle, fPrice, oPrice) {
  // Create label element
  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.classList.add("unit-label-container");
  

  // Create input element
  const input = document.createElement("input");
  input.id = id;
  input.type = "radio";
  input.classList.add("radio-input");
  input.name="cards"

  // Create outer div element
  const outerDiv = document.createElement("div");
  outerDiv.style.display = "flex";
  outerDiv.style.justifyContent = "space-between";
  outerDiv.style.flexGrow = "1";

  // Create inner div element (left side)
  const leftDiv = document.createElement("div");
  leftDiv.style.display = "flex";
  leftDiv.style.flexDirection = "column";
  leftDiv.style.justifyContent = "center";

  // Create nested div for title and offer
  const nestedDiv = document.createElement("div");
  nestedDiv.style.display = "flex";
  nestedDiv.style.justifyContent = "center";
  nestedDiv.style.alignItems = "center";

  // Create paragraph element for unit title
  const unitTitle = document.createElement("p");
  unitTitle.classList.add("unit-title");
  unitTitle.textContent = title;

  // Create div element for offer
  const offerDiv = document.createElement("div");
  offerDiv.classList.add("offer");
  offerDiv.textContent = offer;

  // Append unit title and offer to nested div
  nestedDiv.appendChild(unitTitle);
  nestedDiv.appendChild(offerDiv);

  // Create paragraph element for sub-heading
  const subHeading = document.createElement("p");
  subHeading.classList.add("unit-sub-heading");
  subHeading.textContent = subTitle;

  // Append nested div and sub-heading to left div
  leftDiv.appendChild(nestedDiv);
  leftDiv.appendChild(subHeading);

  // Create right div element
  const rightDiv = document.createElement("div");

  // Create paragraph element for final price
  const finalPrice = document.createElement("p");
  finalPrice.classList.add("final-price");
  finalPrice.textContent = fPrice;

  // Create paragraph element for original price
  const originalPrice = document.createElement("p");
  originalPrice.classList.add("original-price");
  originalPrice.textContent = oPrice;

  // Append final price and original price to right div
  rightDiv.appendChild(finalPrice);
  rightDiv.appendChild(originalPrice);

  // Append left and right divs to outer div
  outerDiv.appendChild(leftDiv);
  outerDiv.appendChild(rightDiv);

  // Append input and outer div to label
  label.appendChild(input);
  label.appendChild(outerDiv);
  // Append label to a parent element in the DOM
  const parentElement = document.getElementById("cardsContainer"); // Replace "parentElementId" with the actual ID of the parent element
  parentElement.appendChild(label);
}

createCard("unit1Radio", "1 Unit", "10% Off", "Standard", "$10.00USD", "$24.00 USD");
createCard("unit2Radio", "2 Unit", "20% Off", "", "$18.00 USD", "$24.00 USD");
createCard("unit3Radio", "3 Unit", "30% Off", "", "24.00", "$24.00 USD");
