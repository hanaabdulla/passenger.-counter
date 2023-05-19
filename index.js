let saveEL = document.getElementById('ide')
let countEL = document.getElementById("count-el")   
let count = 0
function increment() {
    count += 1
    countEL.innerText = count

}
function save() {
    let countStr=count + "-"
    saveEL.innerText += countStr
    countEL.innerText = 0
}

