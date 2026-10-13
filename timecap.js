
const capsules = [];

document.getElementById("saveCapsuleBtn").addEventListener("click", addCapsule);

function addCapsule() {
  console.log("Save button clicked ✅");

  const title = document.getElementById("title").value.trim();
  const message = document.getElementById("message").value.trim();
  const unlockDate = document.getElementById("unlockDate").value;
  const mediaInput = document.getElementById("media");
  const mediaFile = mediaInput.files[0];

  if (!title || !message || !unlockDate) {
    alert("Please fill all fields");
    return;
  }

  const capsule = {
    title,
    message,
    unlockDate,
    media: null,
    type: null
  };

  if (mediaFile) {
    const reader = new FileReader();
    reader.onload = function () {
      capsule.media = reader.result;
      capsule.type = mediaFile.type;
      capsules.push(capsule);
      renderCapsules();
    };
    reader.readAsDataURL(mediaFile);
  } else {
    capsules.push(capsule);
    renderCapsules();
  }

  // reset fields
  document.getElementById("title").value = "";
  document.getElementById("message").value = "";
  document.getElementById("unlockDate").value = "";
  mediaInput.value = "";
}

function renderCapsules() {
  const box = document.getElementById("capsuleBox");
  box.innerHTML = "";

  const today = new Date();

  capsules.forEach(c => {
    const div = document.createElement("div");
    const unlock = new Date(c.unlockDate);

    if (today < unlock) {
      div.className = "capsule locked";
      div.innerHTML = `
        <h4>${c.title}</h4>
        <p class="lock">🔒 Locked until ${c.unlockDate}</p>
      `;
    } else {
      let mediaHTML = "";

      if (c.media) {
        if (c.type.startsWith("image")) {
          mediaHTML = `<img src="${c.media}">`;
        } else if (c.type.startsWith("video")) {
          mediaHTML = `<video controls src="${c.media}"></video>`;
        } else if (c.type.startsWith("audio")) {
          mediaHTML = `<audio controls src="${c.media}"></audio>`;
        }
      }

      div.className = "capsule";
      div.innerHTML = `
        <h4>${c.title}</h4>
        <p>${c.message}</p>
        ${mediaHTML}
        <p class="unlock">🔓 Unlocked</p>
      `;
    }

    box.appendChild(div);
  });
}

