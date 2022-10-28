import { Link } from 'react-router-dom'


const Navigation = () => {

    return (
        <>
            <Link className='Menu_Link' to="/">Home Page</Link>
            <Link className='Menu_Link' to="/edit">Edit an Exercise</Link>
            <Link className='Menu_Link' to="/create">Add an Exercise</Link>
        </>
    )
}

export default Navigation