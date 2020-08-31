import {FETCH_DATA, CHOOSE_SHIP} from './types'

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
            let starshipsPaths = data.starships;
            let arrayPromises = starshipsPaths.map(starship => {
                return fetch(starship)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    return data;
                });
            });

            Promise.all(arrayPromises).then(result => {
                console.log(result);
                dispatch({type: FETCH_DATA, payload: result});
            });
        });
    }
}

export const chooseShip = (ship) => {
    return {
        type: CHOOSE_SHIP,
        payload: ship
    }
}