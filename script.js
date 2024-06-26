function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        appendMessage("user", userInput);
        document.getElementById("user-input").value = "";

        // Simulate server processing and response (replace with actual backend code)
        setTimeout(function () {
            var response = getResponse(userInput); // Dummy function for demo purposes
            appendMessage("bot", response);
        }, 500);
    }
}

function appendMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Dummy function to generate bot response (replace with actual backend API call)
function getResponse(userInput) {
    return "Hello! You said: " + userInput;
}
