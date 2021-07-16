import _ from 'lodash';
import './style.css';

const list = document.getElementById('list');

const todoList = [
  {
    description: 'Take the project online',
    completed: false,
    index: 5,
  },
  {
    description: 'Make a commit',
    completed: true,
    index: 4,
  },
  {
    description: 'Add structures',
    completed: false,
    index: 3,
  },
  {
    description: 'Install webpack',
    completed: false,
    index: 2,
  },
  {
    description: 'Create a repo',
    completed: false,
    index: 1,
  },
];

function renderList(arr) {
  list.innerHTML = arr.sort((a, b) => +a.index - +b.index).map((item) => `<li class="flex-row todo" data-id="${item.index}">
    <input type="checkbox" class="checkbox" id="${item.index}"  ${item.completed ? 'checked' : ''}>
    <input type="text" value="${item.description}" data-index="${item.index}" class="todo-text ${item.completed ? 'completed' : ''}">
    <i class="fas fa-ellipsis-v dots"></i>
    </li>`).join('');
  document.querySelectorAll('.todo-text').forEach((text) => {
    text.addEventListener('focus', (event) => {
      document.querySelectorAll('.todo').forEach((t) => {
        t.style.backgroundColor = '#fff';
      });
      event.target.parentNode.style.backgroundColor = '#fea';
    });
  });

  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((chbox) => {
    chbox.addEventListener('change', (event) => {
      event.target.nextElementSibling.classList.toggle('completed');
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderList(todoList);
});
