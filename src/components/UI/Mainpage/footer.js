import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Footer() {
    return (
        <div style={{backgroundColor:"#0d6efd" , color:"white"}}>
            <h4 className='pt-5 text-center'>Join our community and stay updated </h4>
            <div className='d-flex justify-content-center py-4'>
            <i className="bi bi-instagram "></i>
            <i className="bi bi-facebook px-4"></i>
            <i className="bi bi-twitter "></i>
            </div>
            <h6 className='pb-5 text-center'>For any queries mail us at :-<span><a style={{color:"white"}}  href="support@justcloths.com">suport@justcloths.com</a></span></h6>
            <p className='pb-1 text-center'>Copyright 2022 justcloths</p>
        </div>

    )
}