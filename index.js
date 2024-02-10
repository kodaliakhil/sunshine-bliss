function createCard(id, title, offer, subTitle, fPrice, oPrice) {
  //  label element
  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.classList.add("unit-label-container");

  //  input element
  const input = document.createElement("input");
  input.id = id;
  input.type = "radio";
  input.classList.add("radio-input");
  input.name = "cards";

  //  outer div element
  const outerDiv = document.createElement("div");
  outerDiv.style.display = "flex";
  outerDiv.style.justifyContent = "space-between";
  outerDiv.style.flexGrow = "1";

  //  inner div element (left side)
  const leftDiv = document.createElement("div");
  leftDiv.style.display = "flex";
  leftDiv.style.flexDirection = "column";
  leftDiv.style.justifyContent = "center";

  //  nested div for title and offer
  const nestedDiv = document.createElement("div");
  nestedDiv.style.display = "flex";
  nestedDiv.style.justifyContent = "center";
  nestedDiv.style.alignItems = "center";

  //  paragraph element for unit title
  const unitTitle = document.createElement("p");
  unitTitle.classList.add("unit-title");
  unitTitle.textContent = title;

  //  div element for offer
  const offerDiv = document.createElement("div");
  offerDiv.classList.add("offer");
  offerDiv.textContent = offer;

  nestedDiv.appendChild(unitTitle);
  nestedDiv.appendChild(offerDiv);

  //  paragraph element for sub-heading
  const subHeading = document.createElement("p");
  subHeading.classList.add("unit-sub-heading");
  subHeading.textContent = subTitle;

  leftDiv.appendChild(nestedDiv);
  leftDiv.appendChild(subHeading);

  //  right div element
  const rightDiv = document.createElement("div");

  //  paragraph element for final price
  const finalPrice = document.createElement("p");
  finalPrice.classList.add("final-price");
  finalPrice.textContent = fPrice;

  //  paragraph element for original price
  const originalPrice = document.createElement("p");
  originalPrice.classList.add("original-price");
  originalPrice.textContent = oPrice;

  rightDiv.appendChild(finalPrice);
  rightDiv.appendChild(originalPrice);

  outerDiv.appendChild(leftDiv);
  outerDiv.appendChild(rightDiv);

  label.appendChild(input);
  label.appendChild(outerDiv);
  const parentElement = document.getElementById("cardsContainer");

  parentElement.appendChild(label);
  label.addEventListener("click", (e) => {
    const selectedLabel = document.querySelectorAll(".unit-label-container");
    selectedLabel.forEach((label) => {
      if (label.childNodes[0].id !== e.target.id) {
        const tabel = document.getElementById(`${label.childNodes[0].id}Tabel`);
        console.log(tabel);
        tabel && label.removeChild(tabel);
      }
      if (label.childNodes[0].id === e.target.id) {
        const table = createTable(`${id}Table`);
        label.appendChild(table);
      }
    });
    // console.log(selectedLabel);
  });
}
function createTable(id) {
  //  table element
  var table = document.createElement("table");
  table.id = id;
  //  table header row
  var headerRow = document.createElement("tr");

  //  table header cells
  var emptyHeaderCell = document.createElement("th");
  headerRow.appendChild(emptyHeaderCell);

  var sizeHeaderCell = document.createElement("th");
  sizeHeaderCell.textContent = "Size";
  headerRow.appendChild(sizeHeaderCell);

  var colourHeaderCell = document.createElement("th");
  colourHeaderCell.textContent = "Colour";
  headerRow.appendChild(colourHeaderCell);

  table.appendChild(headerRow);

  for (var i = 1; i <= 2; i++) {
    var row = document.createElement("tr");

    //  cell for item number
    var itemCell = document.createElement("th");
    itemCell.textContent = "#" + i;
    row.appendChild(itemCell);

    //  cell for size dropdown
    var sizeCell = document.createElement("td");
    var sizeSelect = document.createElement("select");
    sizeSelect.name = "Sizes";
    sizeSelect.id = "sizes" + i;
    var sizes = ["S", "M", "L", "XL"];
    sizes.forEach(function (size) {
      var option = document.createElement("option");
      option.value = size;
      option.textContent = size;
      sizeSelect.appendChild(option);
    });
    sizeCell.appendChild(sizeSelect);
    row.appendChild(sizeCell);

    //  cell for colour dropdown
    var colourCell = document.createElement("td");
    var colourSelect = document.createElement("select");
    colourSelect.name = "Colours";
    colourSelect.id = "colours" + i;
    var colours = ["Black", "Orange", "Green", "Red"];
    colours.forEach(function (colour) {
      var option = document.createElement("option");
      option.value = colour.toLowerCase();
      option.textContent = colour;
      colourSelect.appendChild(option);
    });
    colourCell.appendChild(colourSelect);
    row.appendChild(colourCell);

    table.appendChild(row);
  }

  return table;
}

createCard(
  "unit1Radio",
  "1 Unit",
  "10% Off",
  "Standard",
  "$10.00USD",
  "$24.00 USD"
);
createCard("unit2Radio", "2 Unit", "20% Off", "", "$18.00 USD", "$24.00 USD");
createCard("unit3Radio", "3 Unit", "30% Off", "", "$24.00 USD", "$24.00 USD");
