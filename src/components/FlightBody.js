import { Link } from 'react-router-dom';

const FlightBody = ({ flight }) => {
    console.log(flight)
    return (
        <article className="post">
            <Link to={`/flight/${flight.id}`}>
                <h2>🛫 {flight.departureCity} {"to"} 📍{flight.arrivalCity}</h2>
                <p className="postDate">Departure Date : {flight.departureDate} </p>
                <p className="postDate">Arrival Date : {flight.arrivalDate}</p>
            </Link>
            <p className="postBody">{
                (flight.airline).length <= 25
                    ? "Airline Name: " + flight.airline + " - " + flight.price + "💲"
                    : `${(flight.airline).slice(0, 25)}...`
            }</p>
        </article>
    )
}

export default FlightBody
