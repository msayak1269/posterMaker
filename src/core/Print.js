import React from 'react'
// import img3 from "../images/img3.jpg"
import img2 from "../images/img2.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import Pdf from "react-to-pdf"
const ref = React.createRef();
const Page2 = (props) => {
    console.log(props.location.dataProps);
    // const [values, setValues] = useState();
    // // setValues(props.location.dataProps)
    const values=props.location.dataProps;
    return (
        <div className="container text-center p-2">
            <Pdf targetRef={ref} filename="myPoster.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div className="card" ref={ref}
                style={{
                    height: "1123px",
                    width: "793px",
                    border: "40px solid",
                    borderColor: values.borderColor
                }}
            >
                <div className="card-body" style={{ padding: "2px" }}>
                    <div>
                        {/* <img src={require(values.image)} alt=""
                            style={{
                                height: "480px",
                                width: "100%",
                                borderRadius:"1%"
                            }}
                        /> */}
                        {values.image && <ImageThumb image={values.image} />}
                    </div>
                    <div
                        style={{
                            height:"100px",
                            marginTop:"6px",
                            border:"2px solid red",
                            margin:"7px",
                            padding:"5px"
                        }}
                    >
                        <h4>{values.name}</h4>
                        <h4>{values.specialization}</h4>
                    </div>
                    <div
                        style={{
                            height: "300px",
                            margin: "7px",
                            padding:"5px",
                            border: "2px solid red"
                        }}
                    >
                        <h3>{values.msg}</h3>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-4"
                                style={{
                                    borderRight: "1px solid red",
                                    top: "50%"
                                }}
                            >
                                <img src={img2} alt=""
                                    style={{
                                        height: "120px"
                                    }}
                                />
                            </div>
                            <div className="col-4"
                                style={{
                                    borderRight: "1px solid red",
                                    top: "50%"
                                }}
                            >
                                <img src={img4} alt=""
                                    style={{
                                        height: "40px",
                                        width:"200px",
                                        marginTop:"40px"
                                    }}
                                />
                            </div>
                            <div className="col-4">
                                <h6>IN PARTNERSHIP WITH</h6>
                                <img src={img5} alt=""
                                    style={{
                                        height: "100px"
                                    }}
                                />
                            </div>
                        </div>
                        {/* <h4 className="text-center p-1">#UseHeart#WorldHeartDay</h4> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} style={{ height: "480px", width: "100%",objectFit:"contain" }} />;
};

export default Page2;