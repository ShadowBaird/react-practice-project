
export default function CartItem({name, quantity, price, handleAddItem, handleRemoveItem}) {

    return <li className="cart-item">
        <p>
        {name} - {quantity} X ${price}
        </p>
        <p className="cart-item-actions">
            <button onClick={handleRemoveItem}>-</button>
            <span>{quantity}</span>
            <button onClick={handleAddItem}>+</button>
        </p>
    </li>
}