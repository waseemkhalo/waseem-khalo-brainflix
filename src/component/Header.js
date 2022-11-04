import '../styles/Header.scss'
import pfp from '../assets/images/Mohan-muruge.jpg'
import logo from '../assets/Logo/BrainFlix-logo.svg'

function Header() {


    return (
        <header className="header">

            <div className="header__container">
                <img className="logo__image" src={logo} alt="brainflix logo" ></img>

                <div className="form__container" >
                    <form className="form">
                        <input className="form__search">
                        </input>
                        <button className="form__upload-button">
                            <img className="form__upload-icon" alt="Upload">
                            </img>
                        </button>
                    </form>
                    <img className="form__profile-picture" src={pfp} alt="profile">
                    </img>
                </div>
            </div>

        </header>
    );
}

export default Header;