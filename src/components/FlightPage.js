import { useParams, Link } from "react-router-dom";

const FlightPage = ({ flights, returnDate }) => {
    const { id } = useParams();
    const flight = flights.find(flight => (flight.id).toString() === id);
    if (returnDate) {
        var plusRoundTrip = flight.price + flight.returnDate.price
    }
    return (
        <main className="PostPage">
            <article className="post">
                {flight &&
                    <>
                        {!returnDate ? (
                            <>
                                <h2 style={{ display: "flex", justifyContent: "center" }}>🛫 {flight.id} </h2><br />
                                <h2>🛫 {flight.departureCity} {"to"} 📍{flight.arrivalCity} /  {flight.price}💲</h2>
                                <p className="postBody">Departure Airport  🛫: {flight.departureAirport.name} 🕒 {flight.departureDate} </p>
                                <p className="postBody">Arrival Airport 📍: {flight.arrivalAirport.name} 🕒 {flight.arrivalDate}</p>
                            </>) : (
                            <>
                                <h2 style={{ display: "flex", justifyContent: "center" }}>🛫 {flight.id} </h2><br />

                                <h2>🛫 {flight.departureCity} {"to"} 📍{flight.arrivalCity} /  {flight.price}💲</h2>
                                <p className="postBody">Departure Airport  🛫: {flight.departureAirport.name} 🕒 {flight.departureDate} </p>
                                <p className="postBody">Arrival Airport 📍: {flight.arrivalAirport.name} 🕒 {flight.arrivalDate}</p><br />

                                <h2 style={{ display: "flex", justifyContent: "center" }}>🛫 {flight.returnDate.returnDateId} </h2><br />
                                <h2>🛫 {flight.arrivalCity} {"to"} 📍{flight.departureCity} /  {flight.returnDate.price}💲</h2>
                                <p className="postBody">Departure Airport  🛫: {flight.arrivalAirport.name} 🕒 {flight.returnDate.returnDepartureDate} </p>
                                <p className="postBody">Arrival Airport 📍: {flight.departureAirport.name} 🕒 {flight.returnDate.returnArrivalDate}</p>
                                <br />
                                <p className="postBody">Total: {plusRoundTrip}💲 </p>
                            </>)}

                    </>
                }
                {!flight &&
                    <>
                        <h2>Flight data not found.</h2>
                        <p>
                            <Link to='/'>Search Flights</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default FlightPage
