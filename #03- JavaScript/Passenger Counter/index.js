let countEl = document.getElementById("count-el")
let saveEl =document.getElementById("save-el")
let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
}

function save(){
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = 0
}


