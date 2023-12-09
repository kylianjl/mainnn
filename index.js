document.addEventListener('DOMContentLoaded', function () {

    const allFilms = [
        "Earwig and the Witch : Gorō Miyazaki",
        "The Red Turtle : Michaël Dudok de Wit",
        "When Marnie Was There : Hiromasa Yonebayashi",
        "The Tale of the Princess Kaguya : Isao Takahata",
        "The Wind Rises : Hayao Miyazaki",
        "From Up on Poppy Hill : Gorō Miyazaki",
        "Arrietty : Hiromasa Yonebayashi",
        "Ponyo : Hayao Miyazaki",
        "Tales from Earthsea : Gorō Miyazaki",
        "Howl's Moving Castle : Hayao Miyazaki",
        "The Cat Returns : Hiroyuki Morita",
        "Spirited Away : Hayao Miyazaki",
        "My Neighbors the Yamadas : Isao Takahata",
        "Princess Mononoke : Hayao Miyazaki",
        "Whisper of the Heart : Yoshifumi Kondō",
        "Pom Poko : Isao Takahata",
        "Porco Rosso : Hayao Miyazaki",
        "Only Yesterday : Isao Takahata",
        "Kiki's Delivery Service : Hayao Miyazaki",
        "My Neighbor Totoro : Hayao Miyazaki",
        "Grave of the Fireflies : Isao Takahata",
        "Castle in the Sky : Hayao Miyazaki",
    ];

    const filmsByList = document.getElementById('filmsBy');
    const directorsList = document.getElementById('directors');
    const directorsFilmsList = document.getElementById('directorsfilmsList');

    allFilms.forEach(film => {
        const listItem = document.createElement('li');
        listItem.textContent = film;

        if (film.includes("Hayao Miyazaki")) {
            listItem.style.color = 'red';
        }

        filmsByList.appendChild(listItem);
    });

    const directors = getDirectors(allFilms);
    directors.forEach(director => {
        const listItem = document.createElement('li');
        listItem.textContent = director;
        directorsList.appendChild(listItem);
    });

    directors.forEach(director => {
        const directorItem = document.createElement('li');
        directorItem.textContent = director;
        directorsFilmsList.appendChild(directorItem);

        const directorFilms = allFilms.filter(film => film.includes(director));
        directorFilms.forEach(film => {
            const filmItem = document.createElement('li');
            filmItem.textContent = film;
            directorsFilmsList.appendChild(filmItem);
        });
    });
});

function getDirectors(films) {
    const directorsSet = new Set();
    films.forEach(film => {
        const director = film.split(" : ")[1];
        directorsSet.add(director);
    });
    return Array.from(directorsSet);
}
