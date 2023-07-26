let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let value = document.getElementById("value")
let count = 0
function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let sum = value.textContent
    sum = Number(sum)
    sum += count
    value.textContent = sum
    countEl.textContent = 0
    count = 0
}