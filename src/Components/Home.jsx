import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Home() {

    return (
        <>
            <div className="home_section">
                <div className="home_container">

                    <div className="row w-100">

                        <div className="col-12 col-lg-6 d-flex flex-column align-items-center p-0">
                            <p className="myFontFamily fs-4 my-text-secondary">SO, YOU WANT TO TRAVEL TO</p>
                            <p className="myFontFamily home_title text-white">SPACE</p>
                            <p className="myFontFamily2 my-text-secondary home_paragraph2">Lets face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                        </div>

                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-0">
                            <div className="home_explore bg-white d-flex justify-content-center align-items-center mb-5 mb-lg-0">
                                <p className="fs-3 myFontFamily mb-0">EXPLORE</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home