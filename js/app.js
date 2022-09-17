document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu-btn')
    const menuClose = document.querySelector('.menu__close')
    const searchBtn = document.querySelector('.search-btn')
    const searchClose = document.querySelector('.search__close')
    const menu = document.querySelector('.menu')
    const search = document.querySelector('.search')
    const bodyElement = document.body

    menuBtn.addEventListener('click', () => {
        menu.classList.add('menu--active')
        bodyElement.style.overflow = "hidden"
    })

    menuClose.addEventListener('click', () => {
        menu.classList.remove('menu--active')
        bodyElement.style.overflow = "auto"
    })

    searchBtn.addEventListener('click', () => {
        search.classList.add('search--active')
        bodyElement.style.overflow = "hidden"
    })

    searchClose.addEventListener('click', () => {
        search.classList.remove('search--active')
        bodyElement.style.overflow = "auto"
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