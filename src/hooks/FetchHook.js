export default async function fetchHook(endpoint, options) {
  try {
    const response = await fetch(`${endpoint}`, options);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (err) {
    return err;
  }
}