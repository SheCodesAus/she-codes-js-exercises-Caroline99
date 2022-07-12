window.onload = function () {
    // console.log("page had loaded")
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");
    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";
    speechBubbleElement.appendChild(messageBox);

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
};

function showMessage() {
    // let message = document.getElementById("message-text").value 
    let message = document.getElementById("message-text").value + ' - ' + document.getElementById("name-text").value
    // console.log(message)
    let messageBox = document.getElementById("message-box");
    messageBox.innerText = message;
}

// function showMessage() {
//     let inputField = document.getElementById('message-text')
//     let messageBox = document.getElementById('message-box')
//     messageBox.innerHTML = inputField.value
// }