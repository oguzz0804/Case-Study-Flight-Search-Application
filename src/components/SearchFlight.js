import FlightPost from './FlightPost';
import { useState, useEffect } from 'react'

const SearchFlight = ({ loading, flights, departureAirport, arrivalAirport, departureDate }) => {
    const [sortedFlights, setSortedFlights] = useState([...flights]);
    const [isDescending, setIsDescending] = useState(false);

    useEffect(() => {
        const newSortedFlights = [...flights].sort((a, b) => {
            if (isDescending) {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });

        setSortedFlights(newSortedFlights);
    }, [flights, isDescending, departureAirport, arrivalAirport]);

    const handleSortByPrice = () => {
        setIsDescending(!isDescending);
    };

    return (
        <main className="Home">
            <button onClick={handleSortByPrice}>
                Sort by Price {isDescending ? '(💲 ⬆⬆)' : '(💲 ⬇⬇)'}
            </button>
            {loading ? (<div className="loading-spinner">🛫</div>) :
                flights.length && departureAirport && arrivalAirport && departureDate ? (
                    <FlightPost flights={sortedFlights} />
                ) : (
                    <p style={{ marginTop: "2rem" }}>Please enter flight</p>
                )}
        </main>
    )
}

export default SearchFlight
