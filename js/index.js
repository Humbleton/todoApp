const addButton = document.querySelector('.add-button');
const addText = document.querySelector('.add-text');
const body = document.querySelector('body');
const addedItems = document.querySelector('.added-items');
const filterOption = document.querySelector('.filter-todo');


// * ADDING EVENT LISTENERS
// 1. ADD EVENT
addButton.addEventListener('click', addTodoElement);
// 1.1 DELETE EVENT
addedItems.addEventListener('click', deleteCompletedElement)
// 1.2 FILTER EVENT
filterOption.addEventListener('click', filterTodoList);


// * Functions
function addTodoElement(event) {
    // Prevent default method is needed to halt the default event from occurring.
    event.preventDefault();
    // * TODO DIV
    const todoDivItem = document.createElement('div');
    todoDivItem.classList.add('to-do');

    // * Create li
    const todoListItem = document.createElement('li');
    todoListItem.classList.add('todo-item');
    todoListItem.textContent = addText.value;
    todoDivItem.appendChild(todoListItem);
    // Complete Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    completedButton.classList.add('btn-complete');
    todoDivItem.appendChild(completedButton);
    // DELETE button
    const deletedButton = document.createElement('button');
    deletedButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    deletedButton.classList.add('btn-delete');
    todoDivItem.appendChild(deletedButton);

    // APPEND TO THE ADDING ITEMS UNORDERED LISTS
    addedItems.appendChild(todoDivItem)
    // Clear todo input value
    addText.value = '';
}
function deleteCompletedElement(evt) {
    const target = evt.target;
    // *DELETING COMPLETED ITEM
    if(target.classList[0] === 'btn-delete') {
        const todo = target.parentElement;
        // Animate the deleted items
        todo.classList.add('phase-out')
        todo.remove();
    }
    // COMPLETE MARK
    if(target.classList[0] === 'btn-complete') {
        const todo = target.parentElement;
        todo.classList.toggle('completed');

    }
}
function filterTodoList(evt) {
    const todoItems = addedItems.childNodes;
    todoItems.forEach(item => {
        switch(evt.target.value) {
            case 'all':
                item.style.display = 'flex';
                break;
                case 'completed':
                    if(item.classList.contains('completed')) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';

                    }
                    break;
                    case 'incomplete':
                        if(!item.classList.contains('completed')) {
                            item.style.display = 'flex';
                        } else {
                            item.style.display = 'none';
                        }
                        break;
        }
    })
}