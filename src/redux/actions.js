import {FETCH_DATA} from './types'

export const fetchData = () => 
{
    return dispatch => 
    {
        return fetch('https://swapi.dev/api/films/2/')
        .then(response => 
        {
          return response.json();
        })
        .then(data =>
        {
            // console.log(data);
            const starshipsPaths = data.starships;
            let starships = [];
            starshipsPaths.forEach(async starship => {
                return await fetch(starship)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    starships.push(data);
                });
            });

            dispatch({type: FETCH_DATA, payload: starships});
        });
    }
}