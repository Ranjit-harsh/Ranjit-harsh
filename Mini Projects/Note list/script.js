let userInput = document.querySelector("#input");
let addBtn = document.querySelector(".addBtn");
let contain = document.querySelector(".contain");
let userArr = [
];
function renderedValue(arr) {
  contain.innerHTML = "";
  arr.map((obj) => {
    let { Notelist } = obj;
    let divElem = document.createElement("div");
    divElem.className = "userNotes";
    divElem.innerHTML = `  <p>${Notelist}</p>
              `;
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    divElem.appendChild(deleteBtn);
    deleteBtn.onclick = () => {
      return handleRemoveInput(obj.id);
    }
    contain.append(divElem);
  });
}
renderedValue(userArr);

function handleSearchInput() {
  if (userInput.value === "") {
    return;
  }
  else {
    let searchValue = userInput.value;
    let obj = {
      id: Math.ceil(Math.random() * 23),
      Notelist: `${searchValue}`,
    };
    userArr.push(obj);
    renderedValue(userArr);
    userInput.value = "";

  }

}
function handleRemoveInput(id) {
  let filterArr = userArr.filter((obj) => {
    return obj.id !== id;
  })
  userArr = filterArr;
  renderedValue(userArr);
}


addBtn.addEventListener("click", handleSearchInput);

