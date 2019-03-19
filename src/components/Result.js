import React from 'react'

const Result = (props) => {
    const {date, city, sunrise, sunset, temp,pressure, wind, err} = props.weather

    return (
       <React.Fragment>
           <p>Pogoda dla: {city}</p>
           <p>Temperatura: {temp}</p>
       </React.Fragment>
    )
}


export default Result