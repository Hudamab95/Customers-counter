let countEl = document.getElementById("count-el");
let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
let clearBtn = document.getElementById("clear-btn");

let count = 0

incrementBtn.addEventListener("click", function() {
    count += 1
    countEl.textContent = count
});


saveBtn.addEventListener("click", function() {
    let saveEl = document.getElementById("save-el");
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0
});


clearBtn.addEventListener("click", function() {
    countEl.textContent = 0
    count = 0
    document.getElementById('save-el').textContent = 'Previous entries: '
});


