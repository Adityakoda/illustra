import React, { useState } from "react";
import './gallary.css';
import photo1 from'./images/gallary1.jpg';
import photo2 from'./images/gallary2.jpg';
import photo3 from'./images/gallary3.jpg';
import photo4 from'./images/gallary4.jpg';
import photo5 from'./images/gallary5.jpg';
import photo6 from'./images/gallary6.jpg';
import photo7 from'./images/gallary7.jpg';
import photo8 from'./images/gallary8.jpg';
import photo9 from'./images/gallary9.jpg';
import photo10 from'./images/gallary10.jpg';
import photo11 from'./images/gallary11.jpg';
import photo12 from'./images/gallary12.jpg';
import photo13 from'./images/gallary13.jpg';
import photo14 from'./images/gallary14.jpg';
import photo15 from'./images/gallary15.jpg';
import photo16 from'./images/gallary16.jpg';
import photo17 from'./images/gallary17.jpg';
import photo18 from'./images/gallary18.jpg';
import photo19 from'./images/gallary19.jpg';
import photo20 from'./images/gallary20.jpg';
import photo21 from'./images/gallary21.jpg';
import photo24 from'./images/gallary24.jpg';
import photo23 from'./images/gallary23.jpg';
import download from './images/download.svg';
import photo22 from'./images/gallary22.jpg';
import photo25 from'./images/gallary25.jpg';
import photo26 from'./images/gallary26.jpg';
import photo27 from'./images/gallary27.jpg';
import photo28 from'./images/gallary28.jpg';
import photo29 from'./images/gallary29.jpg';
import photo30 from'./images/gallary30.jpg';
import photo42 from'./images/gallary44.jpg';
import photo45 from'./images/gallary45.jpg';
import photo31 from'./images/gallary31.jpg';
import photo32 from'./images/gallary32.jpg';
import photo33 from'./images/gallary33.jpg';
import photo34 from'./images/gallary34.jpg';
import photo35 from'./images/gallary35.jpg';
import photo36 from'./images/gallary36.jpg';
import photo37 from'./images/gallary37.jpg';
import photo38 from'./images/gallary38.jpg';
import photo39 from'./images/gallary39.jpg';
import photo40 from'./images/gallary40.jpg';
import photo41 from'./images/gallary41.jpg';
import photo44 from'./images/gallary44.jpg';
import photo43 from'./images/gallary43.jpg';
import photo46 from'./images/gallary46.jpg';

function Gallary(){ 
    const [isPopular, setIsPopular] = useState(true);
    return(
        <section className="container5"> 
            <h1>Explore More</h1>
            <div className="top-contents">
                <label htmlFor="check1" onClick={() => setIsPopular(true)}>Popular</label>
                <label htmlFor="check2" onClick={() => setIsPopular(false)}>Latest</label>
            </div>
            <div className="photo-gallary">
                {isPopular && (
                    <>
                    <div className="column">
                        <div className="photo">
                            <img src={photo6} alt="photo1" id="up" ></img>
                            <a href={photo6} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo2} alt="photo2" ></img>
                            <a href={photo2} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo3} alt="photo3" ></img>
                            <a href={photo3} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo16} alt="photo16" ></img>
                            <a href={photo16} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                    
                        <div className="photo">
                            <img src={photo21} alt="photo3" ></img>
                            <a href={photo21} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="photo">
                            <img src={photo4} alt="photo4" ></img>
                            <a href={photo4} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo5} alt="photo5" ></img>
                            <a href={photo5} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo1} alt="photo6" ></img>
                            <a href={photo1} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo13} alt="photo10" ></img>
                            <a href={photo13} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo17} alt="photo3" ></img>
                            <a href={photo17} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo20} alt="photo3" ></img>
                            <a href={photo28} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="photo">
                            <img src={photo7} alt="photo7" ></img>
                            <a href={photo7} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo8} alt="photo8" ></img>
                            <a href={photo8} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo9} alt="photo9" ></img>
                            <a href={photo9} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                                <img src={photo14} alt="photo11" ></img>
                                <a href={photo14} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo18} alt="photo3" ></img>
                            <a href={photo18} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo23} alt="photo3" ></img>
                            <a href={photo23} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="photo">
                            <img src={photo10} alt="photo10" ></img>
                            <a href={photo10} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo11} alt="photo11" ></img>
                            <a href={photo11} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo12} alt="photo12" ></img>
                            <a href={photo12} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo15} alt="photo12" ></img>
                            <a href={photo15} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo19} alt="photo3" ></img>
                            <a href={photo19} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo">
                            <img src={photo24} alt="photo3" ></img>
                            <a href={photo24} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                    </div>
                    </>
                )}
                {!isPopular && (
                    <>
                    <div className="column1">
                        <div className="photo1">    
                            <img src={photo22} alt="photo1" id="up" ></img>
                            <a href={photo22} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo25} alt="photo2" ></img>
                            <a href={photo25} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo26} alt="photo3" ></img>
                            <a href={photo26} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo27} alt="photo16" ></img>
                            <a href={photo27} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                    
                        <div className="photo1">
                            <img src={photo28} alt="photo3" ></img>
                            <a href={photo28} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                    </div>
                    <div className="column1">
                        <div className="photo1">
                            <img src={photo29} alt="photo4" ></img>
                            <a href={photo29} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo30} alt="photo5" ></img>
                            <a href={photo30} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo31} alt="photo6" ></img>
                            <a href={photo31} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                                <img src={photo32} alt="photo10" ></img>
                                <a href={photo32} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo33} alt="photo3" ></img>
                            <a href={photo33} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo34} alt="photo3" ></img>
                            <a href={photo34} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                    </div>
                    <div className="column1">
                        <div className="photo1">
                            <img src={photo35} alt="photo7" ></img>
                            <a href={photo35} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo36} alt="photo8" ></img>
                            <a href={photo36} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo37} alt="photo9" ></img>
                            <a href={photo37} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                                <img src={photo38} alt="photo11" ></img>
                                <a href={photo38} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo39} alt="photo3" ></img>
                            <a href={photo39} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo40} alt="photo3" ></img>
                            <a href={photo40} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                    </div>
                    <div className="column1">
                        <div className="photo1">
                            <img src={photo41} alt="photo10" ></img>
                            <a href={photo41} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo42} alt="photo11" ></img>
                            <a href={photo42} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo43} alt="photo12" ></img>
                            <a href={photo43} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                                <img src={photo44} alt="photo12" ></img>
                                <a href={photo44} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo45} alt="photo3" ></img>
                            <a href={photo45} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                        <div className="photo1">
                            <img src={photo46} alt="photo3" ></img>
                            <a href={photo46} download className="download-btn">
                                <img src={download} alt="download" />
                            </a>
                        </div>
                    </div>
                    </>
                )}
            </div>
        </section>
    );
}
export default Gallary;