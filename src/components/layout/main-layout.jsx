import React from "react";
import { Header } from "../header/header";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
});

const MainLayout = ({ children }) => {
  return (
    <div>
      <main className={roboto.className}>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
