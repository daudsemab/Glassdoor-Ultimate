import React from 'react'

import './Cardlist.css'
import Card from '../Card/Card'

export default function Cardlist({filteredGender, data}) {
    if (filteredGender) {
        filteredGender.filter( user => {
        let refined = data.filter( user2 => {
            return user.gender === user2.gender;
        })
        if (refined) {
            data = refined;
            return data;
        }
        })
    }
    return (
        <div className='Cardlist'>
        {
            data.map((user, i) => {
            return (
                    <Card 
                    key={i} 
                    name={user.name}
                    location={user.location}
                    picture={user.picture.large}
                    email={user.email}
                    phone={user.phone}
                    age={user.randomAge}
                    experience={user.randomXp}
                    />
            )})
        }
        </div>
    )
}
