import React from "react";
import { movies } from "../data";

function Movies() {
  return(
    <div>
      <h1>Movies Page</h1>
      <ul>
        {
          movies.map( movie => {
            return(
              <div key={ movie.title }>
                <h3>{ movie.title }</h3>
                <p>{ movie.time } minutes</p>
                <ul>
                  {
                    movie.genres.map( genre => <li key={ genre }>{ genre }</li>)
                  }
                </ul>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Movies;
