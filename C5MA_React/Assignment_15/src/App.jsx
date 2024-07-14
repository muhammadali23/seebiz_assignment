import Listing from "./Components/Listing";
import FormComponent from "./Components/Form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Edit from "./Components/Edit";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Listing />,
    },
    {
      path: "/create",
      element: <FormComponent />,
    },
    {
      path: "/edit",
      element: <Edit />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
