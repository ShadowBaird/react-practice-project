import Button from "./UI/Button"
import{useDispatch} from 'react-redux'
import { cartActions } from '../store';
export default function ItemDetail({item}) {
    const dispatch = useDispatch()

    const handleAddItem = () =>{
        dispatch(cartActions.add(item))
    }
    return <li className="item">
        <article>
        <img src={item.image} alt={item.name}/>
        <div>
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">${(item.price)}</p>
            <p className="item-description">{item.description}</p>
        </div>
        <p className="item-actions">
            <Button onClick={handleAddItem}>Add to Cart</Button>
        </p>
        </article>
    </li>
}