import { useState } from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieList from "./pages/MovieList";
import WatchLater from "./pages/WatchLater";
import Home from "./pages/Home";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <MovieList />,
        },
        {
          path: "/watchlater",
          element: <WatchLater />,
        },
      ],
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return (
    <div className="h-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
