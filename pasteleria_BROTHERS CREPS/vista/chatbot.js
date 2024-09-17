const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Ruta de la imagen de perfil del bot
const botProfileImage = "../estilo css/chatbot.jpeg";

// Respuestas del chatbot
const responses = {
    "hola": "¡Bienvenido/a! 🌟 Es un placer tenerte con nosotros. Estas son algunas opciones sobre las que puedo ayudarte: \n1️⃣ Hacer un pedido \n2️⃣ Pasteles más recomendados \n3️⃣ Personalizar pastel \n4️⃣ Ofertas para pedidos grandes \n5️⃣ Hablar con un supervisor \n6️⃣ Despedida \n\nPor favor, escribe el número o la opción sobre la que quieras información. 😊",
    "1": "¡Claro! 🎉 Para hacer tu pedido, simplemente desplázate hacia abajo en la página de ventas y selecciona el pastel que te gustaría. Ten en cuenta que necesitamos recibir tu pedido con al menos 5 días de anticipación para garantizar la frescura y calidad. ¡Gracias por tu comprensión! 🍰😊",
    "2": "Aquí te presentamos algunas de nuestras opciones más destacadas: \n1. Pastel de Red Velvet ❤️: Un elegante pastel con un vibrante color rojo y un delicado sabor a vainilla, adornado con un suave glaseado de queso crema.\n2. Pastel de Chocolate Trufado 🍫: Un exquisito pastel de chocolate, enriquecido con una suave capa de trufa.",
    "3": "Por supuesto, estaremos encantados de ofrecerte un pastel totalmente personalizado. 🎂✨ Elige entre una variedad de sabores, decoraciones y diseños para que tu pastel sea único. ¡Solo háznos saber tus preferencias! 🌟",
    "4": "En este momento, no contamos con ofertas especiales para pedidos grandes. 🌟 Sin embargo, puedes comunicarte directamente con nuestra chef para explorar opciones personalizadas. Su información está disponible en la parte superior de la página. 📞",
    "5": "Si deseas hablar con un supervisor para obtener más información, puedes contactarnos a través de WhatsApp. Haz clic en el siguiente enlace para enviarnos un mensaje: <a href='https://wa.me/7221591379?text=Hola%2C%20soy%20[Tu%20Nombre]%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios' target='_blank'>Contactar con Supervisor</a>. 🌟",
    "6": "Si requieres más información o asistencia adicional, te invitamos a contactar directamente con nuestra supervisora y chef. 📞 Su información de contacto está disponible en la parte superior de la página. Estaremos encantados de ofrecerte la atención y el apoyo que necesites. 🌟 Te deseamos un día maravilloso y esperamos que disfrutes de nuestras exquisiteces. 🍰✨"
};

function sendMessage() {
    const userMessage = userInput.value.trim().toLowerCase();
    
    if (userMessage) {
        addMessage(userMessage, 'user');
        setTimeout(() => {
            getBotResponse(userMessage);
        }, 500);
    }
    
    userInput.value = '';
}

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);

    if (sender === 'bot') {
        const botImage = document.createElement('img');
        botImage.src = botProfileImage; // Imagen del bot
        botImage.classList.add('bot-image'); // Clase CSS para la imagen
        messageElement.appendChild(botImage);
    }

    const messageText = document.createElement('span');
    messageText.innerHTML = message; // Usar innerHTML para incluir enlaces
    messageElement.appendChild(messageText);
    
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    const cleanedMessage = userMessage.replace(/[^0-9]/g, ''); // Extraer solo números

    // Verificar respuesta para las opciones
    let botResponse;
    if (responses[cleanedMessage]) {
        botResponse = responses[cleanedMessage];
    } else {
        botResponse = responses["hola"]; // Mostrar opciones si no se reconoce el mensaje
    }
    
    addMessage(botResponse, 'bot');
}
