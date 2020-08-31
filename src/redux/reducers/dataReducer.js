import {FETCH_DATA, CHOOSE_SHIP} from '../types';

const initialState = {
    data: '',
    selectedShips: [],
    keysSelects: ['0', '1']
};

export const dataReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case FETCH_DATA:
            return {...state, data: action.payload}
        case CHOOSE_SHIP:
            return {...state, selectedShips: [
                ...state.selectedShips,
                action.payload
            ]}
        default:
            return state
    }
}