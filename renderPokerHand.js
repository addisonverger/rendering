
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to these playing card images:
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    return `<div style="display: flex; flex-direction: row; justify-content: space-around">` +
            pokerHand.map(renderCard).join('');
}

function renderCard(cardData) {
  return `
    <img src="cards/${cardData.value}${cardData.suit}.png" style="width: 100px; height: 100%"/>
  `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}
