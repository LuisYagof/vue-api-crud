jest.mock('../../src/hooks/GetFavsHook.js');
import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Vue from 'vue'
import Vuex from 'vuex'

import Favourites from '../../src/views/Favourites.vue'
import store from '../../src/store'
Vue.use(Vuex)


// ----------------FORMA 1: REQUIERE CAMBIAR LA STORE
describe('Favourites component', () => {
  render(Favourites, { store })

  it('has content', async () => {
    expect(screen.getByText(/Favorite movies & TV shows/i)).toBeInTheDocument()
  })

  it('displays the response on screen', async () => {
    waitFor(() =>
      expect(screen.getByText(/Blade Runner/i)).toBeInTheDocument()
    )
  })

  it('only mocked data', async () => {
    waitFor(() =>
      expect(screen.getByText(/The Wire/i)).toBeInTheDocument()
    )
  })

})


// // ----------------FORMA 2: CUSTOM STORE
// function renderVuexTestComponent(customStore) {
//   return render(Favourites, { store: { ...store, ...customStore } })
// }

// describe('Favourites component', () => {
//   renderVuexTestComponent(
//     {
//       state: {
//         favs: []
//       },
//       mutations: {
//         loadFavs(state, payload) {
//           state.favs = payload
//         }
//       },
//       actions: {
//         favsLoadAction({ commit }) {
//           const parsedFavs = [
//             {
//               "Title": "Blade Runner",
//               "Year": "1982",
//               "Rated": "R",
//               "Released": "25 Jun 1982",
//               "Runtime": "117 min",
//               "Genre": "Action, Sci-Fi, Thriller",
//               "Director": "Ridley Scott",
//               "Writer": "Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)",
//               "Actors": "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
//               "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
//               "Language": "English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
//               "Country": "USA",
//               "Awards": "Nominated for 2 Oscars. Another 12 wins & 17 nominations.",
//               "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//               "Ratings": [
//                 {
//                   "Source": "Internet Movie Database",
//                   "Value": "8.1/10"
//                 },
//                 {
//                   "Source": "Rotten Tomatoes",
//                   "Value": "90%"
//                 },
//                 {
//                   "Source": "Metacritic",
//                   "Value": "84/100"
//                 }
//               ],
//               "Metascore": "84",
//               "imdbRating": "8.1",
//               "imdbVotes": "707,852",
//               "imdbID": "tt0083658",
//               "Type": "movie",
//               "DVD": "15 Nov 2016",
//               "BoxOffice": "$32,868,943",
//               "Production": "Blade Runner Partnership, Ladd Company",
//               "Website": "N/A",
//               "Response": "True",
//               "id": "tt0083658"
//             }
//           ]
//           commit('loadFavs', parsedFavs);
//         }
//       }
//     }
//   )

//   it('has content', async () => {
//     expect(screen.getByText(/Favorite movies & TV shows/i)).toBeInTheDocument()
//   })

// })


// // FORMA 3: INSTANCIANDO UNA STORE DIRECTAMENTE EN EL TEST
// describe('Favourites component', () => {
//   render(Favourites, {
//     store: new Vuex.Store({
//       state: {
//         favs: []
//       },
//       mutations: {
//         loadFavs(state, payload) {
//           state.favs = payload
//         }
//       },
//       actions: {
//         favsLoadAction({ commit }) {
//           const parsedFavs = [
//             {
//               "Title": "Blade Runner",
//               "Year": "1982",
//               "Rated": "R",
//               "Released": "25 Jun 1982",
//               "Runtime": "117 min",
//               "Genre": "Action, Sci-Fi, Thriller",
//               "Director": "Ridley Scott",
//               "Writer": "Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)",
//               "Actors": "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
//               "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
//               "Language": "English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
//               "Country": "USA",
//               "Awards": "Nominated for 2 Oscars. Another 12 wins & 17 nominations.",
//               "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//               "Ratings": [
//                 {
//                   "Source": "Internet Movie Database",
//                   "Value": "8.1/10"
//                 },
//                 {
//                   "Source": "Rotten Tomatoes",
//                   "Value": "90%"
//                 },
//                 {
//                   "Source": "Metacritic",
//                   "Value": "84/100"
//                 }
//               ],
//               "Metascore": "84",
//               "imdbRating": "8.1",
//               "imdbVotes": "707,852",
//               "imdbID": "tt0083658",
//               "Type": "movie",
//               "DVD": "15 Nov 2016",
//               "BoxOffice": "$32,868,943",
//               "Production": "Blade Runner Partnership, Ladd Company",
//               "Website": "N/A",
//               "Response": "True",
//               "id": "tt0083658"
//             }
//           ]
//           commit('loadFavs', parsedFavs);
//         }
//       }
//     })
//   })

//   it('has content', async () => {
//     expect(screen.getByText(/Favorite movies & TV shows/i)).toBeInTheDocument()
//   })

//   it('displays the response on screen', async () => {
//     waitFor(() =>
//       expect(screen.getByText(/Blade Runner/i)).toBeInTheDocument()
//     )
//   })
// })