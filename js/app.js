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

    searchBtn.addEventListener('click', () => {
        search.classList.toggle('search--active')
    })


    const menuLinkLlist = document.querySelector('.menu__link-list')
    const menuList2 = document.querySelector('.menu__list-2')

    menuLinkLlist.addEventListener('click', () => {
        menuList2.classList.toggle('menu__list-2--active')
    })

    
    const indexBlockBbtn = document.querySelectorAll('.index-block__btn')
    const modalFeedback = document.querySelector('.modal-feedback')
    const modalFeedbackClose = document.querySelector('.modal-feedback__close')

    indexBlockBbtn.forEach(function(event) {
        event.addEventListener('click', function(event) {
            modalFeedback.classList.add('modal-feedback--active')

            modalFeedback.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })

    modalFeedbackClose.addEventListener('click', () => {
        modalFeedback.classList.remove('modal-feedback--active')
    })

    const servicesBlockNavBtnLeft = document.querySelector('.services-block__nav-btn-l')
    const servicesBlockNavBtnRight = document.querySelector('.services-block__nav-btn-r')
    const servicesBlockItem = document.querySelectorAll('.services-block__item')
    const servicesBlockProgess = document.querySelector('.services-block__progess--elem')
    let count = 0
    let positionElement = 0

    let i = 100/servicesBlockItem.length
    console.log(i)

    servicesBlockProgess.style.width = i + '%'
    
    servicesBlockNavBtnRight.addEventListener('click', () => {
        count++
        positionElement += i
        servicesBlockNavBtnLeft.removeAttribute('disabled');
        if(count == servicesBlockItem.length - 1) {
            servicesBlockNavBtnRight.setAttribute('disabled', false);
        }
        servicesBlockProgess.style.left = positionElement + "%"
        servicesBlockItem.forEach(el => el.classList.remove('services-block__item--active'))
        servicesBlockItem[count].classList.add('services-block__item--active')
    })

    servicesBlockNavBtnLeft.addEventListener('click', () => {
        count--
        positionElement -= i
        servicesBlockNavBtnRight.removeAttribute('disabled');
        if(count == 0) {
            servicesBlockNavBtnLeft.setAttribute('disabled', true);
        }
        servicesBlockProgess.style.left = positionElement + "%"
        servicesBlockItem.forEach(el => el.classList.remove('services-block__item--active'))
        servicesBlockItem[count].classList.add('services-block__item--active')
    })


});