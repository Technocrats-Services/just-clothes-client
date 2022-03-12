import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Footer() {
    return (
        <div style={{backgroundColor:"#0d6efd" , color:"white"}}>
            <h4 className='pt-5 text-center'>Join our community and stay updated </h4>
            <div className='d-flex justify-content-center py-4'>
            <a><i className="bi bi-instagram "></i></a>
            <a><i className="bi bi-facebook px-4"></i></a>
            <a><i className="bi bi-twitter "></i></a>
            </div>
            <h6 className='pb-5 text-center'>For any queries mail us at :-<span><a style={{color:"white"}}  href="mailto:justclothes.in@gmail.com ">justclothes.in@gmail.com</a></span></h6>
            <p className='pb-1 text-center'>Copyright 2022 justcloths</p>
        </div>

    )
}