function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const card = document.getElementById(data);
  event.target.appendChild(card);
}

function addCard(columnId) {
  const input = document.getElementById(`${columnId}-input`);
  const text = input.value.trim();
  if (text === "") return;

  const card = document.createElement("div");
  card.className = "card";
  card.draggable = true;
  card.id = `card-${Date.now()}`;
  card.innerHTML = text;
  card.ondragstart = drag;

  const cardsContainer = document.querySelector(`#${columnId} .cards`);
  cardsContainer.appendChild(card);

  input.value = "";
}