import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function PageNotFound() {

    return (
        <>
            <div className="error_section bg-dark">
                <div className="error_container">
                    <div className="d-flex flex-column align-items-center">
                        <h2 className="myFontFamily text-white mb-3">PAGE NOT FOUND</h2>
                        <p className="myFontFamily text-white">INVALID URL</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound
