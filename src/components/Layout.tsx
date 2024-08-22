"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./../redux/store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Layout;
