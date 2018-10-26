
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map()
    var circlesHTML = "";
    for (i = 0; i < circles.length; i++) {
      var singleCircle = `<div style = "
                          width: ${circles[i].radius};
                          height: ${circles[i].radius};
                          border-radius: 50%;
                          background-color: ${circles[i].color};
                          "></div>`
      circlesHTML += singleCircle;
    }
    return circlesHTML;
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: '50px',
            color: "#FF00FF"
        },
        {
            radius: '30px',
            color: "#FF99AA"
        },
        {
            radius: '60px',
            color: "#0000FF"
        },
        {
            radius: '10px',
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}
