// const { Checkbox } = require("semantic-ui-react")

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

   // make a checkbox
    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.id = "checkbox"
    checkBox.classList.add("checkBox")
    checkBox.addEventListener("click", function() {
        // add line through text if checkbox is not checked
        if (checkBox.checked == true) {
            addedToDoItem.style.textDecoration = "line-through"
        } else {
            addedToDoItem.style.textDecoration = "none"
        }
    })

    const toDoItemEntered = {
        id: new Date().getTime(),
        text: newToDoValue, 
        checkBox: checkBox
    }
    
    toDoItemsArray.push(toDoItemEntered)

    const addedToDoItem = document.createElement("li")
    addedToDoItem.classList.add("list-item")
    addedToDoItem.innerHTML = newToDoValue





    listItemsDisplay.appendChild(addedToDoItem)
    addedToDoItem.appendChild(checkBox)
}




