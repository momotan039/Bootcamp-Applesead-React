let tasks = []

function saveToLocalStorage() {
    localStorage.removeItem('tasks')
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function getFromLocalStorage() {
    const data = localStorage.getItem('tasks')
    tasks = JSON.parse(data)
    return tasks??[]
}

export function createTask(task) {
    tasks=tasks?tasks:[]
    task.id = tasks.length + 1
    tasks.push(task)
    saveToLocalStorage()
}

export function deleteTask(task) {
    tasks=tasks.filter(t=>t.id!==task.id)
    saveToLocalStorage()
}

export function updateTask(task) {
    const temp=tasks.find(t=>t.id===task.id)
    temp.done=!temp.done
    saveToLocalStorage()
}

export function readTasks(){
    return getFromLocalStorage()
}

