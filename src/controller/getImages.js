import Unsplash from 'unsplash-js';
import { accessKey, endPoint } from './access';

const unsplash = new Unsplash({ accessKey });
export default unsplash;

/* const getImages = () => fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => {
  console.log(res.url);
  return res.json();
}).catch((err) => console.log(err)); */

/* async function getImages(query) {
  const response = await fetch(`${endPoint}?query=${query}&client_id=${accessKey}`);
  const jsonResponse = await response.json();
  const imagesList = await jsonResponse.results;

  return imagesList;
} */

// export default getImages;
