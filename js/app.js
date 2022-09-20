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

    
    // const indexBlockBbtn = document.querySelectorAll('.index-block__btn')
    // const modalFeedback = document.querySelector('.modal-feedback')
    // const modalFeedbackClose = document.querySelector('.modal-feedback__close')

    // indexBlockBbtn.forEach(function(event) {
    //     event.addEventListener('click', function(event) {
    //         modalFeedback.classList.add('modal-feedback--active')

    //         modalFeedback.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         })
    //     })
    // })

    // modalFeedbackClose.addEventListener('click', () => {
    //     modalFeedback.classList.remove('modal-feedback--active')
    // })

    // const servicesBlockNavBtnLeft = document.querySelector('.services-block__nav-btn-l')
    // const servicesBlockNavBtnRight = document.querySelector('.services-block__nav-btn-r')
    // const servicesBlockItem = document.querySelectorAll('.services-block__item')
    // const servicesBlockProgess = document.querySelector('.services-block__progess--elem')
    // let count = 0
    // let positionElement = 0

    // let i = 100/servicesBlockItem.length
    // console.log(i)

    // servicesBlockProgess.style.width = i + '%'
    
    // servicesBlockNavBtnRight.addEventListener('click', () => {
    //     count++
    //     positionElement += i
    //     servicesBlockNavBtnLeft.removeAttribute('disabled');
    //     if(count == servicesBlockItem.length - 1) {
    //         servicesBlockNavBtnRight.setAttribute('disabled', false);
    //     }
    //     servicesBlockProgess.style.left = positionElement + "%"
    //     servicesBlockItem.forEach(el => el.classList.remove('services-block__item--active'))
    //     servicesBlockItem[count].classList.add('services-block__item--active')
    // })

    // servicesBlockNavBtnLeft.addEventListener('click', () => {
    //     count--
    //     positionElement -= i
    //     servicesBlockNavBtnRight.removeAttribute('disabled');
    //     if(count == 0) {
    //         servicesBlockNavBtnLeft.setAttribute('disabled', true);
    //     }
    //     servicesBlockProgess.style.left = positionElement + "%"
    //     servicesBlockItem.forEach(el => el.classList.remove('services-block__item--active'))
    //     servicesBlockItem[count].classList.add('services-block__item--active')
    // })


    const ProjectsSortBtn = document.querySelectorAll('.projects__sort-btn')
    const projectsCard = document.querySelectorAll('.projects-card')
    const projectsCardEng = document.querySelectorAll('.projects-card--eng')
    const projectsCardSci = document.querySelectorAll('.projects-card--sci')
    const projectsContainer = document.querySelector('.projects__container')
    const btnOne = document.querySelector('#btn-one')
    const btnTwo = document.querySelector('#btn-two')
    const btnThree = document.querySelector('#btn-three')

  
    
    btnOne.addEventListener('click', () => {
        ProjectsSortBtn.forEach(el => el.classList.remove('projects__sort-btn--active'))
        btnOne.classList.add('projects__sort-btn--active')
        projectsCard.forEach(el => el.style.display="block")
        projectsContainer.classList.add('projects__container')
        projectsContainer.classList.remove('projects__container--test')
    })

    btnTwo.addEventListener('click', () => {
        ProjectsSortBtn.forEach(el => el.classList.remove('projects__sort-btn--active'))
        btnTwo.classList.add('projects__sort-btn--active')
        projectsCard.forEach(el => el.style.display="none")
        projectsCardEng.forEach(el => el.style.display="block")
        projectsContainer.classList.remove('projects__container')
        projectsContainer.classList.add('projects__container--test')
        
    })  

    btnThree.addEventListener('click', () => {
        ProjectsSortBtn.forEach(el => el.classList.remove('projects__sort-btn--active'))
        btnThree.classList.add('projects__sort-btn--active')
        projectsCard.forEach(el => el.style.display="none")
        projectsCardSci.forEach(el => el.style.display="block")
        projectsContainer.classList.remove('projects__container')
        projectsContainer.classList.add('projects__container--test')
    })


});