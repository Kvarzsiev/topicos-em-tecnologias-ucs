document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  button.addEventListener("click", handleImageInput);
});

function handleImageInput() {
  try {
    console.log("func");
    const input = document.getElementById("imageInput");

    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  } catch (err) {
    console.log("erro", err);
  }
}
