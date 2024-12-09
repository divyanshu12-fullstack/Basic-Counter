let clicks = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    countEl.innerText = ++clicks;
}

function save() {
    let countStr = clicks + " - "
    saveEl.textContent += countStr
    clicks = 0
    countEl.textContent = 0
}

