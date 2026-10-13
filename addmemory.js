function openModal() {
  document.getElementById("addModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("addModal").style.display = "none";
}

function addMemory() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const date = document.getElementById("date").value;
  const imgFile = document.getElementById("image").files[0];

  if (!title || !imgFile) return alert("Title & image required");

  const reader = new FileReader();
  reader.onload = function () {
    const card = document.createElement("div");
    card.className = "memory-card";
    card.onclick = () => openPreview(card);

    card.innerHTML = `
      <img src="${reader.result}">
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="date">📅 ${date}</div>
    `;

    document.getElementById("memories").prepend(card);
    closeModal();
  };

  reader.readAsDataURL(imgFile);
}

function openPreview(card) {
  document.getElementById("pImg").src = card.querySelector("img").src;
  document.getElementById("pTitle").innerText = card.querySelector("h3").innerText;
  document.getElementById("pDesc").innerText = card.querySelector("p").innerText;
  document.getElementById("pDate").innerText = card.querySelector(".date").innerText;
  document.getElementById("preview").style.display = "flex";
}

function closePreview() {
  document.getElementById("preview").style.display = "none";
}
