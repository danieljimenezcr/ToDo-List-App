const deleteIcon = () => {
  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-trash-can", "trashIcon");
  i.addEventListener("click", deleteTask);
  return i;
};

const deleteTask = (event) => {
  const parent = event.target.parentElement;
  console.log(parent);
  parent.remove();
};
export default deleteIcon;