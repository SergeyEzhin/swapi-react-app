import {FETCH_DATA} from './types'

export const fetchData = () => 
{
    return dispatch => 
    {
        /* https://swapi.dev/api/films/2/*/
        return fetch('http://swapi.dev/api/starships/13/', {headers: {'Content-Type': 'application/json'}})
        .then(response => 
        {
          return response.json();
        })
        .then(data =>
        {
            console.log(data);
            // const starshipsPaths = data.starships;
            // const starships = starshipsPaths.map(async (starship) => {
            //     return await fetch(starship, {headers: {'Content-Type': 'application/json'}})
            //     .then(response => {
            //         return response.json();
            //     })
            //     .then(data => {
            //         return data;
            //     });
            // });

            dispatch({type: FETCH_DATA, payload: data});
        });
    }
}