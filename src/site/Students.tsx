import React from 'react';

type StudentsPropsType={
    students:Array<StudentDataType>
}

type StudentDataType={
    id:number
    name:string
    age:number
}

export const Students = (props:StudentsPropsType) => {
    return (
        <ul>
            {props.students.map((el,index)=><li key={el.id}>{el.name} <span>{el.age}</span></li>)}
        </ul>
    );
};
