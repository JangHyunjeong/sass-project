const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark() {
  // 1. 버튼 클래스 + is-active
  // 2. icon 클래스 -> ic-bookmark-filled
  // 3. 카운트 숫자 +1

  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))
  let newCount = count

  console.log(typeof count)

  if (this.classList.contains('is-active')) {
    // 비활성화
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
    console.log(newCount)
  } else {
    // 활성화
    icon.classList.remove('ic-bookmark')
    icon.classList.add('ic-bookmark-filled')
    newCount = newCount + 1
    console.log(newCount)
  }

  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
