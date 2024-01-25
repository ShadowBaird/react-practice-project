export default function OrderDetail({ orderId, total, detail }) {
    return (
        <li className="item">
            {detail.map((item) => {
                return (
                    <div key={orderId + item.product}>
                        <p>{item.product} X {item.quantity}</p>
                    </div>
                )
            })}
            <hr></hr>
            <p>Total: ${total.toFixed(2)}</p>
        </li>
    )
}