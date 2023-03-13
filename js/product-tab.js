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

// 1. window.scrollY : 문서 시작점에서부터 스크롤 한 양 값
// 2. element.getBoundingClientRect().top : viewport의 시작점에서부터 요소까지의 거리 -> scroll시 요소간의 거리가 달라지므로, element.getBoundingClientRect().top 값도 달라진다
// 3. element.offsetTop : 문서 시작점 기준, element 까지의 거리
// 4. element.getBoundingClientRect().top + window.scrollY  === element.offsetTop

const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

// map vs forEach
// 배열 안의 element 각각을 돈다는 점에서 같음
// map 의 경우, 어떠한 값을 꼭 리턴해줌
// 그리고 return된 값이 모여서 새로운 배열을 형성함

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

// window html 요소들이 싹 다 load 된 다음에 실행
// - 정확한 위치값을 얻기 위해, load 이후에 detactTabPanelPosition 실행
// resize시에도 정확한 위치값을 얻기 위해 resize 이후 detactTabPanelPosition 실행
window.addEventListener('load', detactTabPanelPosition)
window.addEventListener('resize', detactTabPanelPosition)
