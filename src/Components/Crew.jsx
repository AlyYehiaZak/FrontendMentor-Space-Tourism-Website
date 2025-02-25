import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import data from "./../Data/data.json";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation , Pagination } from 'swiper/modules';


function Crew() {

    return (
        <>
            <div className="crew_section">
                <div className="crew_container">
                    <div className="container">
                        <span className="text-secondary fs-3 myFontFamily fw-bold">02&nbsp;&nbsp;</span>
                        <span className="text-white fs-3 myFontFamily">MEET YOUR CREW</span>

                        <div>

                            <Swiper
                                effect={'fade'}
                                fadeEffect={{ crossFade: true }}
                                pagination={{ clickable: true }}
                                modules={[EffectFade, Navigation, Pagination]}
                            >

                                <SwiperSlide>
                                    <div className="w-100 row mt-5 mt-lg-0">

                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-lg-center align-items-center crew_content_container">
                                            <div className="crew_paragraphs_width">
                                                <p className="my-text-secondary myFontFamily fs-3 mb-0 text-uppercase">{data.crew[0].role}</p>
                                                <p className="text-white myFontFamily crew_title text-uppercase">{data.crew[0].name}</p>
                                                <p className="my-text-secondary myFontFamily2 fs-5">{data.crew[0].bio}</p>
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-6 d-flex justify-content-center crew_content_container mt-5 mt-lg-0">
                                            <img src={data.crew[0].images.png} alt="crew" className="crew_img" />
                                        </div>

                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="w-100 row mt-5 mt-lg-0">

                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-lg-center align-items-center crew_content_container">
                                            <div className="crew_paragraphs_width">
                                                <p className="my-text-secondary myFontFamily fs-3 mb-0 text-uppercase">{data.crew[1].role}</p>
                                                <p className="text-white myFontFamily crew_title text-uppercase">{data.crew[1].name}</p>
                                                <p className="my-text-secondary myFontFamily2 fs-5">{data.crew[1].bio}</p>
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-6 d-flex justify-content-center crew_content_container mt-5 mt-lg-0">
                                            <img src={data.crew[1].images.png} alt="crew" className="crew_img" />
                                        </div>

                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="w-100 row mt-5 mt-lg-0">

                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-lg-center align-items-center crew_content_container">
                                            <div className="crew_paragraphs_width">
                                                <p className="my-text-secondary myFontFamily fs-3 mb-0 text-uppercase">{data.crew[2].role}</p>
                                                <p className="text-white myFontFamily crew_title text-uppercase">{data.crew[2].name}</p>
                                                <p className="my-text-secondary myFontFamily2 fs-5">{data.crew[2].bio}</p>
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-6 d-flex justify-content-center crew_content_container mt-5 mt-lg-0">
                                            <img src={data.crew[2].images.png} alt="crew" className="crew_img" />
                                        </div>

                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="w-100 row mt-5 mt-lg-0">

                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-lg-center align-items-center crew_content_container">
                                            <div className="crew_paragraphs_width">
                                                <p className="my-text-secondary myFontFamily fs-3 mb-0 text-uppercase">{data.crew[3].role}</p>
                                                <p className="text-white myFontFamily crew_title text-uppercase">{data.crew[3].name}</p>
                                                <p className="my-text-secondary myFontFamily2 fs-5">{data.crew[3].bio}</p>
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-6 d-flex justify-content-center crew_content_container mt-5 mt-lg-0">
                                            <img src={data.crew[3].images.png} alt="crew" className="crew_img" />
                                        </div>

                                    </div>
                                </SwiperSlide>
                                
                            </Swiper>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Crew