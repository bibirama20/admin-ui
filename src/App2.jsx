import "./App.css";
import SignInPage from "./pages/SignInNew";
import SignUpPage from "./pages/SignUp";
import ErrorPage from "./pages/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex flex-col justify-center items-center min-h-screen gap-5">
          <div>Halaman Utama</div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="px-4 py-2 bg-primary text-white rounded">
              Login
            </Link>

            <span className="font-semibold">|</span>

            <Link to="/register" className="px-4 py-2 bg-primary text-white rounded">
              Register
            </Link>

          </div>
        </div>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
}

export default App;
