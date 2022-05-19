import React from 'react'

const Sample = () => {
    const MovieSample = [
        {
            title: 'The Shawshank Redemption',
            year: '1994',
            imdbID: 'q  ',
            type: 'movie',
            released: "14 Oct 1994",
            genre: "Drama",
            director: "Frank Darabont",
            writer: "Stephen King, Frank Darabont",
            actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
            plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            ratings: {
                imdbRating: '9.3',
                imdbVotes: '1,907,874',

            }
        },
        {
            title: 'The Godfather',
            year: '1972',
            imdbID: 'tt0068646',
            type: 'movie',
            released: "24 Mar 1972",
            genre: "Crime, Drama",
            director: "Francis Ford Coppola",
            writer: "Mario Puzo, Francis Ford Coppola",
            actors: "Marlon Brando, Al Pacino, James Caan",
            plot: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
            poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            ratings: {
                imdbRating: '9.2',
                imdbVotes: '1,907,874',
            }
        },
        {
            title: 'The Godfather: Part II',
            year: '1974',
            imdbID: 'tt0071562',
            type: 'movie',
            released: "18 Dec 1974",
            genre: "Crime, Drama",
            director: "Francis Ford Coppola",
            writer: "Francis Ford Coppola, Mario Puzo",
            actors: "Al Pacino, Robert De Niro, Robert Duvall",
            plot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
            poster: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            ratings: {
                imdbRating: '9.0',
            }
        },
        {
            title: 'The Dark Knight',
            year: '2008',
            imdbID: 'tt0468569',
            type: 'movie',
            genre: "Action, Crime, Drama",
            director: "Christopher Nolan",
            Writer: "Jonathan Nolan, Christopher Nolan, David S. Goyer",
            actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
            plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
            ratings: {
                imdbRating: "9.1",
            }
        },
        {
            title: "12 Angry Men",
            year: "1957",
            imdbID: 'tt0050083',
            type: 'movie',
            released: "10 Apr 1957",
            genre: "Crime, Drama",
            director: "Sidney Lumet",
            Writer: "Reginald Rose",
            actors: "Henry Fonda, Lee J. Cobb, Martin Balsam",
            plot: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
            poster: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        },
        {
            title: 'The Dark Knight Rises',
            year: '2012',
            imdbID: 'tt1345836',
            type: 'movie',
            released: '20 Jun 2012',
            genre: 'Action, Crime, Drama',
            director: 'Christopher Nolan',
            writer: 'Jonathan Nolan, Christopher Nolan',
            actors: 'Christian Bale, Tom Hardy, Anne Hathaway, Michael Caine',
            plot: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",

            ratings: {
                imdbRating: '8.4',
            }
        },
        {
            title: "Guardians of the Galaxy Vol. 2",
            year: "2017",
            type: "movie",
            poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
            ratings: {
                imdbRating: "7.6",
            }
        },
        {
            title: "Event Horizon",
            year: "1997",
            type: "movie",
            released: "15 Aug 1997",
            genre: "Horror, Sci-Fi, Thriller",
            language: "English, Latin",
            country: "United Kingdom, United States",
            director: "Paul W.S. Anderson",
            writer: "Philip Eisner",
            actors: "Laurence Fishburne, Sam Neill, Kathleen Quinlan",
            plot: "A rescue crew investigates a spaceship that disappeared into a black hole and has now returned...with someone or something new on-board.",
            poster: "https://m.media-amazon.com/images/M/MV5BZGI0NDMwNjAtNGEzNC00MzA1LTlkMjQtYjBkYTZlZjAyZWEyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            ratings: {
                imdbRating: "6.7",
            }
        }
    ]
    return (
        <>
            <div className="container">
                <div className="row">
                    {MovieSample.map(
                        (e, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4 box-shadow" >
                                    <img src={e.poster} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4 className="card-title">{e.year}</h4>
                                            <p className="card-text">{e.title}</p>
                                        </div>
                                        <div className="btn-group">
                                            <a href='#'>View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default Sample