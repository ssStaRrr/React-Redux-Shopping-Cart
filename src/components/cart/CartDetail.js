import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as cartActions from "../../redux/actions/cartActions"
import { connect } from 'react-redux'
import { Table, Button } from 'reactstrap';
import alertify from 'alertifyjs';

class CartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " is removed")
    }

    render() {
        return (
            <div>
                 <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map(cartItem => {
                                return (<tr key={cartItem.product.id}>
                                    <th scope="row"> {cartItem.product.id} </th>
                                    <td> {cartItem.product.productName}</td>
                                    <td> {cartItem.product.unitPrice} </td>
                                    <td> {cartItem.quantity} </td>
                                    <td>
                                        <Button
                                            color='danger'
                                            onClick={() => this.removeFromCart(cartItem.product)}
                                        >
                                            Remove
                                        </Button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions : {
            removeFromCart: bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)
