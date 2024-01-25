import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.jsx";
export default function Fruits() {
    const [loadedItems, setLoadedItems] = useState([])
    useEffect(() => {
        async function fetchItems() {

            const response = await fetch('http://localhost:3001/items');

            if (!response.ok) {
                //pending if not
            }

            const fruits = await response.json();
            setLoadedItems(fruits.items)

        }

        fetchItems();
    }, []);
    return (
        <ul id="items">
            {loadedItems.map((item) => (
                <ItemDetail key={item.id} item={item} />
            ))}
        </ul>
    )
}