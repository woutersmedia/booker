"use client";

import { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import "@/app/globals.css";
import './toast.css'
import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({
  children,
}: ToastProviderProps) => {
  const contextClass = {
    success: "bg-blue-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <>
      {children}
      <ToastContainer
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " relative flex py-2 px-4 min-h-10 rounded-md justify-between items-center overflow-hidden cursor-pointer"
        }
        position="top-right"
        autoClose={3000}
      />
    </>
  );
};
