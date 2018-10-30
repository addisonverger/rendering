
function renderRestaurants(restaurants) {
  return `<div style="display: flex; flex-direction: row; justify-content: space-around">` +
          restaurants.map(restaurantCard).join('');
}

function restaurantCard(cardData) {
  return `
    <div style="background-color: #d6d8db; border-radius: 5px; width: 200px">
    <h2 style="margin: 0 10px">${cardData.name}</h2>
    <p style="color: #4b4d4f; margin: 0 10px">${cardData.type}</p>
    <p style="color: #49d83e; font-weight: bold; font-size: 150%; margin: 0 10px">${price(cardData.priceRating)}</p>
    </div>
  `
}

function price(priceRating) {
  var moneyArr = [];
  for (i = 0; i < priceRating; i++) {
    moneyArr.push('$');
  }
  return moneyArr.join('');
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}
