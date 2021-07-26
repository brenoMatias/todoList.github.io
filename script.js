const instructions = document.createElement('p');
instructions.id = 'funcionamento';
instructions.innerText = '*Clique duas vezes em um item para marcá-lo como completo';
document.getElementById('header').appendChild(instructions);

const input = document.querySelector('.input-task'); 
const inputTask = document.createElement('input');
inputTask.type = 'text';
inputTask.id = 'texto-tarefa';
inputTask.placeholder = '  Adicione aqui sua tarefa!';
input.appendChild(inputTask);

const task = document.querySelector('.task-list'); 
const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
task.appendChild(taskList);

const button = document.querySelector('.button-input-task'); 
const buttoni = document.createElement('button');
buttoni.id = 'criar-tarefa';
buttoni.innerText = 'Adicionar tarefa';
button.appendChild(buttoni);

function addAnotherTask() {
  const text = inputTask.value; 
  if (text === '') { 
    alert('Insira uma tarefa!');
  }
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  li.classList.add('taskItem');
  li.id = 'task-item';
  li.innerText = text; 
  ol.appendChild(li);
  inputTask.value = ''; 
}

buttoni.addEventListener('click', addAnotherTask);

const ol = document.getElementById('lista-tarefas');

function selectItem(event) {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected !== null) { 
    itemSelected.classList.remove('selected');
  }
  event.target.classList.add('selected'); 
}
ol.addEventListener('click', selectItem);

function toggleCompleted(event) {
  event.target.classList.toggle('completed'); 
}
ol.addEventListener('dblclick', toggleCompleted); 

const clickClear = document.querySelector('.button-clear');
const buttonClear = document.createElement('button');
buttonClear.innerHTML = 'Limpar tarefas';
clickClear.appendChild(buttonClear);
buttonClear.id = 'apaga-tudo';

function clearBox() {
  const itemsToClear = document.getElementsByTagName('li'); 
  const list = document.querySelector('#lista-tarefas'); 
  if (itemsToClear.length > 0) {
    while (list.firstChild) { 
      list.removeChild(list.firstChild);
    }
  } else {
    alert('A lista está vazia!'); 
  }
}
buttonClear.addEventListener('click', clearBox);

const clickClearCompleted = document.querySelector('.button-clear-completed');
const buttonClearCompleted = document.createElement('button');
buttonClearCompleted.innerHTML = 'Limpar tarefas completas';
clickClearCompleted.appendChild(buttonClearCompleted);
buttonClearCompleted.id = 'remover-finalizados';

function clearBoxCompleted() {
  const itemsCompletedToClear = document.getElementsByClassName('completed'); 
  const listCompletedToClear = document.querySelector('#lista-tarefas'); 
  if (itemsCompletedToClear.length > 0) { 
    while (listCompletedToClear.firstChild) { 
      itemsCompletedToClear[0].parentNode.removeChild(itemsCompletedToClear[0]); 
    } 
  } else {
    alert('Você não possui tarefas completas!');
  }
}
buttonClearCompleted.addEventListener('click', clearBoxCompleted);

const clickSave = document.querySelector('.button-save');
const buttonSave = document.createElement('button');
buttonSave.innerHTML = 'Atualizar tarefas';
clickSave.appendChild(buttonSave);
buttonSave.id = 'salvar-tarefas';

function saveTasks() {
  const taskListSaveLocal = document.getElementById('lista-tarefas');
  localStorage.setItem('tasks', taskListSaveLocal.innerHTML);
}
function retrieveTasks() {
  const taskListSaveLocal = document.getElementById('lista-tarefas');
  taskListSaveLocal.innerHTML = localStorage.getItem('tasks');
}

window.onload = retrieveTasks();
buttonSave.addEventListener('click', saveTasks); 

const clickUp = document.querySelector('.button-up');
const buttonUp = document.createElement('button');
buttonUp.innerHTML = 'Mover para cima';
clickUp.appendChild(buttonUp);
buttonUp.id = 'mover-cima';

function moveUp() { 
  const taskUp = document.querySelector('.selected'); 
  if (ol.firstChild !== taskUp && taskUp != null) { 
    ol.insertBefore(taskUp, taskUp.previousSibling);
  } 
} 
buttonUp.addEventListener('click', moveUp);

const clickDown = document.querySelector('.button-down'); 
const buttonDown = document.createElement('button');
buttonDown.innerHTML = 'Mover para baixo';
clickDown.appendChild(buttonDown);
buttonDown.id = 'mover-baixo';

function moveDown() {
  const taskDown = document.querySelector('.selected');
  if (ol.lastChild !== taskDown && taskDown != null) { 
    ol.insertBefore(taskDown.nextSibling, taskDown); 
  } 
buttonDown.addEventListener('click', moveDown);

const clickRemoveSelected = document.querySelector('.remove-selected');
const buttonRemoveSelected = document.createElement('button');
buttonRemoveSelected.innerHTML = 'Remover tarefa selecionada';
clickRemoveSelected.appendChild(buttonRemoveSelected);
buttonRemoveSelected.id = 'remover-selecionado';

function removeTaskSelected() {
  const taskSelectedToRemove = document.querySelector('.selected'); 
  taskSelectedToRemove.remove(); 
}
buttonRemoveSelected.addEventListener('click', removeTaskSelected);

Cypress.on('uncaught:exception', (err, runnable) => false);}
