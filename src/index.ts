import { v4 as uuidV4 } from "uuid"

type Task = {
  id: String,
  title: String,
  completed: Boolean,
  createdAt: Date
}

const list = document.getElementById("list") as HTMLUListElement || null
const form = document.getElementById("new-task form") as HTMLFormElement || null
const input = document.getElementById("new-task-title") as HTMLInputElement || null

form?.addEventListener("submit", event => {
  event.preventDefault()

  if (input.value == "" || input.value == null) {
    return
  }

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  }

  addListItem(newTask)
})

function addListItem(task: Task) {
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"

}