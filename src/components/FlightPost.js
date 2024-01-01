import FlightBody from './FlightBody';

const FlightPost = ({ flights, returnDate }) => {
    return (
        <>
            {flights.map(flight => (
                <FlightBody key={flight.id} flight={flight} returnDate={returnDate} />
            ))}
        </>
    )
}

export default FlightPost
