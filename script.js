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
    input = input.toLowerCase().trim();

    // Check if the input is a math expression
    if (isMathExpression(input)) {
        try {
            return `The answer is: ${evaluateMath(input)}`;
        } catch {
            return "Oops! That math expression seems invalid.";
        }
    }

    let responses = {
        "hello": "Hi there! How can I assist you?",
        "how are you": "I'm just a chatbot, but I'm here to help!",
        "bye": "Goodbye! Have a great day!",
        "1+1": "1+1=2",
        "gay": "No, you gay!",
        "what is your name?": "Lebron James",
        "what can you do": "More than You lazy scum!",
        "where are you from": "Github",
        "are you a human or a robot?": "What do you think?"
    };

    return responses[input] || "I'm not sure how to respond to that.";
}

// Function to detect math expressions
function isMathExpression(input) {
    return /^[0-9+\-*/().\s]+$/.test(input);
}

// Function to evaluate math expressions safely
function evaluateMath(expression) {
    return Function(`'use strict'; return (${expression})`)();
}
