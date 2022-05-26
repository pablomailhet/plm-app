const NavBar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">RC_3DPrint</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Airplanes <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">UAV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cars</a>
                        </li>  
                        <li className="nav-item">
                            <a className="nav-link" href="#">Boats</a>
                        </li>                                               
                    </ul>
                </div>
            </nav>
        </header>
    );

};

export default NavBar;