const dropdownButton = document.querySelector('#hamburger-button')
const dropdownList = document.querySelector('.hamburger-menu-container')

function toggle() {
  dropdownList.classList.toggle('hidden')
}

dropdownButton.addEventListener('click', toggle)