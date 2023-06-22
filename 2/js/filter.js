function app(){
    //создание массива buttons кнопок меню фильтра
    const buttons = document.querySelectorAll('#button')
    //создание массива cards карточек товара
    const cards=document.querySelectorAll('.card')
    //функция осуществляющая фильтр в соотвествии с нажатой кнопкой в меню фильтр
    function filter(category, items){
        items.forEach((item) => {
            //проверяем наличие класса category
            const isItemFiltered = !item.classList.contains(category)
            //проверяем выбрана ли кнопка All
            const isShowAll = category.toLowerCase() === 'all'
            //если имеется класс с названием категории и не нажата кнопка All
            if (isItemFiltered && !isShowAll) {
                //выбранной карточке назначаем класс hide
                item.classList.add('d-none')
                item.classList.add('anime')
            } else {
                //иначе переприсваиваем классы, если 
                item.classList.remove('anime')
                item.classList.remove('d-none')
            }            
        })
    }
//просмотр всех кнопок в массиве buttons
buttons.forEach((button) => {
    //нажатой кнопке в меню фильтра добавляется событие click
    button.addEventListener('click', () => {
        //в переменную currentCategory записывается значение data-filter (название категории смотрите в html-коде)
        const currentCategory = button.dataset.filter
        //вызывается функция filter
        filter(currentCategory, cards)
    })
})
cards.forEach((card) => {
    card.ontransitionend = function() {
        if (card.classList.contains('anime')) {
            card.classList.add('hide')
        }
    }
})
}
app()
