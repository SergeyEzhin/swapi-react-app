import React from 'react';

export const TableResult = () => 
{
    return (
        <table className="table table-dark">
            {/* <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Фамилия</th>
                    <th scope="col">Username</th>
                </tr>
            </thead> */}
            <tbody>
                <tr>
                    <th scope="row">Name</th>
                    <td>Mark</td>
                    {/* <td>Otto</td>
                    <td>@mdo</td> */}
                </tr>
                <tr>
                    <th scope="row">Model</th>
                    <td>Jacob</td>
                    {/* <td>Thornton</td>
                    <td>@fat</td> */}
                </tr>
                <tr>
                    <th scope="row">Starship class</th>
                    <td>Larry</td>
                    {/* <td>the Bird</td>
                    <td>@twitter</td> */}
                </tr>
                <tr>
                    <th scope="row">Manufacturer</th>
                    <td>Larry</td>
                    {/* <td>the Bird</td>
                    <td>@twitter</td> */}
                </tr>
            </tbody>
        </table>
    )
}