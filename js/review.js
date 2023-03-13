const reviewLikeButtonList = document.querySelectorAll(
  '.review-card-footer button'
)

const HELPFUL = '도움됨'
const NOT_HELPFPUL = '도움이 돼요'
// const checkIcon = '<i class="ic-check" aria-hidden="true"></i>'

function toggleReviewLikeButton() {
  // 1. btn 클래스 : btn-primary -> btn-outlined
  // 2. 텍스트 변경 : 도움됨 -> 도움이 돼요
  // 3. count : n명에게 도움이 되었습니다.
  const isLiked = this.classList.contains('btn-primary')
  const textElement = this.nextElementSibling
  const reviewCardFooter = this.parentNode

  if (isLiked) {
    // 비활성화
    this.innerHTML = NOT_HELPFPUL
  } else {
    // 활성화
    this.innerHTML = HELPFUL

    const checkIcon = document.createElement('i')
    checkIcon.classList.add('ic-check')
    checkIcon.setAttribute('aria-hidden', 'true')
    this.prepend(checkIcon)
  }

  if (textElement) {
    // textElement 있을때
    const countSpan = textElement.querySelector('span')
    const count = Number(countSpan.innerHTML.replaceAll(',', ''))

    let newCount = count

    if (isLiked) {
      // 비활성화 : - 1
      newCount = newCount - 1
      if (newCount === 0) {
        // 1) 0일때 : 문구 없음
        reviewCardFooter.removeChild(textElement)
      } else {
        // 2) n - 1 명에게 도움이 되었습니다.
        countSpan.innerHTML = newCount.toLocaleString()
      }
    } else {
      // 활성화 : + 1
      newCount = newCount + 1
      countSpan.innerHTML = newCount.toLocaleString()
    }
  } else {
    // textElement 없을때 -> 1명에게 도움이 되었습니다.
    const newTextElement = document.createElement('p')
    newTextElement.innerHTML =
      '<strong><span>1</span>명</strong> 에게 도움이되었습니다.'
    reviewCardFooter.appendChild(newTextElement)
  }

  this.classList.toggle('btn-primary')
  this.classList.toggle('btn-outlined')
}

reviewLikeButtonList.forEach((item) => {
  item.addEventListener('click', toggleReviewLikeButton)
})
