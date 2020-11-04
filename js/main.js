const addActivityBtn = document.querySelector(".add-activity-btn");
const newQuestBtn = document.querySelector(".new-quest-btn");
const addActivityGlass = document.querySelector("#add-modal-glass");
const glassHolder = document.querySelector(".glass-holder");
const glasses = document.querySelectorAll(".glass");
const glass = document.querySelector(".glass");
const questGlass = document.querySelector("#quest-modal-glass");
const addActivityModal = document.querySelector(".add-modal");
const questModal = document.querySelector(".quest-modal");
const closeModalBtns = document.querySelectorAll(".close-modal-btn");
const addActivityForm = document.querySelector(".add-activity-form");
const saveActivityBtn = document.querySelector(".save-activity-btn");
const activityList = document.querySelector(".list");

addActivityBtn.addEventListener("click", () => {
  addActivityGlass.hidden = false;
});

newQuestBtn.addEventListener("click", () => {
  questGlass.hidden = false;
});

glasses.forEach((glass) => {
  glass.addEventListener("click", (e) => {
    if (e.target === glass) {
      glass.hidden = true;
    }
  });
});

closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    glasses.forEach((glass) => {
      glass.hidden = true;
    });
  });
});

//adding new activity
let id = 0;
const activities = [
  {
    id: ++id,
    name: "swimming",
    measure: "1 hour",
    diff: 7,
  },
  {
    id: ++id,
    name: "running",
    measure: "1 hour",
    diff: 5,
  },
  {
    id: ++id,
    name: "english",
    measure: "3 hour",
    diff: 8,
  },
];

showActivities();

addActivityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValues = Object.fromEntries([
    ...new FormData(addActivityForm).entries(),
  ]);

  activities.push({ id: ++id, ...inputValues });

  showActivities();
  glass.hidden = true;
});

activityList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-activity-btn")) {
    deleteActivity(e.target.parentElement.dataset.id);
  }
});

function showActivities() {
  activityList.innerHTML = activities
    .map(({ id, name, measure, diff }) => {
      return `
      <li class="list-item" data-id="${id}">
        <p class="activity-name" title="Activity name">${name}</p>
        <p class="activity-measure"  title="Activity measure">${measure}</p>
        <strong class="activity-difficulty"  title="Activity difficulty">${diff}</strong>
        
        <button hidden class="take-quest-btn">take quest</button>
        <button hidden class="edit-activity-btn">Edit</button>
        <button hidden class="delete-activity-btn">Delete</button>
      </li>
    `;
    })
    .join("");
}

function deleteActivity(id) {
  const index = activities.findIndex((activity) => +id === activity.id);
  activities.splice(index, 1);
  showActivities();
}
