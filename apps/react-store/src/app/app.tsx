import { Route, Routes, Link } from 'react-router-dom';

// Importing products library
import { ReactMonorepoProducts } from '@react-monorepo/products';
import { ReactMonorepoOrders } from '@react-monorepo/orders';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welocome Home!!</h1>
              <Link to="products">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/products" element={<ReactMonorepoProducts />} />
        <Route path="/orders" element={<ReactMonorepoOrders />} />
      </Routes>
    </div>
  );
}

export default App;
