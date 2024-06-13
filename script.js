const apiKey = "RcMqM6X6vDlI0vgXQK6uR6CyXW4QhvkcPA4zdWQ24JrOm06PnDXHTMxT";
const catsUrl = "https://api.pexels.com/v1/search?query=cats";
const dogsUrl = "https://api.pexels.com/v1/search?query=dogs";
const headers = {
  Authorization: apiKey,
};

const catsImages = () => {
  fetch(catsUrl, {
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
    .then((cats) => {
      console.log(cats.photos);

      const row = document.getElementById("imgContainer");

      cats.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = photo.src.original;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = "Lorem Ipsum";

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText =
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

        const hideBtn = document.createElement("a");
        hideBtn.classList.add("btn");
        hideBtn.classList.add("btn-danger");
        hideBtn.innerText = "Hide";
        hideBtn.addEventListener("click", () => {
          col.remove();
        });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(hideBtn);

        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((err) => console.log(err));
};

const dogsImages = () => {
  fetch(dogsUrl, {
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
    .then((dogs) => {
      console.log(dogs.photos);

      const row = document.getElementById("imgContainer");

      dogs.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = photo.src.original;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = "Lorem Ipsum";

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText =
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

        const hideBtn = document.createElement("a");
        hideBtn.classList.add("btn");
        hideBtn.classList.add("btn-danger");
        hideBtn.innerText = "Hide";
        hideBtn.addEventListener("click", () => {
          col.remove();
        });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(hideBtn);

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

firstBtn.addEventListener("click", catsImages);
secondBtn.addEventListener("click", dogsImages);
