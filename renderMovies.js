
function renderMovies(movies) {
  return `<div style="display: flex; flex-direction: column; justify-content: space-around">` +
          movies.map(movieCard).join('') + `</div>`;
}

function movieCard(movieData) {
  return `
    <div style="display: flex; flex-direction: row; justify-content: space-around; background-color: #bbbec1; border-radius: 5px; width: 400px; height: 200px; padding: 10px">
      <img src="${movieData.poster}" style="object-fit: contain; width: 40%"/>
      <div style="background-color: #d6d8db; border-radius: 5px; padding: 10px; width: 60%">
        <h2 style="margin: 0; font-size: 100%">${movieData.title}</h2>
        <p style="margin: 0; font-weight: bold; font-size: 50%">${movieData.year}</p>
        <p style="margin: 10px 0">
        IMDB:<br />
        ${movieData.imdbRating} / 10</p>
        <p style="margin: 10px 0">
        Rotten Tomatoes:<br />
        ${movieData.rottenTomatoesRating * 100}%</p>
      </div>
    </div>
  `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}
