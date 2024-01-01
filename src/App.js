import React, { useState, useEffect } from 'react';
import api from './api/flights';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SearchFlight from './components/SearchFlight';
import FlightPage from './components/FlightPage';
import NotFound from './components/NotFound';

function App() {
  const [flights, setFlights] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);
  const [isReturnDatePickerVisible, setIsReturnDatePickerVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {

      setLoading(true);


      setTimeout(async () => {
        const response = await api.get('/flights');


        setLoading(false);
        setFlights(response.data);

        if (!departureAirport || !arrivalAirport || !departureDate) {
          alert('Please fill in all fields.');
          return;
        }

        if (isReturnDatePickerVisible === true && !returnDate) {
          alert('Please select a return date.');
          return;
        }

        if (returnDate && returnDate.getDay() < departureDate.getDay()) {
          alert('The return date cannot be earlier than the departure date.');
          return;
        }

        if (departureAirport === arrivalAirport) {
          alert('Departure and landing airports cannot be the same.');
          return;
        }

        if (departureAirport.split("").length === 3 && arrivalAirport.split("").length === 3) {
          const filteredResults = response.data.filter(
            (flight) =>
              flight.departureAirport.code.toLowerCase().includes(departureAirport.toLowerCase()) &&
              flight.arrivalAirport.code.toLowerCase().includes(arrivalAirport.toLowerCase()) &&
              parseInt(flight.departureDate.split("/")[0]) === departureDate.getDate() &&
              parseInt(flight.departureDate.split("/")[1]) === (departureDate.getMonth() + 1)
          );

          setSearchResults(filteredResults.reverse());
          console.log(departureDate.getDate())
        } else {
          const filteredResults = response.data.filter(
            (flight) =>
              flight.departureCity.toLowerCase().includes(departureAirport.toLowerCase()) &&
              flight.arrivalCity.toLowerCase().includes(arrivalAirport.toLowerCase()) &&
              parseInt(flight.departureDate.split("/")[0]) === departureDate.getDate() &&
              parseInt(flight.departureDate.split("/")[1]) === (departureDate.getMonth() + 1)

          );
          setSearchResults(filteredResults.reverse());
        }

        console.log('Search completed:', {
          departureAirport,
          arrivalAirport,
          departureDate,
          returnDate,
        });

      }, 5000); //5 seconds
    } catch (err) {

      setLoading(false);
      if (err.status === 400) {
        alert('Server error. Please try again.');
      } else {
        alert('Something went wrong. Please try again.');
      }
    }
  };

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await api.get('/flights');
        setFlights(response.data);
      } catch (err) {
        alert('Flight information could not be obtained. Please try again.');
      }
    };
    fetchFlights();
  }, []);

  /*   useEffect(() => {
      const filteredResults = flights.filter((flight) =>
        (flight.airline.toLowerCase()).includes(departureAirport.toLowerCase())
        || (flight.departureCity.toLowerCase()).includes(departureAirport.toLowerCase()));
   
      setSearchResults(filteredResults.reverse());
    }, [flights, departureAirport]); */

  return (
    <div className="App">
      <Header title="Odysseus" />
      <Nav
        flights={flights}
        search={search}
        setSearch={setSearch}
        departureAirport={departureAirport}
        setDepartureAirport={setDepartureAirport}
        arrivalAirport={arrivalAirport}
        setArrivalAirport={setArrivalAirport}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        isReturnDatePickerVisible={isReturnDatePickerVisible}
        setIsReturnDatePickerVisible={setIsReturnDatePickerVisible}
        handleSearch={handleSearch}
      />

      <Routes>
        <Route exact path="/" element={<SearchFlight arrivalAirport={arrivalAirport} departureAirport={departureAirport} flights={searchResults} loading={loading} departureDate={departureDate} />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/flight/:id" element={<FlightPage flights={flights} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
