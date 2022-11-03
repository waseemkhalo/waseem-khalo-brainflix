function Header() {


    return (
        <header className="header">
            <div className="logo">
                <img src="../assets/Logo/BrainFlix-logo.svg" alt="brainflix logo" className="logo__image"></img>
                <h1 className="logo__title">Brainflix</h1>
            </div>
            <div className="logo__title" >
                <form className="form">
                    <input className="form__search">
                    </input>
                    <button className="form__upload-button">
                        <img className="form__upload-icon" alt="Upload">
                        </img>
                    </button>
                </form>
                <img className="form__profile-picture" alt="profile">
                </img>
            </div>
        </header>
    );
}

export default Header;