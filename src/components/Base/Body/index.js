import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, CardBody, CardImgOverlay, CardFooter, CardHeader, Button } from 'reactstrap';
import './index.css';
import WomenProduct from './WomenProduct.js';
import KidsProduct from './KidsProduct.js';
import MenProduct from './MenProduct.js';


const Body = () => (
    < >
        < div>
            <div className="col-12 ">
                <img src="hman.jpg" className="h" alt="hman"></img>
                <Button className="but" variant="secondary" href="#men" size="lg">Men</Button>

                <img src="hwoman.jpg" className="h" alt="hman"></img>
                <Button className="but" variant="secondary" href="#women" size="lg">Women</Button>

                <img src="hkid.jpg" className="h" alt="hman"></img>
                <Button className="but" variant="secondary" href="#kids" size="lg">Kids</Button>
            </div>


        </div>  
        <div className="men" >
            <div className="menimg col-12" id="men">
            </div>
            <div className="title">
                <h4>Men's Categories</h4>
                <MenProduct/>
            </div>
        </div>

        <div className="women">
            <div className="womenimg col-12 " id="women">
            </div>
            <div className="title">
                <h4>Women's Categories</h4>
                <WomenProduct/>
            </div>
        </div>

        <div className="kid">
            <div className="kidimg col-12 " id="kids">             
            </div>
            <div className="title">
                <h4>Kids Categories</h4>
                <KidsProduct/>
            </div>
        </div>

        </>
);
export default Body;