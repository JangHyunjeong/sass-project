const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

let currentActiveTab = productTab.querySelector('.is-active')

function toggleActiveTab() {
  // 1. tab-item 클래스: is-active
  const tabItem = this.parentNode

  if (currentActiveTab !== tabItem) {
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  }
}

productTabButtonList.forEach((item) => {
  item.addEventListener('click', toggleActiveTab)
})
