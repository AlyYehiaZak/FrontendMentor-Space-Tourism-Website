import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import data from "./../Data/data.json";
import { useState } from "react"

function Technology() {

    const [selectedTechnology , setSelectedTechnology] = useState(0)

    return (
        <>
            <div className="technology_section">
                <div className="technology_container">

                    <div className="container">
                        <span className="text-secondary fs-3 myFontFamily fw-bold">03&nbsp;&nbsp;</span>
                        <span className="text-white fs-3 myFontFamily">SPACE LAUNCH 101</span>
                    </div>

                    <div className="w-100 d-flex justify-content-lg-end mt-5 mt-lg-0">
                        <div className="technology_content_container">
                            <div className="w-100 row">

                                <div className="col-12 col-lg-2 d-flex flex-lg-column align-items-center justify-content-center">
                                    <button onClick={()=> setSelectedTechnology(0)} className={`btn border border-white rounded-circle d-flex justify-content-center align-items-center technology_buttons mb-4 me-4 me-lg-0 ${selectedTechnology === 0 ? "technology_buttons_clicked" : ""}`}>
                                        <p className="myFontFamily text-white mb-0 fs-3 technology_buttons_paragraph">1</p>
                                    </button>

                                    <button onClick={()=> setSelectedTechnology(1)} className={`btn border border-white rounded-circle d-flex justify-content-center align-items-center technology_buttons mb-4 me-4 me-lg-0 ${selectedTechnology === 1 ? "technology_buttons_clicked" : ""}`}>
                                        <p className="myFontFamily text-white mb-0 fs-3 technology_buttons_paragraph">2</p>
                                    </button>

                                    <button onClick={()=> setSelectedTechnology(2)} className={`btn border border-white rounded-circle d-flex justify-content-center align-items-center technology_buttons mb-4 me-4 me-lg-0 ${selectedTechnology === 2 ? "technology_buttons_clicked" : ""}`}>
                                        <p className="myFontFamily text-white mb-0 fs-3 technology_buttons_paragraph">3</p>
                                    </button>
                                </div>

                                <div className="col-12 col-lg-5 d-flex flex-column align-items-center justify-content-center">
                                    <div className="mb-4 mt-3 mt-lg-0 mb-lg-2 container">
                                        <p className="my-text-secondary myFontFamily fs-5 mb-1">THE TERMINOLOGY ...</p>
                                        <p className="text-white myFontFamily technology_title text-uppercase">{data.technology[selectedTechnology].name}</p>
                                        <p className="my-text-secondary myFontFamily2">{data.technology[selectedTechnology].description}</p>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                                    <picture>
                                        <source srcSet={data.technology[selectedTechnology].images.landscape} media="(max-width:992px)" />
                                        <img src={data.technology[selectedTechnology].images.portrait} alt="technology" className="technology_img"/>
                                    </picture>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Technology