const tableNode = document.getElementById("mainTableBody");
const formButton = document.getElementById("formBtn");
const productSelect = document.getElementById("products");
let productList = ["Arroz", "Pasta"];

let tableStructure = [[1, "cualquier cosa", "producto"]];

formButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  const numberValue = document.getElementById("number").value;
  const descValue = document.getElementById("description").value;
  const productValue = document.getElementById("products").value;
  tableStructure = [...tableStructure, [numberValue, descValue, productValue]];
  createTable();
});

const createTable = () => {
  tableNode.innerHTML = "";
  tableStructure.forEach((item) => {
    const rowNode = document.createElement("tr");
    item.forEach((info) => {
      const cellNode = document.createElement("td");
      cellNode.innerHTML = info;
      rowNode.appendChild(cellNode);
    });
    tableNode.appendChild(rowNode);
  });
};

productList.forEach((item) => {
  const productOption = document.createElement("option");
  productOption.setAttribute("id", item);
  productOption.setAttribute("value", item);
  productOption.innerText = item;
  productSelect.appendChild(productOption);
});
