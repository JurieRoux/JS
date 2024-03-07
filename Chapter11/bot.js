function sendMessage() {
    var userInput = document.getElementById("userInput");
    var message = userInput.value;

    if (message.trim() !== "") {
        displayMessage("user", message);
        // You can add logic here to process the user's message and generate a bot response
        // For simplicity, let's just echo the user's message as the bot's response
        setTimeout(function () {
            displayMessage("bot", "I received: " + message);
        }, 500);
        
        userInput.value = "";
    }
}

function displayMessage(sender, message) {
    var chatArea = document.getElementById("chatArea");
    var messageElement = document.createElement("div");
    messageElement.className = sender;
    messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatArea.appendChild(messageElement);

    // Scroll to the bottom to show the latest message
    chatArea.scrollTop = chatArea.scrollHeight;
}
