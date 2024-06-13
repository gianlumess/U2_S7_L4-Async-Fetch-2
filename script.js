const apiKey = "RcMqM6X6vDlI0vgXQK6uR6CyXW4QhvkcPA4zdWQ24JrOm06PnDXHTMxT";
const url = "https://api.pexels.com/v1/search?query=cats";

const headers = {
  Authorization: apiKey,
};

const catsImages = () => {
  fetch(url, {
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

      const row = document.querySelector(".row");

      cats.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = photo.src.original;

        card.appendChild(img);

        col.appendChild(card);
        row.appendChild(col);
      });
    });
};

const firstBtn = document.getElementById("firstBtn");
const secondBtn = document.getElementById("secondBtn");

firstBtn.addEventListener("click", catsImages);
