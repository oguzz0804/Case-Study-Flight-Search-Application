import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className='Missing'>
            <h2>Page Not Found</h2>
            <p>
                <Link to='/'>Visit Homepage</Link>
            </p>
        </main>
    )
}

export default NotFound
