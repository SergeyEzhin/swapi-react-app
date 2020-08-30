import React from 'react';
import './FormSearch.scss';

export const FormSearch = ({data}) => 
{
    return (
        <form className="form-inline form-search">
            <div className="form-search__field">
                <select className="form-control">
                    <option value="No value">No value</option>
                    {/* {console.log(arrayOptions)} */}
                </select>
            </div>
        </form>
    )
}