import { useDispatch, useSelector } from "react-redux"
import { authActions } from '../store';
import { useEffect } from "react";
export default function HomePage() {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuthenticated)


    useEffect(() => {
        const email = localStorage.getItem('email')
        if (localStorage.getItem('token')) {
            dispatch(authActions.login(email))
        }
    }, [])

    return (
        <div className="homepage">
            {!isAuth ? <>
                <h1>Welcome to the shop</h1>
                <p>Please log in to start adding products to the cart</p>
            </> :
                <>
                <h1>Thank you for login in</h1>
                <p>You can go to the products page to start adding products, go to your cart to confirm your order
                    and go to the Orders page to check all your orders
                </p>
                </>}

        </div>
    )
}