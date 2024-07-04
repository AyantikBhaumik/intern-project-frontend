import React from "react";
import { Header } from "../header/header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <main>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
