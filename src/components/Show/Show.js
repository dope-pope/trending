import React, { Component } from 'react';
import PRODUCTS from '../Data';
import axios from 'axios';


class Show extends Component {
    constructor(props, { match }) {
        super(props, { match });
        this.state = { productName: " ", productImg:" ", productDescription:" ", productCategory:" "};
    }
    componentDidMount() {
        axios.get('http://localhost:8000/products/${this.state.productCategory')
            .then((res) => {
                var selectedProduct = res.data[0];

                this.setState({
                    productName: selectedProduct.productName,
                    productImg: selectedProduct.productImg,
                    productDescription: selectedProduct.productDescription,
                    productCategory: selectedProduct.productCategory
                })
            })
    }
    render() {
        return(
            <div>
                
                {PRODUCTS.map((product) => {
                return(
                    <div>
                        
                        
                      
                            <div>
                                <img src={product.category} alt={product.category} />
                                <p> {product.name}</p>
                            </div>
                      
                    </div>

           ) })
            }

</div>
        )
    }
}
export default Show;
