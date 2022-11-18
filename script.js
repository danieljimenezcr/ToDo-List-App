import checkComplete from "./components/checkcomplete.js";
import deleteIcon from "./components/deleteicon.js";

const btn = document.querySelector("[data-form-btn]");
const value = "";

const addTask = (event) => {
  const list = document.querySelector("[data-list]");
  const task = createTask(event)
  list.appendChild(task);
};

const taskList = [];

const createTask = (event) => {
  event.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const calendar =  document.querySelector("[data-form-date]");
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY');
  const value = input.value;
  const task = document.createElement("li");

  task.classList.add("card");
  input.value = "";
  const taskContent = document.createElement("div");

  const taskObj = {
    value,
    dateFormat,
  }

  taskList.push(taskObj)

  localStorage.setItem('task', JSON.stringify(taskList));


  taskContent.appendChild(checkComplete());
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(titleTask);

  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;

  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());
  return task;
};

btn.addEventListener("click", addTask);
