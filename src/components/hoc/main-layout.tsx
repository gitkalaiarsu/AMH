"use client";
import { ToastContainer } from "react-toastify";
import { ReduxProvider } from "@/store/provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ToastContainer />
      <ReduxProvider>{children}</ReduxProvider>
    </>
  );
};

export default Layout;
