function sortByPriceUp() {
    let cards = document.querySelectorAll('.card');
    let sortedCards = Array.from(cards).sort((a, b) => {
      let aPrice = parseFloat(a.querySelector('.price').textContent);
      let bPrice = parseFloat(b.querySelector('.price').textContent);
      return aPrice - bPrice;
    });
    document.querySelector('.catalog').innerHTML = '';
    sortedCards.forEach(card => {
      document.querySelector('.catalog').append(card);
    });
  }
  
  function sortByPriceDown() {
    let cards = document.querySelectorAll('.card');
    let sortedCards = Array.from(cards).sort((a, b) => {
      let aPrice = parseFloat(a.querySelector('.price').textContent);
      let bPrice = parseFloat(b.querySelector('.price').textContent);
      return bPrice - aPrice;
    });
    document.querySelector('.catalog').innerHTML = '';
    sortedCards.forEach(card => {
      document.querySelector('.catalog').append(card);
    });
  }
  
  function sortByQuantity() {
    let cards = document.querySelectorAll('.card');
    let sortedCards = Array.from(cards).sort((a, b) => {
      let aQuantity = parseInt(a.querySelector('.quantity').textContent);
      let bQuantity = parseInt(b.querySelector('.quantity').textContent);
      return bQuantity - aQuantity;
    });
    document.querySelector('.catalog').innerHTML = '';
    sortedCards.forEach(card => {
      document.querySelector('.catalog').append(card);
    });
  }
  
  document.querySelector('.button-filter[data-filter="Up"]').addEventListener('click', sortByPriceUp);
  document.querySelector('.button-filter[data-filter="Down"]').addEventListener('click', sortByPriceDown);
  document.querySelector('.button-filter[data-filter="Quantity"]').addEventListener('click', sortByQuantity);