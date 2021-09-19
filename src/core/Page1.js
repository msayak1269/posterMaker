import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../images/img1.jpg"
const Page1 = () => {
    return (
        <div className="container-fluid"
            style={{
                backgroundImage: "linear-gradient(to top right, #F037A5, #A239EA)",
                height: "100vh",
                fontFamily: "IBM Plex Sans Hebrew, sans-serif"
            }}
        >
            <div className="container-fluid text-center p-2">
                <div className="row">
                    <div className="col-xl-6"
                        style={{
                            padding:"1%"
                        }}
                    >
                        <img src={img1} alt=""
                            style={{
                                borderRadius: "50px",
                                width: "100%"
                            }}
                        />
                    </div>
                    <div className="col-xl-6 text-white">
                        <div
                            style={{
                                padding:"10%",
                                fontSize:"33px"
                            }}
                        >
                            Design Your own Poster on
                            <br />
                            World Heart Day
                            <br />
                            29th September
                            <br />
                        </div>
                        <div
                            style={{
                                padding:"7%"
                            }}
                        >
                            <Link to="/page2">
                                <div className="btn text-white btn-lg"
                                    style={{
                                        backgroundColor: "#66DE93",
                                        borderRadius: "50px"
                                    }}
                                >
                                    Create Here
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <h6 className="text-center text-white"
                style={{
                    fontSize:"25px"
                }}
            >
                #UseHeart#WorldHeartDay</h6>
        </div>
    );
}

export default Page1;