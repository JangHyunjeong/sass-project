const searchModal = document.querySelector('.search-modal')
const searchOverlay = document.querySelector('.overlay')
const searchButton = document.querySelector('.gnb-icon-button.is-search')
const searchModalCloseButton = searchModal.querySelector('.btn-ghost.btn-40')

function openSearchModal() {
  searchModal.classList.add('is-active')
  searchOverlay.classList.add('is-active')
}

function CloseSearchModal() {
  searchModal.classList.remove('is-active')
  searchOverlay.classList.remove('is-active')
}

searchButton.addEventListener('click', openSearchModal)
searchModalCloseButton.addEventListener('click', CloseSearchModal)
