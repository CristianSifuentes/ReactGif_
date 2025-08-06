import axios from 'axios';

export const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    lang: 'es',
    api_key: import.meta.env.VITE_GIPHY_API_KEY2 || 'IdvFByhuq0EcabV8oUh8kjLd9Eguiuz4' // Default key for development
  }
});
