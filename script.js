const container = document.getElementById("cards-container");

fetch("https://apisimpsons.fly.dev/api/personajes?limit=24")
    .then(response => response.json())
    .then(data => {
        const personagens = data.docs;

        personagens.forEach(personagem => {
            const card = document.createElement("div");
            card.className = "card";

            const img = document.createElement("img");
            img.src = personagem.Imagen;
            img.alt = personagem.Nombre;

            const nome = document.createElement("h3");
            nome.textContent = personagem.Nombre;

            const descricao = document.createElement("p");
            descricao.textContent = personagem.Ocupacion || "Sem descrição";

            card.appendChild(img);
            card.appendChild(nome);
            card.appendChild(descricao);

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Erro ao carregar a API:", error);
        container.innerHTML = "<p>Erro ao carregar personagens.</p>";
    });
