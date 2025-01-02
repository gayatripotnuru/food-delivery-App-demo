import user from '../../images/Mc LOGO.png';
import { Link } from "react-router";


const HeaderComponent=() =>{
    return(
        <div className='headerpart'>
        <div className="logo">
            <img src={user} height="100px"/>
            <h1>Multicuisine Restaurant</h1>
       </div>
       <div className='nav-bar'>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About us</a></li>
            <li><a href='#'>services</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>Sign in</a></li>
            <li><a href='#'>Sign up</a></li>
        </ul>
       </div>
       </div>
       
    )
}
export default HeaderComponent;