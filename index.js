let message = document.querySelector('#message')

function addMovie(evt) {
    event.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.addEventListener('click', crossOffMovie)
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    

    let list = document.querySelector('ul');
    list.appendChild(movie);

    let deleteBtn = document.createElement('button');
    deleteBtn.addEventListener('click', deleteMovie);
    deleteBtn.textContent = 'x';
    movie.appendChild(deleteBtn);
    
    inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie);

function deleteMovie(evt) {
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}

function crossOffMovie(evt) {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}