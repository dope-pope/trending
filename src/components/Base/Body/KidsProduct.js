//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Internals
import PRODUCTS from '../../Data';
import './Kids.css';
import axios from 'axios';

class KidsProduct extends Component {
    constructor(props, { match }) {
        super(props, { match });
        this.state = { products: [] };
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
            <div className="items">
                {PRODUCTS.map((product) => {
                    if (product.gender === "kid") {
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
            </div>
            )
            }
}

export default KidsProduct;
