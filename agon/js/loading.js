$('document').ready(function(){
    loadProduct() //выполнить функцию loadProduct после полной загрузки документа    
})
// функция считывания данных с файла формата JSON, формирование кода html с выгруженными данными и вставка кода в html -страницу
function loadProduct() {
    //загрузка товаров на страницу
    $.getJSON('product.json', function (data) {
        let out = '' //пустая строка, в нее будет записываться вставляемый код html
        let key //объявление переменной для цикла, ей будет присваиватся порядковый номер товара из файла JSON
        for (key in data) { //key при первом прохождени присвоить себе значение 1 затем 2 и т.д.
            //добавляем блок с классом card и название категории загружаем из файла JSON
            out += '<div class= "card '+data[key]['category']+ '">' 
            //добавляем блок с классом card-img, имя файла изображения загружаем из файла JSON
            out += '<div class="card-img"><img class="img-1" src="' + data[key].image + '">'
            out += '</div>'
            //добавляем блок с классом card-cat, название категории загружаем из файла JSON
            out += '<div class="card-cat">'+data[key]['category']+'</div>'
            //добавляем блок с классом card-name, название товара загружаем из файла JSON
            out += '<div class="card-name">'+data[key]['name']+'</div>'
            //добавляем изображение рейтинга 
            out += '<img src="images/group.png" width="74px">'
            //добавляем блок с классом card-block
            out += '<div class="card-block">'
            //добавляем блок с классом price, цену товара загружаем из файла JSON
            out += '<div class="price">'+parseFloat(data[key]['price']).toFixed(2)+'</div>'
            //добавляем кнопку с классом card-button, цену товара загружаем из файла JSON
            out += '<button class="card-button">Подробнее</button>'
            out += '</div>'
            out += '</div>'            
        }
        $('.catalog').html(out); //вставляем весь  код сформированный в строке out в блок с классом catalog
    })
    
    setTimeout(app, 1000);
}
