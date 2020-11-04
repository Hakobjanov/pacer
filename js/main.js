const addActivityBtn = document.querySelector(".add-activity-btn");
const newQuestBtn = document.querySelector(".new-quest-btn");
const addActivityGlass = document.querySelector("#add-modal-glass");
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
const activities = [];

addActivityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValues = Object.fromEntries([
    ...new FormData(addActivityForm).entries(),
  ]);
  activities.push(inputValues);

  showActivities();
  glass.hidden = true;
});

function showActivities() {
  activityList.innerHTML = activities
    .map(({ activityName, activityMeasure, activityDifficulty }) => {
      return `
      <li class="list-item">
        <p class="activity-name">${activityName}</p>
        <p class="activity-measure">${activityMeasure}</p>
        <p class="activity-difficulty">${activityDifficulty}</p>
        
        <button hidden class="take-quest-btn">take quest</button>
        <button hidden class="edit-activity-btn">Edit</button>
        <button hidden class="delete-activity-btn">Delete</button>
      </li>
    `;
    })
    .join("");
}
