import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Nav = ({ departureAirport, setDepartureAirport, arrivalAirport, setArrivalAirport, departureDate, setDepartureDate, returnDate, setReturnDate, isReturnDatePickerVisible, setIsReturnDatePickerVisible, handleSearch }) => {

    const clearReturnDate = () => {
        setIsReturnDatePickerVisible(true);
        setReturnDate(() => null);
    };

    const toggleReturnDatePicker = () => {
        setIsReturnDatePickerVisible(!isReturnDatePickerVisible);
        if (!isReturnDatePickerVisible) {
            clearReturnDate();
        }
    };

    const handleOneWayClick = () => {
        clearReturnDate();
    };

    const handleRoundTripClick = () => {
        clearReturnDate();
    };

    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="departure">Departure</label>
                <input
                    className="input"
                    id="departure"
                    type="text"
                    placeholder="Select Airport"
                    value={departureAirport}
                    onChange={(e) => {
                        setDepartureAirport(e.target.value);
                    }}
                />

                <label htmlFor="arrival">Arrival</label>
                <input
                    className="input"
                    id="arrival"
                    type="text"
                    placeholder="Select Destination"
                    value={arrivalAirport}
                    onChange={(e) => {
                        setArrivalAirport(e.target.value);
                    }}
                />

                <div className="date-picker">
                    <DatePicker
                        selected={departureDate}
                        onChange={(date) => setDepartureDate(date)}
                        placeholderText="Departure Date"
                        dateFormatCalendar={"MMM yyyy"}
                        minDate={new Date()} // Disable dates before this date
                        dateFormat={"dd.MM.yyyy"}
                        showMonthDropdown
                    />
                </div>
                <div>
                    {isReturnDatePickerVisible && (
                        <DatePicker
                            selected={returnDate}
                            onChange={(date) => setReturnDate(date)}
                            placeholderText="Return Date"
                            dateFormatCalendar={"MMM yyyy"}
                            minDate={departureDate}
                            dateFormat={"dd/MM/yyyy"}
                            showMonthDropdown
                        />
                    )}
                </div>
                <button className='handleButton' onClick={handleSearch}>Search</button>
            </form>

            <div className="button-container">
                <label className={`radio-label ${!isReturnDatePickerVisible ? 'active' : ''}`}>
                    <span className="radio-text">One Way</span>
                    <input
                        type="radio"
                        name="travelType"
                        value="oneWay"
                        checked={!isReturnDatePickerVisible}
                        onChange={toggleReturnDatePicker}
                        onClick={handleOneWayClick}
                    />
                </label>

                <label className={`radio-label ${isReturnDatePickerVisible ? 'active' : ''}`}>
                    <span className="radio-text">Round Trip</span>
                    <input
                        type="radio"
                        name="travelType"
                        value="roundTrip"
                        checked={isReturnDatePickerVisible}
                        onChange={toggleReturnDatePicker}
                        onClick={handleRoundTripClick}
                    />
                </label>
            </div>
        </nav>
    )
}

export default Nav