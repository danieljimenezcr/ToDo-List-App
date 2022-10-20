const btn = document.querySelector("[data-form-btn]");
const value = ""

const createTask = (event) => {
  event.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  const task = document.createElement('li');
  const list = document.querySelector('[data-list]')
  task.classList.add("card");
  input.value = '';
  const taskContent = document.createElement('div');
  taskContent.appendChild(checkComplete());
  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(titleTask);
  

  task.appendChild(taskContent);
  list.appendChild(task);

};

btn.addEventListener('click', createTask);

const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add("fa-regular", "fa-square-check", "checkIcon");
  i.addEventListener('click',completeTask);
  return i
  
};

const completeTask = (event) => {
  console.log(event);
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
};

// const deleteIcon = () => {
//   const trashIcon = document.createElement('i');
//   trashIcon.classList.add("fa-regular", "fa-trash-can", "trashIcon",);

//   return trashIcon;
// };