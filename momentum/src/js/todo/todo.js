export const todo = () => {
  const todoBtnEl = document.querySelector('.todo__btn');
  const todoInputEl = document.querySelector('.todo__input');
  const todoListEl = document.querySelector('.todo-list');
  const todoHeadingEl = document.querySelector('.todo__heading');

  class Storage {
    static addToStorage(todoArr){
        let storage = localStorage.setItem("todo", JSON.stringify(todoArr));
        return storage;
    }

    static getStorage(){
        let storage = localStorage.getItem("todo") === null ? 
        [] : JSON.parse(localStorage.getItem("todo"));
      
        return storage
    }
}

  let todoListArr = Storage.getStorage()
  if(todoListArr.length) {
    renderData()
  }


  function renderData() {
    todoHeadingEl.classList.add('todo__heading--disabled');
    todoInputEl.value = '';
    let displayData = todoListArr.map((item) => {
      return `
        <li class="list-item">${item.todo}
        <i class="remove__btn fa-solid fa-trash" data-id="${item.id}"></i> 
        </li>
      `;
    });
    todoListEl.innerHTML = displayData.join(' ');
  }

  class Todo {
    constructor(id, todo) {
      this.id = id;
      this.todo = todo;
    }
  }

  const removeItemFromArray = (id) => {
    todoListArr = todoListArr.filter((item) => item.id !== +id);
    if (todoListArr.length === 0) {
      todoHeadingEl.classList.remove('todo__heading--disabled');
      todoInputEl.classList.remove('todo__input--active')
    }
    Storage.addToStorage(todoListArr)
  };

  const removeTodoItem = (e) => {
    if (e.target.classList.contains('remove__btn')) {
      e.target.parentElement.remove();
    }
    let removeBtnId = e.target.dataset.id;
    removeItemFromArray(removeBtnId);
  };

  const addTodoItem = (value) => {
    let id = Math.random() * 1000;
    const todo = new Todo(id, value);
    todoListArr = [...todoListArr, todo];
    Storage.addToStorage(todoListArr)
    renderData();
  };

  const getTodoValue = (e) => {
    let value = e.target.value;
    addTodoItem(value);
  };

  todoBtnEl.addEventListener('click', () => {
    todoInputEl.focus();
    todoInputEl.classList.add('todo__input--active');
  });

  todoInputEl.addEventListener('change', getTodoValue);
  todoListEl.addEventListener('click', (e) => {
    removeTodoItem(e);
  });
  window.addEventListener('DOMContentLoaded', () => {
    Storage.getStorage()
    if(todoHeadingEl.classList.contains('todo__heading--disabled')) {
      todoInputEl.classList.add('todo__input--active');
    } 

  });
};
