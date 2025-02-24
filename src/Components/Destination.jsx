import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import data from "./../Data/data.json";
import { useState } from "react"

function Destination() {

    const [planetDestination , setPlanetDestination] = useState("Moon")

    const planetClicked = (planet) =>{
        setPlanetDestination(planet)
    }

    return (
        <>
            <div className="destination_section">
                <div className="destination_container">
                    
                    <div className="container">
                        <span className="text-secondary fs-3 myFontFamily fw-bold">01&nbsp;&nbsp;</span>
                        <span className="text-white fs-3 myFontFamily">PICK YOUR DESTINATION</span>

                        <div className="w-100 row mt-3">
                            
                            <div className="col-12 col-lg-6 order-1 order-lg-0 d-flex justify-content-center align-items-center">
                                <img src={data.destinations.find(dest => dest.name === planetDestination).images.png} alt="planet" className="mb-4 mt-5 mb-lg-0 mt-lg-3 destination_img"/>
                            </div>

                            <div className="col-12 col-lg-6 order-0 order-lg-1 d-flex flex-column align-items-center">
                                <div className="destination_content">
                                    <div className="d-flex destination_button_container mt-4 mt-lg-0">
                                        <a onClick={() => planetClicked("Moon")} className={`my-text-secondary myFontFamily2 fs-5 me-5 ${planetDestination === "Moon" ? "destination_button_clicked text-white" : ""}`}>MOON</a>
                                        <a onClick={() => planetClicked("Mars")} className={`my-text-secondary myFontFamily2 fs-5 me-5 ${planetDestination === "Mars" ? "destination_button_clicked text-white" : ""}`}>MARS</a>
                                        <a onClick={() => planetClicked("Europa")} className={`my-text-secondary myFontFamily2 fs-5 me-5 ${planetDestination === "Europa" ? "destination_button_clicked text-white" : ""}`}>EUROPA</a>
                                        <a onClick={() => planetClicked("Titan")} className={`my-text-secondary myFontFamily2 fs-5 me-5 ${planetDestination === "Titan" ? "destination_button_clicked text-white" : ""}`}>TITAN</a>
                                    </div>
                                    <div>
                                        <p className="text-white myFontFamily destination_title mt-4 mb-2 text-uppercase">{data.destinations.find(dest => dest.name === planetDestination).name}</p>
                                        <p className="my-text-secondary myFontFamily2 fs-5 mb-5">{data.destinations.find(dest => dest.name === planetDestination).description}</p>
                                        <hr className="text-white" />
                                    </div>
                                    <div className="d-flex gap-5 mt-4">
                                        <div>
                                            <p className="my-text-secondary myFontFamily2 mb-2">AVG. DISTANCE</p>
                                            <p className="text-white myFontFamily fs-5 text-uppercase">{data.destinations.find(dest => dest.name === planetDestination).distance}</p>
                                        </div>
                                        <div>
                                            <p className="my-text-secondary myFontFamily2 mb-2">EST. TRAVEL TIME</p>
                                            <p className="text-white myFontFamily fs-5 text-uppercase">{data.destinations.find(dest => dest.name === planetDestination).travel}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Destination