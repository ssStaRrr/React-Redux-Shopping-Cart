import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as cartActions from "../../redux/actions/cartActions"
import { Link } from 'react-router-dom'
import alertify from 'alertifyjs'

class CartSummary extends Component {

    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " is removed")
    }

    renderEmpty() {
        return (
        <NavItem>
            <NavLink> Cart is Empty</NavLink>
        </NavItem>
        )
    }
    renderSummary() {
        return (
            <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav> CART </DropdownToggle>
                    <DropdownMenu end>
                        {
                            this.props.cart.map(cartItem => (
                                <DropdownItem key={cartItem.product.id}>
                                    <Badge color='danger' onClick={()=> this.removeFromCart(cartItem.product)}> X </Badge>
                                    {cartItem.product.productName}
                                    <Badge color='success'> {cartItem.quantity} </Badge>
                                    </DropdownItem>
                            ))
                        }
                        {/* <DropdownItem> Option 1 </DropdownItem>
                        <DropdownItem> Option 2 </DropdownItem> */}
                        <DropdownItem divider />
                        <DropdownItem> <Link to={"/cart"}> Go to Cart</Link> </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
        )
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }
                
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)
