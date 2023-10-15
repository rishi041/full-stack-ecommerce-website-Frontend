import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Registration/Register";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import VerifyToken from "./components/VerifyToken/VerifyToken";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Header />
            <Products />
          </>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      {
        path: "/login/profile",
        element: <VerifyToken />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/book" element={<h1>Hi Rushi</h1>}></Route>
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </>
  );
}

export default App;
