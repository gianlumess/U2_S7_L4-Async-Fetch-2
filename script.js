const apiKey = "RcMqM6X6vDlI0vgXQK6uR6CyXW4QhvkcPA4zdWQ24JrOm06PnDXHTMxT";
const catsUrl = "https://api.pexels.com/v1/search?query=cats";
const dogsUrl = "https://api.pexels.com/v1/search?query=dogs";
const headers = {
  Authorization: apiKey,
};

const generateImages = (query) => {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .then((resObj) => {
      console.log(resObj.photos);

      const row = document.getElementById("imgContainer");

      resObj.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "shadow-sm");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = photo.src.original;
        img.style.height = "200px";
        img.style.objectFit = "cover";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = "Lorem Ipsum";

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText =
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

        const underTextSection = document.createElement("div");
        underTextSection.classList.add("d-flex", "justify-content-between", "align-items-center");

        const btnGroup = document.createElement("div");
        btnGroup.classList.add("btn-group");

        const hideBtn = document.createElement("button");
        hideBtn.classList.add("btn", "btn-outline-secondary", "btn-sm");
        hideBtn.innerText = "Hide";
        hideBtn.addEventListener("click", () => {
          col.remove();
        });

        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "btn-outline-secondary", "btn-sm");
        editBtn.innerText = "Edit";

        const id = document.createElement("small");
        id.classList.add("text-muted");
        id.classList.add("ms-auto");
        id.innerText = photo.id;

        btnGroup.appendChild(hideBtn);
        btnGroup.appendChild(editBtn);

        underTextSection.appendChild(btnGroup);
        underTextSection.appendChild(id);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(underTextSection);

        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((err) => console.log(err));
};

const firstBtn = document.getElementById("firstBtn");
const secondBtn = document.getElementById("secondBtn");
const row = document.getElementById("imgContainer");

firstBtn.addEventListener("click", () => {
  row.innerHTML = "";
  generateImages("mountains");
});

secondBtn.addEventListener("click", () => {
  row.innerHTML = "";
  generateImages("cars");
});
