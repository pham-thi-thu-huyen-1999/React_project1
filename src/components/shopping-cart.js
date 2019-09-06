import React from "react";

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increase = (count) => {
        if (this.state.count <= 10) {
            count = this.state.count + 1
        }
        this.setState({ count })
    }
    reduction = (count) => {
        if (this.state.count >= 1) {
            count = this.state.count - 1
        }
        this.setState({ count })
    }
    render() {
        return (
            <div className='row'>
                <div className="col-md-4">
                    <h3>name product</h3>
                </div>
                <div className="col-md-4">
                    <h3>price product</h3>
                </div>
                <div className="col-md-4">
                    <button type="button" className="btn btn-warning" onClick={this.reduction}>-</button>
                    {this.state.count}
                    <button type="button" className="btn btn-info" onClick={this.increase}>+</button>
                </div>
            </div>
        )
    }
};
export default ShoppingCart