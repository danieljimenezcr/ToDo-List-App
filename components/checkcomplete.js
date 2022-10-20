const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("fa-regular", "fa-square-check", "checkIcon");
  i.addEventListener("click", completeTask);
  return i;
};

const completeTask = (event) => {
  console.log(event);
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
};

export default checkComplete;