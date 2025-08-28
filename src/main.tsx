import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/router";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "sonner";
import { Tooltip } from "react-tooltip";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={router} />
      <Tooltip id="my-tooltip" />
    </Provider>
  </StrictMode>
);
