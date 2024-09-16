<script>
    // Respuestas del chatbot
    const responses = {
        "hola": "Hola, {Nombre del visitante}, muchas gracias por ponerte en contacto nuevamente. 🌟 Apreciamos tu interés y estamos aquí para asistirte en lo que necesites. ¿En qué más puedo ayudarte hoy? 😊",
        "hacer un pedido": "¡Claro! 🎉 Para hacer tu pedido, simplemente desplázate hacia abajo en la página y selecciona el pastel que te gustaría. Ten en cuenta que necesitamos recibir tu pedido con al menos 5 días de anticipación para garantizar la frescura y calidad. ¡Gracias por tu comprensión! 🍰😊",
        "pasteles más recomendados": "Aquí te presentamos algunas de nuestras opciones más destacadas: \n1. Pastel de Red Velvet ❤️: Un elegante pastel con un vibrante color rojo y un delicado sabor a vainilla, adornado con un suave glaseado de queso crema.\n2. Pastel de Chocolate Trufado 🍫: Un exquisito pastel de chocolate, enriquecido con una suave capa de trufa.",
        "personalizar pastel": "Por supuesto, estaremos encantados de ofrecerte un pastel totalmente personalizado. 🎂✨ Elige entre una variedad de sabores, decoraciones y diseños para que tu pastel sea único. ¡Solo háznos saber tus preferencias! 🌟",
        "ofertas grandes pedidos": "En este momento, no contamos con ofertas especiales para pedidos grandes. 🌟 Sin embargo, puedes comunicarte directamente con nuestra chef para explorar opciones personalizadas. Su información está disponible en la parte superior de la página. 📞",
        "despedida": "Si requieres más información o asistencia adicional, te invitamos a contactar directamente con nuestra supervisora y chef. 📞 Su información de contacto está disponible en la parte superior de la página. Estaremos encantados de ofrecerte la atención y el apoyo que necesites. 🌟 Te deseamos un día maravilloso y esperamos que disfrutes de nuestras exquisiteces. 🍰✨"
    };

    // Función para mostrar la respuesta según el botón presionado
    function showResponse(option) {
        let response = responses[option] || "Lo siento, no entendí tu solicitud. Por favor, selecciona una opción válida.";
        document.getElementById('cliengo-chat').innerHTML += `<p>${response}</p>`;
    }
</script>
