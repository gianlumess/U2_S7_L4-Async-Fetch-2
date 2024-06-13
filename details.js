const id = new URLSearchParams(window.location.search).get("imageId");

console.log(id);

window.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.pexels.com/v1/photos/" + id)
    .then((resp) => {
      if (resp.ok) {
        console.log(resp);
        return resp.json();
      } else {
        throw new Error("Errore nella fetch");
      }
    })
    .then((imgObj) => {
      const container = document.getElementById("image-details");
    });
});
