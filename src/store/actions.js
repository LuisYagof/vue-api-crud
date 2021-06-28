// import LOAD_FAVS from './mutation-types'
import * as types from './mutation-types'
import getFavs from "../hooks/GetFavsHook";

export default {
  async favsLoadAction({ commit }) {
    const parsedFavs = await getFavs()
    commit(types.LOAD_FAVS, parsedFavs);
  },


  // favsLoadAction({ commit }) {
  //   async function fetchFavs() {
      // // const favsCall = await fetch(`http://localhost:3000/favs`);
      // // const parsedFavs = await favsCall.json();
  //     const parsedFavs = [
  //                   {
  //                     "Title": "Blade Runner",
  //                     "Year": "1982",
  //                     "Rated": "R",
  //                     "Released": "25 Jun 1982",
  //                     "Runtime": "117 min",
  //                     "Genre": "Action, Sci-Fi, Thriller",
  //                     "Director": "Ridley Scott",
  //                     "Writer": "Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)",
  //                     "Actors": "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
  //                     "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
  //                     "Language": "English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
  //                     "Country": "USA",
  //                     "Awards": "Nominated for 2 Oscars. Another 12 wins & 17 nominations.",
  //                     "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  //                     "Ratings": [
  //                       {
  //                         "Source": "Internet Movie Database",
  //                         "Value": "8.1/10"
  //                       },
  //                       {
  //                         "Source": "Rotten Tomatoes",
  //                         "Value": "90%"
  //                       },
  //                       {
  //                         "Source": "Metacritic",
  //                         "Value": "84/100"
  //                       }
  //                     ],
  //                     "Metascore": "84",
  //                     "imdbRating": "8.1",
  //                     "imdbVotes": "707,852",
  //                     "imdbID": "tt0083658",
  //                     "Type": "movie",
  //                     "DVD": "15 Nov 2016",
  //                     "BoxOffice": "$32,868,943",
  //                     "Production": "Blade Runner Partnership, Ladd Company",
  //                     "Website": "N/A",
  //                     "Response": "True",
  //                     "id": "tt0083658"
  //                   }
  //                 ]
  //     commit(types.LOAD_FAVS, parsedFavs);
  //   };
  //   fetchFavs()
  // },

  favDeleteAction({ commit, dispatch }, id) {
    async function deleteFav(id) {
      const fetchOpt = {
        method: "DELETE",
      };
      try {
        const favsCall = await fetch(`http://localhost:3000/favs/${id}`, fetchOpt);
        dispatch('favsLoadAction')
      } catch (err) {
        console.log(err);
      }
    }
    deleteFav(id)
  }
}