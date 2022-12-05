import React from 'react';


type CarsPropsType={
    topCars: Array<CarsDataPropsType>
}

type CarsDataPropsType={
    manufacturer:string
    model:string
}

export const Cars = (props:CarsPropsType) => {
    return (
        <table >
            <tr>
                {props.topCars.map((e,index)=>{
                    return(<tr key={index}>
                    <th>{e.manufacturer}</th>
                    <th>{e.model}</th>
                        </tr>
                    )})}
            </tr>
        </table>
    );
};

