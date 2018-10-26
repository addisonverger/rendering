
function renderRectangle(rectangle) {
    return `
        <div class="text-center mt-5" style="width: ${rectangle.width}; height: ${rectangle.height}; background-color: ${rectangle.backgroundColor}">
        </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: '100px',
        height: '200px',
        backgroundColor: "#FF00FF"
        }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}
