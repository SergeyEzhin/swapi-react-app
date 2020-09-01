import React from 'react';
import './TableResult.scss';

export const TableResult = ({ships, parameters}) => 
{
    return (
        <div className="table-result">
            {
                parameters.map((elem, index) => {
                    return (
                        <div className="row table-result-row" key={index}>
                            <div className="col-12 table-result-parameters">
                                <p>{elem}</p>
                            </div>
                            {
                                Object.keys(ships).map((position, index) => 
                                {
                                    if(Object.keys(ships[position]).length === 0) return null

                                    return (
                                        <div className="col-md-6 table-result-values" key={index}>
                                            <p>{ships[position][elem]}</p>
                                        </div> 
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}