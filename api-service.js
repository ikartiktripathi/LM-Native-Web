function fetchGenres() {
    const apiURL = 'http://localhost:8080/genres'; // Replace with your API URL

    fetch(apiURL)
        .then(response => response.json())
        .then(data =>{
            const genreNames = data.map(Genre => Genre.genre_name);
            const genreList = document.getElementById('genreList');
            genreList.innerHTML = '';
            genreNames.forEach(genre_name => {
                const listItem = document.createElement('a');
                listItem.textContent = genre_name;
                genreList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

function fetchLanguages(){
    const apiURL = 'http://localhost:8080/languages';

    fetch(apiURL)
        .then(response => response.json())
        .then(data =>{
            const languageNames = data.map(language => language.language_name);
            const languagesList = document.getElementById('languagesList');
            languagesList.innerHTML = '';
            languageNames.forEach(language_name => {
                const listItem = document.createElement('a');
                listItem.textContent = language_name;
                languagesList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:',error));
}

// Genre show and hide
function toggleGenre() {
    document.getElementById("genreList").classList.toggle("show");
}
function hideGenre() {
    document.getElementById("genreList").classList.remove("show");
}

// Language show and hide
function toggleLanguage() {
    document.getElementById("languagesList").classList.toggle("show");
}
function hideLanguage() {
    document.getElementById("languagesList").classList.remove("show");
}

// Dropdown show and hide
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function hideDropdown() {
    document.getElementById("myDropdown").classList.remove("show");
}

function onLoadHandler(){
    fetchGenres();
    fetchLanguages();
}

// Set the function to run when the window loads
window.onload = onLoadHandler();
