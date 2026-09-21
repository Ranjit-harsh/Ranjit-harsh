let usersContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#input");
const usersArr = [
  {
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yyKPOkMWdw1GjL9du-N8BS8APIe6ZQYJyg_75HFzuDuuZFmvjcpmu_Fb&s=10",
    name: "Nadia Tirupurai",
    Gmail: "nadiatirupur69@gmail.com",
  },
  {
    profileUrl:
      "https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_1280.jpg",
    name: "Amisha shretha",
    Gmail: "shreathaamisha69@gmail.com",
  },
  {
    profileUrl:
      "https://img.magnific.com/free-photo/lady-street-style-young-pretty-blond_1139-819.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Aman gupta",
    Gmail: "amangupta69@gmail.com",
  },
];
function renderedUsers(arr) {
  usersContainer.innerHTML = "";
  arr.map((elem) => {
    let { profileUrl, name, Gmail } = elem;
    let divElem = document.createElement("div");
    divElem.className = "userItems";
    divElem.innerHTML = ` <img
            src=${profileUrl}
            alt="Image is loding"
            id="img"
          >
           <div class="usersdetails">
                <h3>${name}</h3>
               <p>${Gmail}</p>
           </div>`;
    usersContainer.append(divElem);
    // console.log(elem)
  });
}
renderedUsers(usersArr);

function handleSearchInput(e) {
  let inputValue = e.target.value;
  let renderedValue = usersArr.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      obj.Gmail.toLowerCase().includes(inputValue.toLowerCase())
    );
  });

  if (renderedValue.length === 0) {
    usersContainer.innerHTML = `   
           <div class="usersdetails">

              <h3>User not found ${inputValue} </h3>
              
           </div>
    `;
    return;
  }
  renderedUsers(renderedValue);
}

searchInput.addEventListener("input", handleSearchInput);
