const input = document.getElementById('inputBox')
const listItems = document.getElementById('listItems')

function addTask() {
    
    if (input.value === '') {
        alert("Please enter a task")
    } else {

        let li = document.createElement('li')
        
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList.add('checkbox')
        checkbox.onclick = function(){
            li.classList.toggle('completed')
        }
        li.appendChild(checkbox)

        let taskText = document.createElement('span')
        taskText.textContent = input.value
        li.appendChild(taskText)

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn')
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
        deleteBtn.onclick = function () { 
            li.remove()
        }
        li.appendChild(deleteBtn)

        listItems.appendChild(li)

       
        input.value = '';
    }
}

        