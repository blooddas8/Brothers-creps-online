const chatbotMessages = document.getElementById('messages');
const userOptions = document.getElementById('user-options');

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput !== '') {
        addUserMessage(userInput);
        handleChatbotResponse(userInput);
        document.getElementById('user-input').value = '';
    }
}

function addUserMessage(message) {
    chatbotMessages.innerHTML += `<div class="user-message">${message}</div>`;
}

function addBotMessage(message) {
    chatbotMessages.innerHTML += `<div class="bot-message">${message}</div>`;
}

function addBotButtons(options) {
    userOptions.innerHTML = ''; // Limpiar botones previos
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'chat-bot-button';
        button.innerHTML = option.label;
        button.onclick = function() {
            addUserMessage(option.label);
            handleChatbotResponse(option.label);
        };
        userOptions.appendChild(button);
    });
}

function handleChatbotResponse(input) {
    if (input.includes('servicio')) {
        addBotMessage('¿Qué servicio estás buscando?');
        addBotButtons([
            { label: 'Servicio básico (1,000 pesos)' },
            { label: 'Servicio adicional (2,500 pesos)' },
            { label: 'Servicio premium (3,000 pesos)' }
        ]);
    } else if (input.includes('básico')) {
        addBotMessage('El servicio básico incluye solo la base de datos por 1,000 pesos.');
        addBotButtons([
            { label: 'Comprar servicio básico' },
            { label: 'Volver al menú principal' }
        ]);
    } else if (input.includes('adicional')) {
        addBotMessage('El servicio adicional incluye la base de datos y opciones adicionales por 2,500 pesos.');
        addBotButtons([
            { label: 'Comprar servicio adicional' },
            { label: 'Volver al menú principal' }
        ]);
    } else if (input.includes('premium')) {
        addBotMessage('El servicio premium incluye la base de datos, el sitio web y un enlace de almacenamiento por 3,000 pesos.');
        addBotButtons([
            { label: 'Comprar servicio premium' },
            { label: 'Volver al menú principal' }
        ]);
    } else if (input.includes('Comprar')) {
        addBotMessage('Para proceder con la compra, contáctanos a través de nuestro correo o visita nuestra tienda.');
    } else {
        addBotMessage('Lo siento, no entendí eso. ¿Podrías repetirlo o seleccionar una opción?');
        addBotButtons([
            { label: 'Servicio básico' },
            { label: 'Servicio adicional' },
            { label: 'Servicio premium' }
        ]);
    }
}
