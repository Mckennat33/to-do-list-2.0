

const newToDo = document.querySelector("input")

const toDoForm = document.querySelector(".list-items-div")
const listItemsDisplay = document.querySelector(".list-items-display")
const addBttn = document.querySelector(".add-bttn")


addBttn.addEventListener("click", addToDo)


function addToDo(e){
    e.preventDefault()
    const newToDoItem = document.createElement("li")
    newToDoItem.id = "toDoItem"
    newToDoItem.innerText = newToDo.value
    listItemsDisplay.appendChild(newToDoItem)


}




