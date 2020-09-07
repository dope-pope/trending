//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PRODUCTS from '../../Data';
import './Women.css';
import { render } from 'react-dom';

class WomenProduct extends Component {
    constructor(props, { match }) {
        super(props, { match });
        this.state = { products:[] };
    }
    componentDidMount() {
        axios.get('http://localhost:8000/products')
            .then((res) => {
                
                this.setState({
                    products: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <div className="items">
                    {PRODUCTS.map((product) => {
                        if (product.gender === "women") {
                            return (
                                <Link to={`/show`}>
                                    <div className="item">
                                        <div className="product-img">
                                            <img alt={product.name} src={product.img} />
                                        </div>
                                        <div className="product-details">
                                            <h1 id="product-name">{product.category}</h1>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                </div >
            </div>
        )
    }
}

export default WomenProduct;
