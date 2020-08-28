import React from 'react';
import './FormSearch.scss';

export const FormSearch = () => 
{
    return (
        <form className="form-inline form-search">
            <div className="form-search__field">
                <p>Compare with:</p>
                <select className="form-control">
                    <option value="No value">No value</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            {/* <button type="submit" className="btn btn-primary">Search</button> */}
        </form>
    )
}