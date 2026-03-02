const input = document.getElementById('todoinput'); 
const addBtn = document.getElementById('addBtn'); 
const todoList = document.getElementById('todoList');


addBtn.addEventListener('click', () => {
    const taskText = input.value;
    
        const li = document.createElement('li');
        li.textContent = taskText;

     
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => li.remove(); 
        li.appendChild(deleteBtn);
        todoList.appendChild(li); 
        input.value = ""; 
   
});

