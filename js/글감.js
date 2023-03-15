// 1. window.scrollY : 문서 시작점에서부터 스크롤 한 양 값
// 2. element.getBoundingClientRect().top : viewport의 시작점에서부터 요소까지의 거리 -> scroll시 요소간의 거리가 달라지므로, element.getBoundingClientRect().top 값도 달라진다
// 3. element.offsetTop : 문서 시작점 기준, element 까지의 거리
// 4. element.getBoundingClientRect().top + window.scrollY  === element.offsetTop

// map vs forEach
// 배열 안의 element 각각을 돈다는 점에서 같음
// map 의 경우, 어떠한 값을 꼭 리턴해줌
// 그리고 return된 값이 모여서 새로운 배열을 형성함

// const productTabPanelList = productTabPanelIdList.forEach((panelId) => {
//   const tabPanel = document.querySelector(`#${panelId}`)
//   return tabPanel
// })
// console.log(productTabPanelList)
