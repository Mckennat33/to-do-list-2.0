

const newToDo = document.querySelector("input")

const toDoForm = document.querySelector(".list-items-div")
const listItemsDisplay = document.querySelector(".list-items-display")
const addBttn = document.querySelector(".add-bttn")

const toDoItemsArray = [
    {
        id: new Date().getTime(),
        text: "",
        completed: false
    }
]
addBttn.addEventListener("click", addToDo)

function addToDo(e){
    e.preventDefault()
    const newToDoValue = newToDo.value
    const toDoItemEntered = {
        id: new Date().getTime(),
        text: newToDoValue, 
        completed: false
    }
    toDoItemsArray.push(toDoItemEntered)

    const addedToDoItem = document.createElement("li")
    addedToDoItem.classList.add("list-item")
    addedToDoItem.innerHTML = newToDoValue

    listItemsDisplay.appendChild(addedToDoItem)
    console.log(toDoItemEntered)

}




