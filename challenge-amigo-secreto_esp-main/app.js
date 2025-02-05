let amigos = [];

function actualizarListaAmigos() {
  // Selecciona el elemento <ul> donde se mostrarán los amigos
  const lista = document.getElementById("listaAmigos");
  // Limpia la lista para evitar duplicados
  lista.innerHTML = "";

  // Recorre el array 'amigos' y crea un <li> para cada uno
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nuevoAmigo = input.value.trim();

  if (nuevoAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  const existe = amigos.some(amigo => amigo.toLowerCase() === nuevoAmigo.toLowerCase());
  if (existe) {
    alert("El amigo ya existe o el nombre es inválido.");
    return;
  }

  amigos.push(nuevoAmigo);

  input.value = "";

  actualizarListaAmigos();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}