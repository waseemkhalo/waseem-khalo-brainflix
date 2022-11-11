import './Header.scss'
import pfp from '../../assets/images/Mohan-muruge.jpg'
import logo from '../../assets/logo/BrainFlix-logo.svg'
import searchIcon from '../../assets/icons/search.svg'
import { Link, Links } from 'react-router-dom';


function Header() {


    return (
        <header className="header">

            <div className="header__container">
                <Link to={'/'}> <img className="logo" src={logo} alt="brainflix logo" ></img>
                </Link>

                <div className="form__container" >
                    <form className="form">

                        <div className='form__search-container'>
                            <input src={searchIcon} className="form__search" placeholder='Search'></input>
                            <img
                                className="form__profile-picture"
                                src={pfp}
                                alt="profile">
                            </img>
                        </div>

                        <Link to={'/upload'} > <button className="form__upload-button">
                            Upload
                        </button>
                        </Link>

                        <img
                            className="form__profile-pictures"
                            src={pfp}
                            alt="profile">
                        </img>

                    </form>
                </div>

            </div>

        </header>
    );
}

export default Header;