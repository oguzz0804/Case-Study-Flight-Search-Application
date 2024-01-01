import { Link } from "react-router-dom";
const Footer = () => {
    const today = new Date();
    return (
        <footer className='Footer'>
            <div className='Footerdiv'>
                <Link className="Footer-Home" to="/">Home</Link>
                <Link className="Footer-About" to="/about">About</Link>
                <p className="copy">Copyright &copy; {today.getFullYear()} 🛫</p>
            </div>
        </footer>
    )
}

export default Footer
