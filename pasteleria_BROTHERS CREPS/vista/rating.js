document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');
    const nameBox = document.getElementById('name-box');
    const commentBox = document.getElementById('comment-box');
    const nipBox = document.getElementById('nip-box');
    const commentsSection = document.getElementById('comments-section');
    const submitCommentButton = document.getElementById('submit-comment');
    const productSelect = document.getElementById('product-select');
    
    let savedComments = JSON.parse(localStorage.getItem('userComments')) || [];

    // Mostrar comentarios guardados
    savedComments.forEach(displayComment);

    // Añadir eventos a las estrellas
    stars.forEach(star => {
        star.addEventListener('click', function () {
            const rating = this.getAttribute('data-value');
            localStorage.setItem('userRating', rating); // Guardar la calificación en LocalStorage
            setRating(rating);
        });
    });

    // Enviar comentario
    submitCommentButton.addEventListener('click', function () {
        const commentText = commentBox.value.trim();
        const userName = nameBox.value.trim();
        const currentRating = localStorage.getItem('userRating');
        const selectedProduct = productSelect.value;
        
        if (!userName) {
            alert("Por favor, ingresa tu nombre.");
            return;
        }

        if (!commentText) {
            alert("Por favor, escribe un comentario.");
            return;
        }

        if (!currentRating) {
            alert("Por favor, selecciona una calificación antes de enviar el comentario.");
            return;
        }

        if (!selectedProduct) {
            alert("Por favor, selecciona un pastel.");
            return;
        }

        const newComment = {
            id: Date.now(), // Usamos el timestamp como identificador único
            name: userName,
            rating: currentRating,
            comment: commentText,
            product: selectedProduct
        };

        // Guardar comentario en LocalStorage
        savedComments.push(newComment);
        localStorage.setItem('userComments', JSON.stringify(savedComments));

        // Mostrar comentario
        displayComment(newComment);

        // Limpiar el área de texto, el nombre y la selección del pastel
        commentBox.value = '';
        nameBox.value = '';
        productSelect.value = '';
        nipBox.style.display = 'none'; // Ocultar el campo NIP
    });

    // Función para mostrar la calificación seleccionada
    function setRating(rating) {
        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            }
        });
        ratingValue.textContent = `Has calificado con ${rating} estrellas.`;
    }

    // Función para mostrar comentarios en la página
    function displayComment(commentData) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `<strong>${commentData.name} (${commentData.rating} estrellas) - ${commentData.product}:</strong>
                                <p>${commentData.comment}</p>
                                <button class="delete-comment" data-id="${commentData.id}">Eliminar</button>`;
        commentsSection.appendChild(commentDiv);
    }

    // Manejar la eliminación de comentarios
    commentsSection.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-comment')) {
            const commentId = event.target.getAttribute('data-id');
            const userName = prompt("Para eliminar un comentario, por favor ingresa tu nombre con minúsculas:");
            
            if (userName === "jesus israel" || userName === "soledad monroy") {
                const nip = prompt("Introduce el NIP 4598 para eliminar el comentario:");
                if (nip === "4598") {
                    // Eliminar comentario del array de comentarios guardados
                    savedComments = savedComments.filter(comment => comment.id != commentId);
                    
                    // Actualizar el localStorage con los comentarios restantes
                    localStorage.setItem('userComments', JSON.stringify(savedComments));
                    
                    // Eliminar comentario de la interfaz de usuario
                    event.target.parentElement.remove();
                    
                    // Confirmar eliminación
                    alert("Comentario eliminado permanentemente.");
                } else {
                    alert("NIP incorrecto. No se puede eliminar el comentario.");
                }
            } else {
                alert("Nombre incorrecto. No se puede proporcionar el NIP.");
            }
        }
    });
});
