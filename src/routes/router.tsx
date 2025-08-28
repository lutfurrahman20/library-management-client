import MainLayout from "@/layouts/MainLayout";
import AddBook from "@/pages/AddBook";
import AllBooks from "@/pages/AllBooks";
import BorrowSummary from "@/pages/BorrowSummary";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "",
    Component: MainLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "books",
        Component: AllBooks,
      },
      {
        path: "add-book",
        Component: AddBook,
      },
      {
        path: "borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);

export default router;