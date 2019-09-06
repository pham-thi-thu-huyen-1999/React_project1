import React from 'react';
// import ShoppingCart from "./shopping-cart";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProducts: [
                {
                    "id": 1,
                    "phoneName": "iphone",
                    "price": "15000000d",
                    "description": "222",
                    "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795416637"
                },
                {
                    "id": 2,
                    "phoneName": "oppo",
                    "price": "10000000",
                    "image": "https://www.91-img.com/pictures/133188-v4-oppo-f11-mobile-phone-large-1.jpg"
                },
                {
                    "id": 3,
                    "phoneName": "samsung",
                    "price": "7000000",
                    "image": "https://image-us.samsung.com/SamsungUS/mobile/phones/06102019-new/NEW_Regular_S10_Lockup1_Blue_gallery.jpg?$product-details-jpg$"
                }
            ],
        }

    }
    detailProduct() {
        fetch(this.state.dataProducts)
            .then(results => results.json())
            .then(data => {
                console.log(data)
                this.setState({
                    dataProducts: data.results
                })
            })
    }
    render() {
        var { dataProducts } = this.state;
        var elmProduct = dataProducts.map((product, index) => {
            return (
                <Router>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">{product.phoneName}</p>
                                <p className="card-text">{product.price}</p>
                                <a className="btn btn-primary">mua ngay</a>
                                <a className="btn btn-danger" ><Link to='/products/:idProduct'>chi tiet</Link></a>
                            </div>
                        </div>
                    </div>
                </Router>
            )
        })
        return (
            <div className="content">
                <div className="row">
                    {elmProduct}
                </div>
            </div>
        )
    }
}

export default Product;

