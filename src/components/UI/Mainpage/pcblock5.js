import img1 from "./res/clr1.png";
import "./pcb5.css";

// import Carousel from 'react-bootstrap/Carousel';

export default function Pcb5() {
  return (
    <div className="cont">
      <img
        className="img-responsive"
        src={img1}
        alt="Snow"
        style={{ width: "100%" }}
      ></img>
      <div className="centered">
        <h1>100% Free T-Shirts for you</h1>
        <button className=" p-1 px-2   btn btn-primary">
          Lets get started
        </button>
      </div>
    </div>
  );
}
