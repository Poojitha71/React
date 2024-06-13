import React, { useState } from 'react'
import './List.css'
export default function List() {
    const [employee, setEmployee] = useState([
    {
        name: "Poornima",
        age: 25,
        id: 12,
        gender: "Female",
    },
    {
        name: "Poojitha",
        age: 22,
        id: 13,
        gender: "Female",
    },
    {
        name: "Akhila",
        age: 23,
        id: 14,
        gender: "Female",
    },
    {
        name: "Susmitha",
        age: 23,
        id: 15,
        gender: "Female",
    }
    ])
    return (
        <div className='employee-container'>
            {
                employee.map((emp) => (
                    <div className='employee' key={emp.id}>
                        <p>Name : {emp.name}</p>
                        <p>Age : {emp.age}</p>
                        <p>Gender :{emp.gender}</p>
                        <p>Id : {emp.id}</p>
                    </div>
                ))

            }
        </div>
    )
}
