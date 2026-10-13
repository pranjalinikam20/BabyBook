function openForm() {
    document.getElementById("modal").style.display = "flex";
}

function closeForm() {
    document.getElementById("modal").style.display = "none";
}

function addMilestone() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;

    if (title === "" || date === "") {
        alert("Please fill all fields");
        return;
    }

    const milestone = document.createElement("div");
    milestone.className = "milestone";
    milestone.innerHTML = `<strong>${title}</strong> <br> ${date}`;

    document.getElementById("milestones").appendChild(milestone);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    closeForm();
}

function openForm() {
    document.getElementById("modal").style.display = "flex";
}

function closeForm() {
    document.getElementById("modal").style.display = "none";
}

function saveMilestone() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if (!title || !category || !date) {
        alert("Please fill all fields");
        return;
    }

    const icons = {
        social: "❤",
        physical: "★",
        language: "☺"
    };

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-left">
            <div class="icon">${icons[category]}</div>
            <div>
                <strong>${title}</strong><br>
                <span class="tag ${category}">${category}</span>
            </div>
        </div>
        <div class="date">${date}</div>
    `;

    document.getElementById("milestones").appendChild(card);

    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";

    closeForm();
}
