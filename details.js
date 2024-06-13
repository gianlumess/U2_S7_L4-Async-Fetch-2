const params = new URLSearchParams(window.location.search);
const pexelId = params.get("pexelId");

const apiKey = "RcMqM6X6vDlI0vgXQK6uR6CyXW4QhvkcPA4zdWQ24JrOm06PnDXHTMxT";
const headers = {
  Authorization: apiKey,
};

console.log(pexelId);

window.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.pexels.com/v1/photos/" + pexelId, {
    method: "GET",
    headers: headers,
  })
    .then((resp) => resp.json())
    .then((picObj) => {
      console.log(picObj);

      const img = document.createElement("img");
      img.src = picObj.src.original;
      img.style.maxWidth = "100%";
      img.alt = picObj.alt;

      const container = document.getElementById("image-details");
      container.appendChild(img);

      document.body.style.backgroundColor = picObj.avg_color;
    });
});
