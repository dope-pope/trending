import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, CardBody, CardImgOverlay, CardFooter, CardHeader } from 'reactstrap';
import './App.css';


class App extends Component {

    render() {
        return (
            <div className="App">
               
                <div>
                    {this.props.children}
                </div>
               
            </div>

        );
    }

}
export default App;
