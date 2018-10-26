
function renderNametag(nametag) {
    return `<div class="nametag">
              <h2>Hello, my name is:</h2>
              <p>${nametag}</p>
            </div>`;
}

function renderNametags(nametags) {
    return nametags.map(renderNametag).join('');
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}
