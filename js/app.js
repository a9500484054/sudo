document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu-btn')
    const menuClose = document.querySelector('.menu__close')
    const searchBtn = document.querySelector('.search-btn')
    const menu = document.querySelector('.menu')
    const search = document.querySelector('.search')
    const bodyElement = document.body

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu--active')
        menuBtn.classList.toggle('menu-btn--active')
        bodyElement.classList.toggle('overflow')
        

    })


    const menuLinkLlist = document.querySelector('.menu__link-list')
    const menuList2 = document.querySelector('.menu__list-2')

    menuLinkLlist.addEventListener('click', () => {
        menuList2.classList.toggle('menu__list-2--active')
    })

    

    const servicesBlockNavBtnLeft = document.querySelector('.services-block__nav-btn-l')
    const servicesBlockNavBtnRight = document.querySelector('.services-block__nav-btn-r')
    const servicesBlockItem = document.querySelectorAll('.services-block__item')
    const servicesBlockProgess = document.querySelector('.services-block__progess--elem')


    console.log(100/servicesBlockItem.length)

    servicesBlockNavBtnRight.addEventListener('click', () => {
        servicesBlockProgess.style.right = 100/servicesBlockItem.length + '%'
        
    })

    servicesBlockNavBtnLeft.addEventListener('click', () => {
        servicesBlockProgess.style.left = 100/servicesBlockItem.length + '%'
    })

});