export default async function getFavs() {
  try {
    const response = await fetch(`http://localhost:3000/favs`);
    const responseJSON = await response.json();
    return responseJSON;
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