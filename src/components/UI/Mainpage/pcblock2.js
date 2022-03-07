
import img1 from './res/crl3.jpg'
import img2 from './res/crl2.jpg'


import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Pcb2() {
return (
	<div className='container-red mt-2' style={{ display: 'block'}}>
	{/* <h4>React-Bootstrap Carousel Component</h4> */}
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="img-fluid bg-blend-darken" height='720'
src={img1}
			alt="Image One"
		/>
		<Carousel.Caption>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className=" img-fluid"
src={img2}
			alt="Image Two"
		/>
		<Carousel.Caption>
			<h3>Label for second slide</h3>
			<p>Sample Text for Image Two</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}

