import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import OrderDetail from "./OrderDetail";
export default function OrderForm() {
    const [loadedOrders, setLoadedOrders] = useState([])
    const email = useSelector(state => state.auth.userEmail)
    useEffect(() => {
        async function fetchItems() {
            console.log(email)
            const response = await fetch('http://localhost:3001/orders/email?email=' + email);

            if (!response.ok) {
                //....
            }

            const orders = await response.json();
            setLoadedOrders(orders.order)

        }

        fetchItems();
    }, [email]);
    return (
        <div className="homepage">
            <h1>Orders</h1>
            <ul id="items">
                {loadedOrders.map((item) => (
                    <div key={item.id}>
                        <OrderDetail orderId={item.id} total={item.cartTotal} detail={item.orderDetail} />
                    </div>
                ))}
            </ul>
        </div>
    )
}