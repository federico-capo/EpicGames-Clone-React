import '../App.css';
import logo from '../assets/img/epic-games.svg';
import lingua from '../assets/img/globe.svg';
import utente from '../assets/img/user.svg';

export default function Navbar() {
    return (
        <section className='nav-head'>
            <img src={logo} alt='epic-games' width={45}/>  
            <div className='nav-links'>
                <ul className='links-nav'>
                    <li><h1 className="store-h1"href='/'>STORE</h1></li>
                    <li><a href='/'><span className='label'>Distribution</span></a></li>
                    <li><a href='/'><span className='label'>Support</span></a></li>
                    <li><a href='/'><span className='label'>Unreal Engine</span></a></li>
                </ul>
            </div>
            <div className='user-tool'>
                <ul className='user-nav'>
                    <li><img src={lingua} alt='lingua' width={20}/></li>
                    <li><img src={utente} alt='utente' width={20}/></li>
                </ul>
            </div>
        </section>
    )
}

