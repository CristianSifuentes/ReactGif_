// import { mockGifs, type Gif } from '../../mock-data/gifs-mock'

import type { FC } from "react";
import type { Gif } from "../interfaces/gif.interface";

//https://api.giphy.com/v1/gifs/search?api_key=IdvFByhuq0EcabV8oUh8kjLd9Eguiuz4&q=saitama&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips


interface Props {
  gifs: Gif[];
}
//type FC<P = {}> = FunctionComponent<P>;
// export const GifList = ({  gifs }: Props) => {
export const GifList: FC<Props> = ({  gifs }) => {

  return (
 <div className="gifs-container">
            {
                gifs.map((gif) => (

                    <div key={ gif.id }  className="gif-card">
                        <img src={ gif.url } alt={ gif.title }></img>
                        <h3>{ gif.title }</h3>
                        <p>
                            {  gif.width } x { gif.height } (1.5md)
                        </p>
                    </div>                   
                ))
            }

        </div>
  )
}
