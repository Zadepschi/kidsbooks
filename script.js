const inputField = document.querySelector("#search");
const books = document.querySelectorAll(".book");

inputField.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();
    
  books.forEach(item => {
    item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display ="none")
  })
})
