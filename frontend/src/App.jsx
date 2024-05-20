import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Loader from "./ui/Loader";

import Login from "./pages/registration/Login";
import Register from "./pages/registration/Register";

import Home from "./pages/Home";
import MyVehicles from "./pages/MyVehicles";
import Services from "./pages/Services";
import MyLocation from "./pages/MyLocation";
import CreateVehicle from "./pages/CreateVehicle";
import Service from "./pages/Service";
import CreateBooking from "./pages/CreateBooking";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import AdminLayout from "./ui/AdminLayout";

import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Vehicles from "./pages/admin/Vehicles";
import Records from "./pages/admin/Records";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/myvehicles" element={<MyVehicles />} />
              <Route path="/services" element={<Services />} />
              <Route path="/mylocation" element={<MyLocation />} />
              <Route path="/myvehicles/new" element={<CreateVehicle />} />
              <Route path="/services/:id/new" element={<CreateBooking />} />
              <Route path="/services/:id" element={<Service />} />

              <Route
                element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/vehicles" element={<Vehicles />} />
                <Route path="/admin/records" element={<Records />} />
              </Route>
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            mawWidth: "900px",
            padding: "16px 24px",
            color: "#fff",
            background: "#333",
            borderRadius: "8px",
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
