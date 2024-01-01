import { Link } from 'react-router-dom';

const FlightBody = ({ flight, returnDate }) => {
    console.log(flight)

    if (returnDate) {
        var plusRoundTrip = flight.price + flight.returnDate.price
    }

    return (
        <>
            {!returnDate ? (<article className="post">
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
            </article>) : (<article className="post">
                <Link to={`/flight/${flight.id}`}>
                    <h2>🛫 {flight.departureCity} {"to"} 📍{flight.arrivalCity}</h2>
                    <p className="postDate">Departure Date : {flight.departureDate} </p>
                    <p className="postDate">Arrival Date : {flight.arrivalDate}</p>
                </Link><br />
                <Link to={`/flight/${flight.id}`}>
                    <h2>🛫 {flight.arrivalCity} {"to"} 📍{flight.departureCity}</h2>
                    <p className="postDate">Departure Date : {flight.returnDate.returnDepartureDate} </p>
                    <p className="postDate">Arrival Date : {flight.returnDate.returnArrivalDate}</p>
                </Link>
                <p className="postBody">{
                    (flight.airline).length <= 25
                        ? "Airline Name: " + flight.airline + " - " + plusRoundTrip + "💲"
                        : `${(flight.airline).slice(0, 25)}...`
                }</p>
            </article>)}

        </>
    )
}

export default FlightBody
