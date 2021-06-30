export default async function getMovies(movie, format) {
  console.log("dentro mock");
  return {
    Response: "True",
    totalResults: "1",
    Search: [
      {
        "Title": "Eternal Sunshine of the Spotless Mind",
        "Year": "2004",
        "Rated": "R",
        "Released": "19 Mar 2004",
        "Runtime": "108 min",
        "Genre": "Drama, Romance, Sci-Fi",
        "Director": "Michel Gondry",
        "Writer": "Charlie Kaufman, Michel Gondry, Pierre Bismuth",
        "Actors": "Jim Carrey, Kate Winslet, Tom Wilkinson",
        "Plot": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 73 wins & 111 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "8.3/10"
          },
          {
            "Source": "Rotten Tomatoes",
            "Value": "92%"
          },
          {
            "Source": "Metacritic",
            "Value": "89/100"
          }
        ],
        "Metascore": "89",
        "imdbRating": "8.3",
        "imdbVotes": "929,010",
        "imdbID": "tt0338013",
        "Type": "movie",
        "DVD": "12 Feb 2014",
        "BoxOffice": "$34,400,301",
        "Production": "Anonymous Content, Focus Features, Blue Ruin, This Is That Productions",
        "Website": "N/A",
        "Response": "True"
      }

    ]
  }
}