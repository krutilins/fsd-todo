import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const TasksListPage = lazy(() => import("./tasks-list"));
      return { Component: TasksListPage };
    },
  },
  {
    path: "/:taskId",
    lazy: async () => {
      const TaskDetailsPage = lazy(() => import("./task-details"));
      return { Component: TaskDetailsPage };
    },
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
