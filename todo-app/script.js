const titleInput = document.querySelector('#title');
const descInput = document.querySelector('#desc');
const form = document.querySelector('form');
const todos = document.querySelector('#todos');

console.log('start');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const title = titleInput.value.trim();
    const desc = descInput.value.trim();


    if (title === '' || desc === '') {
        alert('Please fill all inputs!');
        return;
    }

    const li = document.createElement('li');

    const newTitle = document.createElement('h3');
    newTitle.innerText = title;

    const newDesc = document.createElement('p');
    newDesc.innerText = desc;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.style.backgroundColor = 'red';
    deleteBtn.style.padding = '5px';
    deleteBtn.style.borderRadius = '6px';
    // deleteBtn.addAttribute('id', 'deleteBtn');

    deleteBtn.addEventListener('click', () => {
        li.remove();
    })

    li.append(newTitle);
    li.append(newDesc);
    li.append(deleteBtn);

    todos.append(li);


    titleInput.value = '';
    descInput.value = '';



})

console.log('End');

