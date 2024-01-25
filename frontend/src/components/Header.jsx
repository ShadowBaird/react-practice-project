import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { modalCartActions, authActions } from '../store';
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

import Button from './UI/Button';
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const cart = useSelector(state => state.cart.items)
  const totalCartItems = cart.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity
  }, 0)

  const logoutHandler = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')
    localStorage.removeItem('email')
    dispatch(authActions.logout())
    navigate('/')
  }

  useEffect(() => {
  }, [isAuth])

  function handleShowCart() {
    dispatch(modalCartActions.open())
  }
  return (
    <header className={classes.header}>
      <h1>React Demo</h1>
      {localStorage.getItem('token') && (
        <>
          <nav>
            <ul className={classes.list}>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)}
                  end
                >Home</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? classes.active : undefined)} to="/orders">
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? classes.active : undefined)} to="/products">
                  Products
                </NavLink>
              </li>
            </ul>
          </nav>
          <Button onClick={() => { logoutHandler() }}>
            Logout
          </Button>
          <Button onClick={handleShowCart}>
            Cart ({totalCartItems})
          </Button>
        </>

      )}
      {!localStorage.getItem('token') && (
        <NavLink className={({ isActive }) => (isActive ? classes.active : undefined)} to="/auth">
          Authentication
        </NavLink>
      )}

    </header>
  );
};

export default Header;
