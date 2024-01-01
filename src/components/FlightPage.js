import { useParams, Link } from "react-router-dom";

const FlightPage = ({ flights }) => {
    const { id } = useParams();
    const flight = flights.find(flight => (flight.id).toString() === id);
    return (
        <main className="PostPage">
            <article className="post">
                {flight &&
                    <>
                        <h2 style={{ display: "flex", justifyContent: "center" }}>🛫 {flight.id} </h2><br />
                        <h2>🛫 {flight.departureCity} {"to"} 📍{flight.arrivalCity} /  {flight.price}💲</h2>
                        <p className="postBody">Departure Airport  🛫: {flight.departureAirport.name} 🕒 {flight.departureDate} </p>
                        <p className="postBody">Arrival Airport 📍: {flight.arrivalAirport.name} 🕒 {flight.arrivalDate}</p>
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
