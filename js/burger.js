const burgerFunc = () =>{
    const burger = document.querySelector('.mobile-btn')
    const nav = document.querySelector('.header__list')
    const arrayItems = document.querySelectorAll('.header__list-item')

    burger.addEventListener('click', ()=>{
        burger.classList.toggle('show-mobile-btn')
        nav.classList.toggle('show-header__list')
    })

    for(let item of arrayItems){
        item.addEventListener('click', ()=>{
            burger.classList.remove('show-mobile-btn')
            nav.classList.remove('show-header__list')
        })
    }
}
burgerFunc()