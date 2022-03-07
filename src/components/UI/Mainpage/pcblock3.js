import React, {useState} from "react";
import m1 from './res/m1.jpg'
import fm1 from './res/fm1.jpg'
import m2 from './res/m2.jpg'
import fm2 from './res/fm2.jpg'
import m3 from './res/m3.jpg'
import fm3 from './res/fm3.jpg'
import m4 from './res/m4.jpg'
import fm4 from './res/fm4.jpg'
import m5 from './res/m5.jpg'
import fm5 from './res/fm5.jpg'


import 'bootstrap/dist/css/bootstrap.css';
import './pcb3.css';
import Slider from "react-slick";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [m1,fm1,m2,fm2,m3,fm3,m4,fm4,m5,fm5];

  
  
function Pcb3() {

    // const NextArrow = ({onClick}) => {
    //   return (
    //     <div className="arrow next" onClick={onClick}>
    //       <FaArrowRight />
    //     </div>
    //   )
    // }
  
    // const PrevArrow = ({onClick}) => {
    //   return (
    //     <div className="arrow prev" onClick={onClick}>
    //       <FaArrowLeft />
    //     </div>
    //   )
    // }
  
  const [imgIndex,setImgIndex] = useState(0)
  
  const settings = {
    infinite:true,
    lazyLoad: true,
    speed: 300,
    slidesToShow:3,
    centerMode: true,
    centerPadding: 0,
    // variableWidth: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next), 
  };
  
  
    return (
      <div className="pp" >
        <h1 className="pt-5 pb-4 ">India's trending cloths for you..</h1>
        <Slider  {...settings}>
          {images.map((img, idx) => (
       
            <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
                   
              <img src={img} alt={idx} />
            </div>
          ))}
        </Slider>
        <button className=" p-1 px-5 mb-5  btn btn-primary">Lets get started</button>
      </div>
    );
  }
  
  export default Pcb3;