
import type { GiphyGif, GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyApi<GiphyResponse>('/search', {
        params: {
            api_key: import.meta.env.VITE_GIPHY_API_KEY,
            q: query,
            limit: 25,
            offset: 0,
            rating: 'g',
            // lang: 'en',
            bundle: 'messaging_non_clips'
        }
    });
    // console.log(response.data);
    return response.data.data.map( (gif: GiphyGif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));
    // return response.data;
}