import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-sm fixed-top mt-lg-4 pt-0">
                <div className="container-fluid px-0 mt-3 mt-sm-0">
                    <a className="ms-3 ms-md-5 me-5 me-lg-3" href="#"><img src="./images/shared/logo.svg" alt="Logo" /></a>

                    <button className="navbar-toggler me-3 me-sm-0" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <img src="./images/shared/icon-hamburger.svg" alt="toggler" />
                    </button>
                    
                    <div className="navbar_hr text-white d-none d-lg-block"><hr/></div>

                    <div className="collapse navbar-collapse justify-content-end" id="mynavbar">
                        <div className="navbar_links_container w-100 d-flex flex-column flex-sm-row justify-content-evenly py-sm-4 mt-2 mt-sm-0">
                            <NavLink className={"myFontFamily2 p-2"} to="/">00&nbsp;&nbsp;HOME</NavLink>
                            <NavLink className={"myFontFamily2 p-2"} to="/destination">01&nbsp;&nbsp;DESTINATION</NavLink>
                            <NavLink className={"myFontFamily2 p-2"} to="/crew">02&nbsp;&nbsp;CREW</NavLink>
                            <NavLink className={"myFontFamily2 p-2"} to="/technology">03&nbsp;&nbsp;TECHNOLOGY</NavLink>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar