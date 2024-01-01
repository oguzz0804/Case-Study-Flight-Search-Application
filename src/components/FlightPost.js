import FlightBody from './FlightBody';

const FlightPost = ({ flights }) => {
    return (
        <>
            {flights.map(flight => (
                <FlightBody key={flight.id} flight={flight} />
            ))}
        </>
    )
}

export default FlightPost
