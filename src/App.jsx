import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import Contact from "./routes/Contact";
import { loader as rootLoader } from "./routes/Root";
import { action as rootAction } from "./routes/Root";
import {
  loader as contactLoader,
  action as contactAction,
} from "./routes/Contact";
import EditContact, { action as editAction } from "./routes/Edit";
import { action as destroyAction } from "./routes/Destroy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: (
          <p id="zero-state">
            This is a demo for React Router.
            <br />
            Check out{" "}
            <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
          </p>
        ),
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
