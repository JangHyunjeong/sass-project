const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

let TOP_HEADER_DESKTOP = 80 + 50 + 54
let TOP_HEADER_MOBILE = 50 + 40 + 40

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

function scrollToTabpanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)
  let scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabpanel)
})

const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  return tabPanel
})

productTabPanelPositionMap = {}

function detactTabPanelPosition() {
  productTabPanelList.forEach((panel) => {
    // 1. 각각의 tabpanel의 id와 y축 위치를 찾는다.
    const id = panel.getAttribute('id')
    const position = panel.offsetTop

    // 2. productTabPanelPositionMap에 그 값을 업데이트
    productTabPanelPositionMap[id] = position
  })
}

function updateActiveTabOnScroll() {
  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP + 80 : TOP_HEADER_MOBILE + 8)

  let newActiveTab

  if (scrolledAmount >= productTabPanelPositionMap['product-recommendation']) {
    // 5. 추천 활성화
    newActiveTab = productTabButtonList[4]
  } else if (scrolledAmount >= productTabPanelPositionMap['product-shipment']) {
    // 4. 배송/환불 활성화
    newActiveTab = productTabButtonList[3]
  } else if (scrolledAmount >= productTabPanelPositionMap['product-inquiry']) {
    // 3. 문의 활성화
    newActiveTab = productTabButtonList[2]
  } else if (scrolledAmount >= productTabPanelPositionMap['product-review']) {
    // 2. 리뷰 활성화
    newActiveTab = productTabButtonList[1]
  } else {
    // 1. 상품정보 활성화
    newActiveTab = productTabButtonList[0]
  }

  // 활성화된 탭버튼 변경
  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode
    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active')
      currentActiveTab.classList.remove('is-active')
      currentActiveTab = newActiveTab
    }
  }
}

window.addEventListener('load', detactTabPanelPosition)
window.addEventListener('resize', detactTabPanelPosition)
window.addEventListener('scroll', updateActiveTabOnScroll)
