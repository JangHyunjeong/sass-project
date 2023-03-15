const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button')

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
}

drawerMenuButtonList.forEach(function (item) {
  item.addEventListener('click', toggleDrawerMenu)
})
