let name = document.getElementById("movie");
let button = document.getElementById("btn");
let result = document.getElementById("result");
button.addEventListener('click', () => {
    let input = movie.value;

    let apikey = '8bd09bdf'
    let url = `http://www.omdbapi.com/?apikey=${apikey}&t=${input}`;
    fetch(url).then((response) =>
        response.json())
        .then(data => {
            result.innerHTML =
                `<img src="http://img.omdbapi.com/?apikey=${apikey}&i=${data.imdbID}" alt="${data.Title}"/>
        <div>Moviename:${data.Title}</div>
        <div>Released: ${data.Year}</div>
        <div>ImDB Rating:${data.imdbRating}</div>
        <div>Cast:${data.Actors}</div>
        <div>Director:${data.Director}</div>`;

        });
});