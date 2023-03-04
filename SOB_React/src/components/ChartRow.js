import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.model}</td>
                    {/* <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td> */}
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                </tr>
            )
    }
    
        

export default ChartRow;