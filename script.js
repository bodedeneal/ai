function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    let botResponse = generateResponse(userInput);
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;

    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(input) {
    let responses = {
        "hello": "Hi there! How can I assist you?",
        "how are you": "I'm just a chatbot, but I'm here to help!",
        "bye": "Goodbye! Have a great day!",
        "1+1": "1+1=2"
    };

    return responses[input.toLowerCase()] || "I'm not sure how to respond to that.";
}
