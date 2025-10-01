function likePost(button) {
  let span = button.querySelector("span");
  let count = parseInt(span.textContent);
  span.textContent = count + 1;
}

function addComment(event, input) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    let ul = input.nextElementSibling;
    let li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
  }
    }
