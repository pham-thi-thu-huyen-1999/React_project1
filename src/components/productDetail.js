import React from 'react'
import axios from 'axios'
class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            count: 0
        }

    }
    changeCount = (type) => {
        let count = this.state.count + 1
        if (type === 'reduction') {
            if (count > 2) {
                count = this.state.count - 1
            }
        }
        this.setState({ count })
    }
    async componentDidMount() {
        var { match : {params}} = this.props
        const { idProduct } = this.props.match.params
        const { data } = await axios.get('http://localhost:4000/api/product/' + idProduct)
        this.setState({ product: data.product })
    }
    render() {
        var { product } = this.state


        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">{product !== null ? product.id : <></>}</th>
                        <th scope="col">{product !== null ? product.phoneName : <></>}</th>
                        <th scope="col">{product !== null ? product.price : <></>}</th>
                        <th scope="col">
                            <button type="button" className="btn btn-warning" onClick={e => this.changeCount('reduction')}>-</button>
                            {this.state.count}
                            <button type="button" className="btn btn-info" onClick={e => this.changeCount('increase')}>+</button>
                        </th>
                    </tr>
                </thead>
            </table>
        )
    }
}

export default ProductDetail;

