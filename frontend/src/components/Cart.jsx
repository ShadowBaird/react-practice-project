import Button from "./UI/Button";
import Modal from "./UI/Modal"
import { useSelector, useDispatch } from 'react-redux';
import { modalCartActions, cartActions } from '../store';
import CartItem from "./CartItem";
import { getAuthToken } from "../util/util";

export default function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.items)
    const email = useSelector(state => state.auth.userEmail)
    const cartTotal = cart.reduce((totalPrice, item) => totalPrice + item.quantity * item.price,
        0)
    const open = useSelector(state => state.modalCart.show)

    function handleCloseCart() {
        dispatch(modalCartActions.close())
    }


    const handleAddItem = (item) => {
        dispatch(cartActions.add(item))
    }

    const handleRemoveItem = (item) => {
        dispatch(cartActions.remove(item))
    }

    async function handleSaveOrder() {
        const orderDetail = cart.map((product) => {
            return {
                product: product.name,
                quantity: product.quantity
            }
        })
        const orderData = {
            orderDetail,
            email,
            cartTotal
        }
        const token = getAuthToken()
        await fetch('http://localhost:3001/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+token,
            },
            body: JSON.stringify(orderData)
        })
        alert("Order Saved")
        dispatch(cartActions.empty())
    }

    return (
        <Modal className="cart" open={open}>
            <h2>Your Cart</h2>
            {cart.length > 0 && (
                <>
                    <ul>
                        {cart.map(item => <CartItem key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            handleAddItem={() => handleAddItem(item)}
                            handleRemoveItem={() => handleRemoveItem(item.id)} />)}
                    </ul>
                    <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
                </>
            )}
            {cart.length === 0 && (
                <>
                    <p>No items in the cart</p>
                </>
            )}
            <p className="modal-actions">
                <Button onClick={handleCloseCart} textOnly>Close</Button>
                <Button onClick={() => {
                    handleSaveOrder()
                    handleCloseCart()
                }} textOnly>Save Order</Button>
            </p>
        </Modal>
    )
}