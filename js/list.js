document.addEventListener("DOMContentLoaded", () => {
    let characters = []; // Almacenar los personajes obtenidos de la API
    let currentIndex = 0; // Índice del personaje actual que se está mostrando

    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                characters = data.results; // Almacenar los personajes en la variable characters
                showNextCharacter(); // Mostrar el primer personaje
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        currentIndex = 0; // Reiniciar el índice para volver a mostrar desde el primer personaje
        showNextCharacter(); // Mostrar el primer personaje al limpiar la lista
    });

    function showNextCharacter() {
        if (currentIndex < characters.length) {
            const character = characters[currentIndex];
            const itemList = document.getElementById("my-list");
            itemList.innerHTML = ''; // Limpiar la lista antes de mostrar el siguiente personaje

            const clone = document.getElementById("list-template").content.cloneNode(true);
            clone.querySelector("[data-id='id']").textContent = `ID: ${character.id}`;
            clone.querySelector("[data-id='name']").textContent = `Name: ${character.name}`;
            clone.querySelector("[data-id='status']").textContent = `Status: ${character.status}`;
            clone.querySelector("[data-id='species']").textContent = `Species: ${character.species}`;
            clone.querySelector("[data-id='image']").src = character.image;
            itemList.appendChild(clone);

            currentIndex++; // Incrementar el índice para mostrar el siguiente personaje
        } else {
            alert("No hay más personajes que mostrar.");
        }
    }
});

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.innerHTML = ''; // Limpiar la lista
    });
});
