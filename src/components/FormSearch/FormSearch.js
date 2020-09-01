import React from 'react';
import {useDispatch} from 'react-redux';
import './FormSearch.scss';
import {chooseShip} from '../../redux/actions';

export const FormSearch = ({data, elem}) => 
{
    const dispatch = useDispatch();

    const changeHandler = (e) =>
    {
        const currentElem = e.target;
        let newValue = currentElem.value;
        let ship;
        let selectPosition = currentElem.dataset.position;
        // console.log(selectPosition);

        if(newValue === 'No value')
        {
            ship = {[selectPosition]: ''}
        }
        else 
        {
            ship = {[selectPosition]: data[Number(newValue)]};
        }

        // console.log(ship);
        dispatch(chooseShip(ship));
    }

    return ( 
        <form className="form-search">
            <select data-position={elem} className="form-control form-search__select" onChange={changeHandler}>
                <option value="No value">No value</option>
                {
                    data.map((elem, index) => 
                    {
                        return (
                            <option key={index} value={String(index)}>{elem.name}</option>
                        )
                    })
                }
            </select>
        </form>
    )
}