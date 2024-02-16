import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-   '>
                <li className='nav-item'>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className="nav-link" to="/GroupedTeamMembers">Teams</Link>
                </li>
                <li></li>
            </ul>
        </nav>
    )
}
export default Nav;