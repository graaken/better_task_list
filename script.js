const h1 = document.querySelector('h1');
const nameInput = document.querySelector('#nameInput');
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.querySelector('#taskInput');
    const ul = document.querySelector('#taskList');
    const li = document.createElement('li');
    li.innerText = taskInput.value;
    
    ul.appendChild(li);
    
    taskInput.value = '';
    
})

nameInput.addEventListener('input', function(e) {
    h1.innerText = 'Welcome to the better task list,' + ' ' + nameInput.value + '!';
    
    if (nameInput.value === '') {
        h1.innerText = "Welcome to the better task list!";
    }
})
