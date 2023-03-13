const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const gnbSearchHistoryList = gnbSearch.querySelector('ol')
const deleteButtonList = gnbSearchHistoryList.querySelectorAll('.delete-button')

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
}

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
  gnbSearchHistory.classList.add('is-active')
}

function deleteAllHistoryItems() {
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearchHistory()
}

function deleteSearchHistoryItem(e) {
  e.stopPropagation() // 이벤트 전파 방지 (closeGnbSearchHistoryOnClickingOutside 실행 방지)
  const itemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(itemToDelete)

  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistory()
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
deleteAllButton.addEventListener('click', deleteAllHistoryItems)
deleteButtonList.forEach((button) =>
  button.addEventListener('click', deleteSearchHistoryItem)
)
