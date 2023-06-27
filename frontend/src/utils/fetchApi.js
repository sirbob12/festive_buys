/*import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}

*/


export const STATUS = Object.freeze({
    IDLE:'IDLE',
    LOADING:'LOADING',
    SUCCEED:'SUCCEED',
    FAILED:'FAIILED'

})

export const base_url = 'http://localhost:5000/api/products';