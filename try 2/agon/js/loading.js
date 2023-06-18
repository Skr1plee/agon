$('document').ready(function(){
    loadProduct() 
})
function loadProduct() {
    $.getJSON('product.json', function (data) {
        let out = '' 
        let key 
        for (key in data) { 
            out += '<div class= "card '+data[key]['category']+ '">' 
            out += '<div class="card-img"><img class="img-1" src="' + data[key].image + '">'
            out += '</div>'
            out += '<div class="card-cat">'+data[key]['category']+'</div>'
            out += '<div class="card-name">'+data[key]['name']+'</div>'
            out += '<img src="images/group.png" width="74px">'
            out += '<div class="card-block">'
            out += '<div class="price">'+data[key]['price']+'</div>'            
            out += '<button class="card-button">Подробнее</button>'
            out += '</div>'
            out += '</div>'            
        }
        $('.catalog').html(out); 
    })
    
    setTimeout(app, 1000);
}