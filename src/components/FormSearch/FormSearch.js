import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import './FormSearch.scss';
import {chooseShip} from '../../redux/actions';

export const FormSearch = ({data, elem}) => 
{
    const dispatch = useDispatch();
    let nameRef = useRef();

    const changeHandler = (e) =>
    {
        let newValue = e.target.value;
        console.log(nameRef);

        if(newValue === 'No value') return;

        const ship = data[Number(newValue)];
        console.log(ship);
        dispatch(chooseShip(ship));
    }

    return ( 
        <form className="form-search">
            <select ref={nameRef} data-position={elem} className="form-control form-search__select" onChange={changeHandler}>
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