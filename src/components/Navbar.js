import { NavLink } from 'react-router-dom'
import classes from "../style.module.css"

const Navbar = () => {

    return (
        <div className={classes.header}>
            <h1>My Dairy</h1>
            <nav>
                <ul>
                    <li><NavLink className={classes.navlink} activeClassName={classes.navlink_active} to="/all-diary">All Dairy</NavLink></li>
                    <li><NavLink className={classes.navlink} activeClassName={classes.navlink_active} to="/add-diary">Add Dairy</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar