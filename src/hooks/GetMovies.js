export default async function getMovies(movie, format) {
  console.log("dentro hook");
  try {
    const call = await fetch(
      `http://www.omdbapi.com/?s=${movie}&type=${format}&page=1&apikey=d9e992da`
    );
    const parsed = await call.json();
    return parsed;
  } catch (err) {
    return err;
  }
}

// WITH PROMISE ---->

// export default function getFavs() {;
//   return new Promise((resolve, reject) => {
//     fetch(`http://localhost:3000/favs`)
//       .then(res => resolve(res.json()))
//       .catch(err => reject(err))
//   })
// }