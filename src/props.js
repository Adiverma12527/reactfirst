import React from 'react'

export function Profile(prop){
    return(
        <div>
        <p>subject:{prop.text}</p>
        <p> to:{prop.name}</p>
        <p> i am having a {prop.birth}next friday at my home. would you like o come? it will be fun. Lots of people from my school 
        are coming. you know some of them - {prop.friend} </p>
        <p>my house is behing our school, near {prop.field}</p>
        <p>i hope you will come and see you soon</p>
        <p>from,</p>
        <p>{prop.last}</p>

        </div>
    )
}