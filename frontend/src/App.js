import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Pages/Root';
import ErrorPage from './Pages/Error';
import HomePage from './Pages/Home';
import ProductsPage from './Pages/Products';
import OrderPage from './Pages/Order';
import AuthenticationPage , {action as authAction}  from './Pages/Authentication';
import { checkAuthLoader } from './util/util';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />, errorElement: <ErrorPage />,children: [
        { index: true, path: '/', element: <HomePage /> },
        { path: '/products', element: <ProductsPage />, loader: checkAuthLoader },
        { path: '/auth', element: <AuthenticationPage />, action: authAction  },
        { path: '/orders', element: <OrderPage />, loader: checkAuthLoader },
      ]
    },
  ])

  return <RouterProvider router={router} />;

}

export default App;
