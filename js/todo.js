const input =
  document.getElementById("taskInput");

const addButton =
  document.getElementById("addButton");

const list =
  document.getElementById("taskList");

addButton.addEventListener(
  "click",
  addTask
);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {

  const text =
    input.value.trim();

  if (text === "") {
    return;
  }

  const li =
    document.createElement("li");

  li.innerHTML = `
        <span class="task-text">
            ${text}
        </span>

        <button class="priority-button">
            Make Priority
        </button>
    `;

  list.appendChild(li);

  input.value = "";
}

list.addEventListener(
  "click",
  handleListClick
);

function handleListClick(event) {

  const clickedElement =
    event.target;

  if (
    clickedElement.classList.contains(
      "priority-button"
    )
  ) {

    const li =
      clickedElement.closest("li");

    togglePriority(
      li,
      clickedElement
    );

    return;
  }


  if (
    clickedElement.classList.contains(
      "task-text"
    )
  ) {

    const li =
      clickedElement.closest("li");

    li.remove();
  }
}

function togglePriority(
  li,
  button
) {

  if (
    !li.classList.contains("priority")
  ) {

    li.classList.add("priority");

    button.textContent =
      "Remove Priority";

    moveToPrioritySection(li);
  }
  else {

    li.classList.remove("priority");

    button.textContent =
      "Make Priority";

    moveToNormalSection(li);
  }
}

function moveToPrioritySection(li) {

  const items =
    list.querySelectorAll("li");

  let lastPriority = null;

  for (const item of items) {

    if (
      item !== li &&
      item.classList.contains("priority")
    ) {
      lastPriority = item;
    } else {
      break;
    }
  }

  if (lastPriority) {

    lastPriority.after(li);

  } else {

    list.prepend(li);
  }
}

function moveToNormalSection(li) {

  const items =
    list.querySelectorAll("li");

  let firstNormal = null;

  for (const item of items) {

    if (
      item !== li &&
      !item.classList.contains("priority")
    ) {

      firstNormal = item;
      break;
    }
  }

  if (firstNormal) {

    firstNormal.before(li);

  } else {

    list.appendChild(li);
  }
}