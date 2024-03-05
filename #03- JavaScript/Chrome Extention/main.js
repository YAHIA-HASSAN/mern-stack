let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const savedLocalStorage = localStorage.getItem("myLeads")


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  
  renderLeads();
});

function renderLeads() {
  let myListItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    myListItems += `
       <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
       </li>
       `;
  }

  ulEl.innerHTML = myListItems;
}
