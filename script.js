function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();
    
    if (todoText !== '') {
      const todoList = document.getElementById('todoList');
      const li = document.createElement('li');
      li.innerHTML = `
        <span onclick="toggleComplete(this)">${todoText}</span>
        <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
      `;
      todoList.appendChild(li);
      input.value = '';
    }
  }
  
  function toggleComplete(element) {
    element.classList.toggle('completed');
  }
  
  function deleteTodo(element) {
    element.parentElement.remove();
  }
  
  document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTodo();
    }
  });