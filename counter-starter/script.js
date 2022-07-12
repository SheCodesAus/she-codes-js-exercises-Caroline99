// console.log("Yes we are working");

// function add() {
//     let counter = document.getElementById('number')
//     counter.innerHTML = parseInt(counter.innerHTML) + 1

//     console.log("Yes we are working", counter)
// }

// let counter = document.getElementById('number')
// let newValue = parseInt(counter.innerHTML) + 1
// counter.innerHTML = newValue

function add(num) {
    let counter = document.getElementById('number')
    counter.innerHTML = parseFloat(counter.innerHTML) + num

    console.log("Yes we are working", counter)
}

// function subtract(numberToSubtract) {

// }

function multiply(num) {
    let counter = document.getElementById('number')
    counter.innerHTML = parseFloat(counter.innerHTML) * num

}

function divide(num) {
    let counter = document.getElementById('number')
    counter.innerHTML = parseFloat(counter.innerHTML) / num

}
